import React from "react";

interface HexagonProps {
  children: React.ReactNode;
  className?: string;
  size?: number; // Tamanho do hexágono (largura e altura)
}

const Hexagon: React.FC<HexagonProps> = ({ children, className = "", size = 100 }) => {
  const hexagonStyle = {
    width: `${size}px`,
    height: `${size}px`,
    clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#020617",
  };

  return (
    <div style={hexagonStyle} className={className}>
      {children}
    </div>
  );
};

export default Hexagon;
