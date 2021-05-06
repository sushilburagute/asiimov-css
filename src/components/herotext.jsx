import { Text } from "@react-three/drei";

export const HeroText = ({ content, sendTo }) => {
  return (
    <Text
      className="docs"
      receiveShadow
      color="#040404"
      fontSize="0.5"
      position={[0, -1.7, 2]}
      textAlign="justify"
      anchorX="center"
      anchorY="middle"
      onClick={() => {
        !(sendTo === "/home") && window.open(sendTo, "_blank");
      }}
    >
      {content}
    </Text>
  );
};
