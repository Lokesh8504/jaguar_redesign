import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "/public/model/Scene";

const Logo = () => {
  return (
    <Canvas camera={{ position: [0, 0, 150], fov: 40 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={850} />
      <pointLight position={[-10, -10, -10]} intensity={1.5} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls enableZoom={false}/>
    </Canvas>
  );
};

export default Logo;
