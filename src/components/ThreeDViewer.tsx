import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Eye, Box, Sliders, AlertCircle, RefreshCw, Layers } from 'lucide-react';

interface ThreeDViewerProps {
  posterImage: string;
  projectTitle: string;
  meshType?: 'mech' | 'sculpture' | 'chronos' | 'cyber';
}

type ShadingMode = 'lit' | 'clay' | 'wireframe';

// WebGL support detector
function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

export default function ThreeDViewer({
  posterImage,
  projectTitle,
  meshType = 'mech',
}: ThreeDViewerProps) {
  const [isViewerActive, setIsViewerActive] = useState(false);
  const [webGLError, setWebGLError] = useState<string | null>(null);
  const [shadingMode, setShadingMode] = useState<ShadingMode>('lit');
  const [autoRotate, setAutoRotate] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const animFrameIdRef = useRef<number | null>(null);
  const meshGroupRef = useRef<THREE.Group | null>(null);
  const isVisibleRef = useRef<boolean>(true);

  // Initial camera position for Reset button
  const INITIAL_CAMERA_POS = { x: 0, y: 1.5, z: 4.5 };

  const handleStartViewer = () => {
    if (!isWebGLAvailable()) {
      setWebGLError('WebGL is not supported or disabled on your current browser / device.');
      return;
    }
    setIsLoading(true);
    setIsViewerActive(true);
  };

  const handleResetCamera = () => {
    if (cameraRef.current && meshGroupRef.current) {
      cameraRef.current.position.set(
        INITIAL_CAMERA_POS.x,
        INITIAL_CAMERA_POS.y,
        INITIAL_CAMERA_POS.z
      );
      cameraRef.current.lookAt(0, 0, 0);
      meshGroupRef.current.rotation.set(0, 0, 0);
    }
  };

  useEffect(() => {
    if (!isViewerActive || !containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight || 450;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setAutoRotate(false);
    }

    // 1. Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0c12);
    sceneRef.current = scene;

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 50);
    camera.position.set(INITIAL_CAMERA_POS.x, INITIAL_CAMERA_POS.y, INITIAL_CAMERA_POS.z);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // 3. Renderer setup with safe pixel ratio budget
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
      container.appendChild(renderer.domElement);
      rendererRef.current = renderer;
    } catch {
      setWebGLError('Failed to initialize WebGL context.');
      setIsViewerActive(false);
      return;
    }

    // WebGL Context Loss Handler
    const handleContextLost = (e: Event) => {
      e.preventDefault();
      setWebGLError('WebGL context lost. Restoring fallback view...');
      setIsViewerActive(false);
    };
    renderer.domElement.addEventListener('webglcontextlost', handleContextLost, false);

    // 4. Lighting Rig
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x00d2ff, 2.5);
    keyLight.position.set(4, 5, 4);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 3.0);
    rimLight.position.set(-4, 3, -4);
    scene.add(rimLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 1.0);
    fillLight.position.set(0, -3, 3);
    scene.add(fillLight);

    // Ground Grid
    const grid = new THREE.GridHelper(10, 20, 0x00d2ff, 0x1e293b);
    grid.position.y = -1.2;
    scene.add(grid);

    // 5. Build Procedural 3D Model depending on project type
    const modelGroup = new THREE.Group();
    meshGroupRef.current = modelGroup;

    const materials: { lit: THREE.Material; clay: THREE.Material; wireframe: THREE.Material }[] = [];

    const createPart = (geometry: THREE.BufferGeometry, colorHex: number, metalness = 0.8, roughness = 0.25) => {
      const litMat = new THREE.MeshStandardMaterial({
        color: colorHex,
        metalness,
        roughness,
      });

      const clayMat = new THREE.MeshStandardMaterial({
        color: 0x8e9297,
        roughness: 0.9,
        metalness: 0.05,
      });

      const wireframeMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        wireframe: true,
      });

      const mesh = new THREE.Mesh(geometry, litMat);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      modelGroup.add(mesh);

      materials.push({ lit: litMat, clay: clayMat, wireframe: wireframeMat });
      return mesh;
    };

    if (meshType === 'mech') {
      // Core Torso / Armored Mech Assembly
      const chest = new THREE.BoxGeometry(1.2, 1.4, 0.9);
      createPart(chest, 0x181c24, 0.85, 0.3);

      const core = new THREE.SphereGeometry(0.35, 32, 32);
      const coreMesh = createPart(core, 0x00d2ff, 0.2, 0.1);
      coreMesh.position.set(0, 0.1, 0.45);

      const shoulderL = new THREE.CylinderGeometry(0.4, 0.3, 0.8, 16);
      shoulderL.rotateZ(Math.PI / 2);
      const shoulderLMesh = createPart(shoulderL, 0x2d3748, 0.9, 0.2);
      shoulderLMesh.position.set(-1.0, 0.5, 0);

      const shoulderR = new THREE.CylinderGeometry(0.4, 0.3, 0.8, 16);
      shoulderR.rotateZ(Math.PI / 2);
      const shoulderRMesh = createPart(shoulderR, 0x2d3748, 0.9, 0.2);
      shoulderRMesh.position.set(1.0, 0.5, 0);

      const head = new THREE.BoxGeometry(0.5, 0.4, 0.6);
      const headMesh = createPart(head, 0x0f172a, 0.7, 0.4);
      headMesh.position.set(0, 1.0, 0.1);

      const visor = new THREE.BoxGeometry(0.4, 0.1, 0.2);
      const visorMesh = createPart(visor, 0x38bdf8, 0.1, 0.05);
      visorMesh.position.set(0, 1.05, 0.35);
    } else if (meshType === 'sculpture' || meshType === 'cyber') {
      // Complex Torus Knot / Organic Cyber Sculpture
      const knotGeo = new THREE.TorusKnotGeometry(0.9, 0.28, 128, 32, 2, 3);
      createPart(knotGeo, 0x1e293b, 0.95, 0.15);

      const ringGeo = new THREE.TorusGeometry(1.6, 0.05, 16, 64);
      const ring = createPart(ringGeo, 0x00d2ff, 0.9, 0.2);
      ring.rotateX(Math.PI / 2);
    } else {
      // Chronos Tourbillon Assembly
      const baseGeo = new THREE.CylinderGeometry(1.2, 1.2, 0.2, 32);
      createPart(baseGeo, 0x1e222d, 0.9, 0.2);

      const gearGeo = new THREE.TorusGeometry(0.8, 0.12, 16, 48);
      createPart(gearGeo, 0xd4af37, 0.85, 0.25);

      const tourbillonRing = new THREE.TorusGeometry(0.45, 0.06, 16, 32);
      const ringMesh = createPart(tourbillonRing, 0x38bdf8, 0.9, 0.1);
      ringMesh.position.set(0, 0.2, 0);
    }

    scene.add(modelGroup);
    setIsLoading(false);

    // 6. Interactive Orbit & Drag Handlers
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging || !meshGroupRef.current) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;

      meshGroupRef.current.rotation.y += deltaX * 0.01;
      meshGroupRef.current.rotation.x += deltaY * 0.01;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (!cameraRef.current) return;
      const zoomDelta = e.deltaY * 0.003;
      cameraRef.current.position.z = Math.max(2.5, Math.min(8.0, cameraRef.current.position.z + zoomDelta));
    };

    // Touch handlers for mobile
    let prevTouchX = 0;
    let prevTouchY = 0;

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevTouchX = e.touches[0].clientX;
        prevTouchY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || !meshGroupRef.current || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevTouchX;
      const deltaY = e.touches[0].clientY - prevTouchY;
      prevTouchX = e.touches[0].clientX;
      prevTouchY = e.touches[0].clientY;

      meshGroupRef.current.rotation.y += deltaX * 0.012;
      meshGroupRef.current.rotation.x += deltaY * 0.012;
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    // Keyboard support for accessibility
    const onKeyDown = (e: KeyboardEvent) => {
      if (!meshGroupRef.current) return;
      switch (e.key) {
        case 'ArrowLeft':
          meshGroupRef.current.rotation.y -= 0.1;
          break;
        case 'ArrowRight':
          meshGroupRef.current.rotation.y += 0.1;
          break;
        case 'ArrowUp':
          meshGroupRef.current.rotation.x -= 0.1;
          break;
        case 'ArrowDown':
          meshGroupRef.current.rotation.x += 0.1;
          break;
        case 'r':
        case 'R':
          handleResetCamera();
          break;
      }
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    domElement.addEventListener('wheel', onWheel, { passive: false });
    domElement.addEventListener('touchstart', onTouchStart, { passive: true });
    domElement.addEventListener('touchmove', onTouchMove, { passive: true });
    domElement.addEventListener('touchend', onTouchEnd);
    window.addEventListener('keydown', onKeyDown);

    // 7. Intersection Observer for Pause Off-Screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting;
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    // 8. Animation & Render Loop
    const animate = () => {
      animFrameIdRef.current = requestAnimationFrame(animate);

      if (!isVisibleRef.current) return;

      if (autoRotate && meshGroupRef.current && !isDragging) {
        meshGroupRef.current.rotation.y += 0.005;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 9. Resize handler
    const onResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight || 450;
      cameraRef.current.aspect = newWidth / newHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', onResize);

    // 10. Teardown & Clean Disposal
    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
      observer.disconnect();

      domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domElement.removeEventListener('wheel', onWheel);
      domElement.removeEventListener('touchstart', onTouchStart);
      domElement.removeEventListener('touchmove', onTouchMove);
      domElement.removeEventListener('touchend', onTouchEnd);
      domElement.removeEventListener('webglcontextlost', handleContextLost);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);

      // Dispose Geometries and Materials
      modelGroup.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          if (child.geometry) child.geometry.dispose();
          if (Array.isArray(child.material)) {
            child.material.forEach((m) => m.dispose());
          } else if (child.material) {
            child.material.dispose();
          }
        }
      });

      renderer.dispose();
      if (domElement.parentNode) {
        domElement.parentNode.removeChild(domElement);
      }
    };
  }, [isViewerActive, meshType, autoRotate]);

  // Update Materials based on Shading Mode
  useEffect(() => {
    if (!meshGroupRef.current) return;

    meshGroupRef.current.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        if (shadingMode === 'clay') {
          child.material = new THREE.MeshStandardMaterial({
            color: 0x94a3b8,
            roughness: 0.9,
            metalness: 0.05,
          });
        } else if (shadingMode === 'wireframe') {
          child.material = new THREE.MeshBasicMaterial({
            color: 0x38bdf8,
            wireframe: true,
          });
        } else {
          child.material = new THREE.MeshStandardMaterial({
            color: 0x1e293b,
            metalness: 0.9,
            roughness: 0.2,
          });
        }
      }
    });
  }, [shadingMode]);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-slate-800 bg-[#0A0C12] shadow-2xl">
      {/* Fallback Static Poster Mode */}
      {!isViewerActive ? (
        <div className="relative h-[380px] sm:h-[480px] w-full">
          <img
            src={posterImage}
            alt={projectTitle}
            className="h-full w-full object-cover filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-6 sm:p-8">
            <span className="text-xs uppercase tracking-widest text-sky-400 font-semibold mb-2">
              High-Precision 3D Asset
            </span>
            <h4 className="text-xl sm:text-2xl font-bold uppercase text-white mb-2">
              {projectTitle}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg mb-6">
              WebGL Real-Time Inspection mode. Inspect geometry, clay render, and wireframe topology directly in your browser.
            </p>

            {webGLError && (
              <div className="mb-4 flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-950/40 p-3 text-xs text-red-300">
                <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
                <span>{webGLError}</span>
              </div>
            )}

            <div>
              <button
                onClick={handleStartViewer}
                disabled={isLoading}
                className="inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer border-0"
                style={{
                  background: 'linear-gradient(135deg, #0052D4 0%, #4364F7 50%, #00C6FF 100%)',
                }}
              >
                <Box className="h-4 w-4" />
                <span>{isLoading ? 'Loading WebGL Scene...' : 'View in 3D (Interactive WebGL)'}</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Active Three.js 3D Viewport */
        <div className="relative h-[420px] sm:h-[520px] w-full">
          <div ref={containerRef} className="h-full w-full cursor-grab active:cursor-grabbing" />

          {/* Viewer Controls Toolbar */}
          <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
            {/* Shading Mode Toggles */}
            <div className="flex items-center gap-1.5 rounded-xl border border-slate-700/60 bg-slate-900/80 p-1.5 backdrop-blur-md pointer-events-auto">
              <button
                onClick={() => setShadingMode('lit')}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold uppercase transition-colors ${
                  shadingMode === 'lit' ? 'bg-sky-500 text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                <Eye className="h-3.5 w-3.5" />
                <span>Lit</span>
              </button>
              <button
                onClick={() => setShadingMode('clay')}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold uppercase transition-colors ${
                  shadingMode === 'clay' ? 'bg-sky-500 text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                <Sliders className="h-3.5 w-3.5" />
                <span>Clay</span>
              </button>
              <button
                onClick={() => setShadingMode('wireframe')}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold uppercase transition-colors ${
                  shadingMode === 'wireframe' ? 'bg-sky-500 text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                <Layers className="h-3.5 w-3.5" />
                <span>Wire</span>
              </button>
            </div>

            {/* Helper Action Buttons */}
            <div className="flex items-center gap-2 pointer-events-auto">
              <button
                onClick={() => setAutoRotate(!autoRotate)}
                className={`flex items-center gap-1.5 rounded-xl border border-slate-700/60 p-2 text-xs backdrop-blur-md transition-colors ${
                  autoRotate ? 'bg-sky-500/30 text-sky-300 border-sky-400' : 'bg-slate-900/80 text-slate-400'
                }`}
                title="Toggle Auto-Rotation"
              >
                <RotateCw className={`h-4 w-4 ${autoRotate ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
              </button>

              <button
                onClick={handleResetCamera}
                className="flex items-center gap-1.5 rounded-xl border border-slate-700/60 bg-slate-900/80 p-2 text-xs text-slate-300 backdrop-blur-md hover:text-white transition-colors"
                title="Reset Camera (R key)"
              >
                <RefreshCw className="h-4 w-4" />
              </button>

              <button
                onClick={() => setIsViewerActive(false)}
                className="rounded-xl border border-slate-700/60 bg-slate-900/80 px-3 py-2 text-xs font-medium text-slate-300 backdrop-blur-md hover:bg-slate-800 hover:text-white transition-colors"
              >
                Close 3D
              </button>
            </div>
          </div>

          {/* Navigation & Controls Hint at Bottom */}
          <div className="absolute bottom-3 left-4 right-4 pointer-events-none flex items-center justify-between text-[11px] text-slate-400">
            <span>Left-drag to Orbit • Scroll to Zoom • Arrow keys support</span>
            <span className="hidden sm:inline">PBR Lookdev Engine • Three.js</span>
          </div>
        </div>
      )}
    </div>
  );
}
