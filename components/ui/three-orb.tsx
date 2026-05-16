"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ThreeOrb() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, el.clientWidth / el.clientHeight, 0.1, 100);
    camera.position.z = 3.2;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(el.clientWidth, el.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    el.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(1.05, 4);
    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.28,
      metalness: 0.18,
      emissive: 0x263cff,
      emissiveIntensity: 0.08
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    const blueLight = new THREE.PointLight(0x38bdf8, 2.4, 8);
    blueLight.position.set(2, 2, 4);
    scene.add(blueLight);
    const yellowLight = new THREE.PointLight(0xfacc15, 2, 8);
    yellowLight.position.set(-2, -1, 4);
    scene.add(yellowLight);
    scene.add(new THREE.AmbientLight(0xffffff, 1.2));

    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      mesh.rotation.x += 0.004;
      mesh.rotation.y += 0.006;
      renderer.render(scene, camera);
    };
    animate();

    const resize = () => {
      camera.aspect = el.clientWidth / el.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(el.clientWidth, el.clientHeight);
    };
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frame);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      el.replaceChildren();
    };
  }, []);

  return <div ref={ref} className="pointer-events-none absolute right-0 top-24 h-72 w-72 opacity-75 md:h-[440px] md:w-[440px]" aria-hidden />;
}
