"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !containerRef.current) return;

    let isDisposed = false;
    let animationFrameId: number;

    const container = containerRef.current;
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 450;

    // Check if mobile / small screen to throttle
    const isMobile = window.innerWidth < 768;

    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const initThree = async () => {
      try {
        const THREE = await import("three");
        if (isDisposed || !container) return;

        // Scene
        const scene = new THREE.Scene();

        // Camera
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
        camera.position.set(0, 0, isMobile ? 8.5 : 7.2);

        // Renderer
        const renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: !isMobile,
          powerPreference: "high-performance",
        });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.2 : 2));
        container.innerHTML = "";
        container.appendChild(renderer.domElement);

        // Core Brand Palette Colors
        const COLOR_DARK = new THREE.Color("#111827");
        const COLOR_ORANGE = new THREE.Color("#3B6EA8");
        const COLOR_AMBER = new THREE.Color("#6B9BD1");
        const COLOR_YELLOW = new THREE.Color("#9CA3AF");

        // Group holding all engineering shapes
        const mainGroup = new THREE.Group();
        scene.add(mainGroup);

        // 1. Central Complex Torus Knot / Torus
        const torusGeometry = new THREE.TorusGeometry(
          isMobile ? 1.6 : 1.9,
          isMobile ? 0.35 : 0.42,
          isMobile ? 12 : 24,
          isMobile ? 32 : 64
        );
        const torusMaterial = new THREE.MeshStandardMaterial({
          color: COLOR_DARK,
          roughness: 0.25,
          metalness: 0.8,
          wireframe: false,
        });
        const torusMesh = new THREE.Mesh(torusGeometry, torusMaterial);
        mainGroup.add(torusMesh);

        // 2. Torus Outer Wireframe Cage (Yellow / Amber)
        const wireframeGeometry = new THREE.TorusGeometry(
          isMobile ? 1.62 : 1.93,
          isMobile ? 0.37 : 0.44,
          8,
          isMobile ? 16 : 32
        );
        const wireframeMaterial = new THREE.MeshBasicMaterial({
          color: COLOR_AMBER,
          wireframe: true,
          transparent: true,
          opacity: 0.45,
        });
        const wireframeMesh = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
        mainGroup.add(wireframeMesh);

        // 3. Inner Futuristic Core (Icosahedron in bright Orange)
        const coreGeo = new THREE.IcosahedronGeometry(isMobile ? 0.8 : 0.95, 1);
        const coreMat = new THREE.MeshStandardMaterial({
          color: COLOR_ORANGE,
          roughness: 0.1,
          metalness: 0.6,
          wireframe: true,
        });
        const coreMesh = new THREE.Mesh(coreGeo, coreMat);
        mainGroup.add(coreMesh);

        // 4. Orbiting Geometric Satellite Cubes & Nodes
        const cubesGroup = new THREE.Group();
        mainGroup.add(cubesGroup);

        const cubeCount = isMobile ? 6 : 12;
        const cubeMeshes: any[] = [];
        const cubeOffsets: { radius: number; speed: number; angle: number; y: number }[] = [];

        const cubeGeo = new THREE.BoxGeometry(0.24, 0.24, 0.24);

        for (let i = 0; i < cubeCount; i++) {
          const isOrange = i % 2 === 0;
          const cubeMat = new THREE.MeshStandardMaterial({
            color: isOrange ? COLOR_ORANGE : COLOR_AMBER,
            roughness: 0.2,
            metalness: 0.7,
          });
          const cube = new THREE.Mesh(cubeGeo, cubeMat);
          cubesGroup.add(cube);
          cubeMeshes.push(cube);

          cubeOffsets.push({
            radius: 2.5 + Math.random() * 0.8,
            speed: (0.4 + Math.random() * 0.5) * (i % 2 === 0 ? 1 : -1),
            angle: (i / cubeCount) * Math.PI * 2,
            y: (Math.random() - 0.5) * 1.8,
          });
        }

        // 5. Connecting Lines between nodes
        const lineMaterial = new THREE.LineBasicMaterial({
          color: COLOR_DARK,
          transparent: true,
          opacity: 0.35,
        });
        const lineGeo = new THREE.BufferGeometry();
        const linePositions = new Float32Array(cubeCount * 2 * 3);
        lineGeo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
        const connectionLines = new THREE.LineSegments(lineGeo, lineMaterial);
        mainGroup.add(connectionLines);

        // 6. Particle Cloud (Star-network / digital dust)
        const particleCount = isMobile ? 120 : 280;
        const particleGeo = new THREE.BufferGeometry();
        const particleCoords = new Float32Array(particleCount * 3);
        const particleColors = new Float32Array(particleCount * 3);

        for (let p = 0; p < particleCount; p++) {
          const pIdx = p * 3;
          // Distribute in sphere
          const r = 3.5 + Math.random() * 2.5;
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos(2 * Math.random() - 1);

          particleCoords[pIdx] = r * Math.sin(phi) * Math.cos(theta);
          particleCoords[pIdx + 1] = r * Math.sin(phi) * Math.sin(theta);
          particleCoords[pIdx + 2] = r * Math.cos(phi);

          // Assign color from palette
          const choice = Math.random();
          const pColor = choice < 0.35 ? COLOR_DARK : choice < 0.7 ? COLOR_ORANGE : COLOR_AMBER;
          particleColors[pIdx] = pColor.r;
          particleColors[pIdx + 1] = pColor.g;
          particleColors[pIdx + 2] = pColor.b;
        }

        particleGeo.setAttribute("position", new THREE.BufferAttribute(particleCoords, 3));
        particleGeo.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

        const particleMaterial = new THREE.PointsMaterial({
          size: isMobile ? 0.045 : 0.065,
          vertexColors: true,
          transparent: true,
          opacity: 0.75,
        });
        const particles = new THREE.Points(particleGeo, particleMaterial);
        mainGroup.add(particles);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
        scene.add(ambientLight);

        const directionalLight1 = new THREE.DirectionalLight(COLOR_AMBER, 2.8);
        directionalLight1.position.set(5, 6, 6);
        scene.add(directionalLight1);

        const directionalLight2 = new THREE.DirectionalLight(COLOR_ORANGE, 2.2);
        directionalLight2.position.set(-6, -4, -4);
        scene.add(directionalLight2);

        const pointLight = new THREE.PointLight(COLOR_YELLOW, 2.5, 10);
        pointLight.position.set(0, 0, 1.5);
        scene.add(pointLight);

        // Mouse Parallax
        const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
        const handleMouseMove = (e: MouseEvent) => {
          const rect = container.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / height - 0.5;
          mouse.targetX = x * 1.5;
          mouse.targetY = y * 1.5;
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });

        // Handle resize
        const handleResize = () => {
          if (!container || isDisposed) return;
          const w = container.clientWidth || 360;
          const h = container.clientHeight || 400;
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        };

        window.addEventListener("resize", handleResize);

        // Animation Loop
        let clockTime = 0;
        const render = () => {
          if (isDisposed) return;

          clockTime += 0.012;

          if (!prefersReducedMotion) {
            // Smooth mouse interpolation
            mouse.x += (mouse.targetX - mouse.x) * 0.05;
            mouse.y += (mouse.targetY - mouse.y) * 0.05;

            // Rotation
            mainGroup.rotation.y = clockTime * 0.35 + mouse.x * 0.6;
            mainGroup.rotation.x = Math.sin(clockTime * 0.25) * 0.18 + mouse.y * 0.4;
            mainGroup.rotation.z = Math.cos(clockTime * 0.2) * 0.1;

            // Floating effect
            mainGroup.position.y = Math.sin(clockTime * 0.6) * 0.15;

            // Core counter-rotation
            coreMesh.rotation.y = -clockTime * 0.8;
            coreMesh.rotation.x = clockTime * 0.5;

            // Orbiting satellite cubes
            const positions = linePositions;
            for (let i = 0; i < cubeCount; i++) {
              const info = cubeOffsets[i];
              info.angle += info.speed * 0.015;
              const cx = Math.cos(info.angle) * info.radius;
              const cz = Math.sin(info.angle) * info.radius;
              const cy = info.y + Math.sin(clockTime + i) * 0.3;

              cubeMeshes[i].position.set(cx, cy, cz);
              cubeMeshes[i].rotation.x += 0.03;
              cubeMeshes[i].rotation.y += 0.04;

              // Connect to center core
              const baseIdx = i * 6;
              positions[baseIdx] = 0;
              positions[baseIdx + 1] = 0;
              positions[baseIdx + 2] = 0;
              positions[baseIdx + 3] = cx;
              positions[baseIdx + 4] = cy;
              positions[baseIdx + 5] = cz;
            }
            connectionLines.geometry.attributes.position.needsUpdate = true;

            // Slowly rotate particle field
            particles.rotation.y = -clockTime * 0.1;
          }

          renderer.render(scene, camera);
          animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
          isDisposed = true;
          window.removeEventListener("mousemove", handleMouseMove);
          window.removeEventListener("resize", handleResize);
          cancelAnimationFrame(animationFrameId);

          // Clean up resources
          scene.traverse((obj: any) => {
            if (obj && (obj.isMesh || obj.isLineSegments || obj.isPoints)) {
              if (obj.geometry) obj.geometry.dispose();
              if (Array.isArray(obj.material)) {
                obj.material.forEach((m: any) => m && m.dispose && m.dispose());
              } else if (obj.material && obj.material.dispose) {
                obj.material.dispose();
              }
            }
          });
          renderer.dispose();
        };
      } catch (err) {
        console.warn("Three.js canvas initialization deferred or unsupported:", err);
      }
    };

    const cleanupPromise = initThree();

    return () => {
      isDisposed = true;
      cleanupPromise.then((cleanup) => cleanup && cleanup());
    };
  }, [isClient]);

  return (
    <div className="relative w-full h-[360px] sm:h-[420px] md:h-[480px] lg:h-[540px] flex items-center justify-center">
      {/* Subtle background ambient pulse in blue/steel */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#3B6EA8]/30 via-transparent to-[#6B9BD1]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Technical Crosshairs */}
      <div className="absolute top-2 left-2 font-mono text-[10px] text-[#334155]/60 tracking-wider flex items-center gap-1 select-none pointer-events-none">
        <span className="inline-block w-2 h-2 border border-[#334155]" />
        <span>SYS.3D // NODE_ACTIVE</span>
      </div>

      <div className="absolute bottom-2 right-2 font-mono text-[10px] text-[#2c2d34]/60 tracking-wider flex items-center gap-1 select-none pointer-events-none">
        <span>60FPS // WEBGL_CORE</span>
        <span className="w-1.5 h-1.5 bg-[#e94822] rounded-full animate-ping" />
      </div>

      {/* Canvas Mount Container */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center"
        aria-label="Interactive 3D Software Engineering Visualization"
      />
    </div>
  );
}
