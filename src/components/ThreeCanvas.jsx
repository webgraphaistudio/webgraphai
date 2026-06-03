import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeCanvas = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth;
    let height = container.clientHeight;
    let isVisible = true;
    let isTabActive = true;
    let shouldAnimate = true;

    // Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2('#08111F', 0.002);

    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 240;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Main Group
    const networkGroup = new THREE.Group();
    scene.add(networkGroup);

    // Particle nodes properties
    const particleCount = 65;
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];
    const minDistance = 65;

    // Distribute particles in a spherical layout
    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 120;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      velocities.push({
        x: (Math.random() - 0.5) * 0.14,
        y: (Math.random() - 0.5) * 0.14,
        z: (Math.random() - 0.5) * 0.14,
      });
    }

    // Nodes geometry & dynamic buffer mapping
    const pointsGeometry = new THREE.BufferGeometry();
    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Custom circular glow texture
    const createCircleTexture = () => {
      const size = 32;
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      
      const grad = ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2);
      grad.addColorStop(0, 'rgba(10, 132, 255, 1)');
      grad.addColorStop(0.3, 'rgba(0, 87, 255, 0.7)');
      grad.addColorStop(1, 'rgba(0, 87, 255, 0)');
      
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, size, size);
      
      return new THREE.CanvasTexture(canvas);
    };

    const pointsMaterial = new THREE.PointsMaterial({
      size: 5,
      map: createCircleTexture(),
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const pointCloud = new THREE.Points(pointsGeometry, pointsMaterial);
    networkGroup.add(pointCloud);

    // Neural Grid Icosahedron core (brand visual element)
    const coreGeometry = new THREE.IcosahedronGeometry(36, 2);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0x0A84FF,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    networkGroup.add(coreMesh);

    // Glowing inner core structure representing AI Studio Center (glowing orange-gold)
    const innerCoreGeo = new THREE.SphereGeometry(14, 16, 16);
    const innerCoreMat = new THREE.MeshBasicMaterial({
      color: 0xFF9F1C,
      transparent: true,
      opacity: 0.35,
    });
    const innerCoreMesh = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    networkGroup.add(innerCoreMesh);

    // Connective Lines segments arrays
    const maxConnections = particleCount * particleCount;
    const linePositions = new Float32Array(maxConnections * 6);
    const lineColors = new Float32Array(maxConnections * 6);

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
    });

    const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
    networkGroup.add(lineSegments);

    // Interaction variables
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMouseMove = (e) => {
      targetX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      targetY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
    };

    window.addEventListener('mousemove', onMouseMove);

    // Render loop (use performance.now() instead of deprecated THREE.Clock)
    const startTime = performance.now();
    let animationFrameId;
    const posAttr = pointsGeometry.getAttribute('position');

    const animate = () => {
      if (!shouldAnimate) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }
      // Drift nodes
      for (let i = 0; i < particleCount; i++) {
        let x = posAttr.getX(i) + velocities[i].x;
        let y = posAttr.getY(i) + velocities[i].y;
        let z = posAttr.getZ(i) + velocities[i].z;

        // Spherical enclosure bounding
        const dist = Math.sqrt(x*x + y*y + z*z);
        if (dist > 125) {
          velocities[i].x *= -1;
          velocities[i].y *= -1;
          velocities[i].z *= -1;
        }

        posAttr.setXYZ(i, x, y, z);
      }
      posAttr.needsUpdate = true;

      // Link close nodes
      let linePointsCount = 0;
      for (let i = 0; i < particleCount; i++) {
        const x1 = posAttr.getX(i);
        const y1 = posAttr.getY(i);
        const z1 = posAttr.getZ(i);

        for (let j = i + 1; j < particleCount; j++) {
          const x2 = posAttr.getX(j);
          const y2 = posAttr.getY(j);
          const z2 = posAttr.getZ(j);

          const dx = x1 - x2;
          const dy = y1 - y2;
          const dz = z1 - z2;
          const dist = Math.sqrt(dx*dx + dy*dy + dz*dz);

          if (dist < minDistance) {
            linePositions[linePointsCount * 3] = x1;
            linePositions[linePointsCount * 3 + 1] = y1;
            linePositions[linePointsCount * 3 + 2] = z1;
            linePositions[linePointsCount * 3 + 3] = x2;
            linePositions[linePointsCount * 3 + 4] = y2;
            linePositions[linePointsCount * 3 + 5] = z2;

            const strength = 1.0 - (dist / minDistance);
            
            // Connective color gradients: Electric blue (A) to deep blue (B)
            lineColors[linePointsCount * 3] = 0.04 * strength;     // R
            lineColors[linePointsCount * 3 + 1] = 0.52 * strength; // G
            lineColors[linePointsCount * 3 + 2] = 1.0 * strength;  // B
            
            lineColors[linePointsCount * 3 + 3] = 0.0 * strength;  // R
            lineColors[linePointsCount * 3 + 4] = 0.34 * strength; // G
            lineColors[linePointsCount * 3 + 5] = 1.0 * strength;  // B

            linePointsCount += 2;
          }
        }
      }

      lineGeometry.getAttribute('position').needsUpdate = true;
      lineGeometry.getAttribute('color').needsUpdate = true;
      lineGeometry.setDrawRange(0, linePointsCount);

      // Core rotation
      coreMesh.rotation.y += 0.003;
      coreMesh.rotation.x += 0.001;
      innerCoreMesh.rotation.y -= 0.005;

      // Mouse Parallax
      currentX += (targetX - currentX) * 0.04;
      currentY += (targetY - currentY) * 0.04;

      networkGroup.rotation.y = currentX * 0.22 + ((performance.now() - startTime) / 1000) * 0.18;
      networkGroup.rotation.x = currentY * 0.22;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const onResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', onResize);

    // Pause animation when canvas is not in viewport
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        shouldAnimate = isVisible && isTabActive;
      },
      { threshold: 0.01 }
    );
    visibilityObserver.observe(container);

    // Pause animation when tab is hidden
    const onVisibilityChange = () => {
      isTabActive = !document.hidden;
      shouldAnimate = isVisible && isTabActive;
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      visibilityObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      innerCoreGeo.dispose();
      innerCoreMat.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full min-h-[350px] pointer-events-none" />
  );
};

export default ThreeCanvas;
