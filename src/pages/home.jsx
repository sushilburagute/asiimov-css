import Header from "../components/header";
import { Canvas } from "react-three-fiber";
import { softShadows, OrbitControls } from "@react-three/drei";
// import { useSpring } from "react-spring";
import React, { useState } from "react";
import { Box } from "../components/Box";
import { HeroText } from "../components/herotext";

softShadows();

const Home = () => {
  const [hero, setHero] = useState("default");

  const changeHeroText = (elementClicked) => {
    setHero(elementClicked);
  };
  return (
    <>
      <Header />
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
        <Box
          position={[-8, 1, -7]}
          args={[2, 2, 2]}
          color="#DD0031"
          speed={6}
          changeHero={changeHeroText}
        />
        <Box
          position={[0, 1, 0]}
          args={[3, 2, 1]}
          color="#1bc4e0"
          speed={2}
          changeHero={changeHeroText}
        />
        <Box
          position={[8, 1, -7]}
          args={[2, 2, 2]}
          color="#41B883"
          speed={6}
          changeHero={changeHeroText}
        />
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

        {hero === "default" && (
          <HeroText content="Build with Speed." sendTo="/home" />
        )}
        {hero === "about" && <HeroText content="About" sendTo="/about" />}
        {hero === "documentation" && (
          <HeroText content="View Documentation" sendTo="/documentation" />
        )}
        {hero === "github" && (
          <HeroText
            content="View Source Code"
            sendTo="https://github.com/sushilburagute/asiimov-css"
          />
        )}
      </Canvas>
    </>
  );
};

export default Home;
