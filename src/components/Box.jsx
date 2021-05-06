import { useFrame } from "react-three-fiber";
import { MeshWobbleMaterial } from "@react-three/drei";
import React, { useRef, useState, useEffect } from "react";

const MeshColors = {
  red: "#DD0031",
  blue: "#1bc4e0",
  green: "#41B883",
};

export function Box({ position, args, color, speed, changeHero }) {
  const mesh = useRef();
  const [expand, setExpand] = useState(false);
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });
  useEffect(() => {
    setTimeout(() => {
      changeHero("default");
      expand === true ? setExpand(false) : setExpand(false);
    }, 6000);
  }, [expand]);
  return (
    <mesh
      ref={mesh}
      scale={expand ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={() => {
        setExpand(!expand);
        if (color === MeshColors.red) {
          changeHero("about");
        } else if (color === MeshColors.blue) {
          changeHero("documentation");
        } else if (color === MeshColors.green) {
          changeHero("github");
        } else {
          changeHero("default");
        }
      }}
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
