import React, { useRef, useState } from "react";
import "./App.css";
import { Canvas, useFrame } from "react-three-fiber";
import {
  softShadows,
  MeshWobbleMaterial,
  OrbitControls,
  Text,
} from "@react-three/drei";
import { useSpring } from "react-spring";

softShadows();

function Box({ position, args, color, speed }) {
  const mesh = useRef();
  const [expand, setExpand] = useState(false);
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });
  const props = useSpring({
    scale: expand ? [1.5, 1.5, 1.5] : [1, 1, 1],
  });
  console.log(props.scale);
  return (
    <mesh
      ref={mesh}
      scale={expand ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={() => setExpand(!expand)}
      position={position}
      castShadow
    >
      <boxBufferGeometry args={args} attach="geometry" />
      <MeshWobbleMaterial
        attach="material"
        color={color}
        speed={speed}
        factor={0.6}
      />
    </mesh>
  );
}

function App() {
  return (
    <Canvas
      shadowMap
      colorManagement
      camera={{ position: [0, 0, 10], fov: 60 }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={0.7}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, 0, -20]} intensity={0.5} />
      <pointLight position={[0, -10, 0]} intensity={1.5} />
      <Box position={[-8, 1, -7]} args={[2, 2, 2]} color="#DD0031" speed={6} />
      <Box position={[0, 1, 0]} args={[3, 2, 1]} color="#1bc4e0" speed={2} />
      <Box position={[8, 1, -7]} args={[2, 2, 2]} color="#41B883" speed={6} />
      <group>
        <mesh
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -3, 0]}
        >
          <planeBufferGeometry attach="geometry" args={[100, 100]} />
          <shadowMaterial attach="material" opacity={0.3} />
        </mesh>
      </group>
      <OrbitControls />
      <Text
        className="docs"
        receiveShadow
        color="#040404"
        fontSize="0.5"
        position={[0, -1.7, 2]}
        textAlign="justify"
        anchorX="center"
        anchorY="middle"
      >
        Build with Speed ft. Asiimov UI
      </Text>
    </Canvas>
  );
}

export default App;
