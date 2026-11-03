import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroBackground3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Detect WebGL support
    try {
      const testCanvas = document.createElement('canvas');
      if (!window.WebGLRenderingContext || !testCanvas.getContext('webgl')) {
        return;
      }
    } catch {
      return;
    }

    const container = containerRef.current;
    let width = container.clientWidth;
    let height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x08090c, 0.04);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 7;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      container.appendChild(renderer.domElement);
    } catch {
      return;
    }

    // 1. Ambient Particle Field
    const particleCount = 450;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20;
      positions[i + 1] = (Math.random() - 0.5) * 15;
      positions[i + 2] = (Math.random() - 0.5) * 15;

      colors[i] = 0.0;
      colors[i + 1] = 0.8 + Math.random() * 0.2; // Cyan/Blue
      colors[i + 2] = 1.0;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.06,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 2. Sculptural Central Wireframe Polyhedron
    const geo = new THREE.IcosahedronGeometry(2.4, 2);
    const wireMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const icosahedron = new THREE.Mesh(geo, wireMat);
    scene.add(icosahedron);

    // Subtle Internal Glow Core
    const coreGeo = new THREE.IcosahedronGeometry(1.2, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x0052d4,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    scene.add(core);

    // Light
    const pointLight = new THREE.PointLight(0x00d2ff, 3, 20);
    pointLight.position.set(0, 0, 5);
    scene.add(pointLight);

    // Mouse tilt interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onPointerMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', onPointerMove, { passive: true });

    // Intersection Observer to pause rendering when off-screen
    let isVisible = true;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        isVisible = e.isIntersecting;
      });
    });
    observer.observe(container);

    // Render loop
    const animate = () => {
      animFrameRef.current = requestAnimationFrame(animate);

      if (!isVisible) return;

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      icosahedron.rotation.x += 0.002;
      icosahedron.rotation.y += 0.003;
      core.rotation.y -= 0.004;
      particles.rotation.y += 0.0005;

      camera.position.x = targetX * 0.6;
      camera.position.y = targetY * 0.4;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    const onResize = () => {
      if (!containerRef.current) return;
      width = containerRef.current.clientWidth;
      height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', onResize);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      observer.disconnect();
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('resize', onResize);

      particleGeometry.dispose();
      particleMaterial.dispose();
      geo.dispose();
      wireMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      renderer.dispose();

      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-80"
      aria-hidden="true"
    />
  );
}
