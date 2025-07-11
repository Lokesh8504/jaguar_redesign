import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";

export default function Model(props) {
  const { viewport } = useThree();
  const { nodes, materials } = useGLTF("/model/scene.gltf");
  const scale = viewport.width > 768 ? 100 : 100;

  const group = useRef();
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursor({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y = cursor.x * 0.1;
      group.current.rotation.x = cursor.y * 0.1;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.logo_002_chromium_metal_0.geometry}
        material={materials.chromium_metal}
        position={[0, -22.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[scale, scale, scale]}
      />
      <mesh
        geometry={nodes.logo_001_chromium_metal_0.geometry}
        material={materials.chromium_metal}
        position={[0, 22.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[scale, scale, scale]}
      />
    </group>
  );
}

useGLTF.preload("/model/scene.gltf");
