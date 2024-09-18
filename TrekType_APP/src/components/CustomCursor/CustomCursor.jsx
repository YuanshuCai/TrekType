import { useEffect, useState } from "react";
import "./CustomCursor.scss"; // Create this SCSS file for styling

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const addMouseListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
    };

    const removeMouseListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    addMouseListeners();
    return () => removeMouseListeners();
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CustomCursor;
