import React, { useState, useEffect } from "react";

function App() {

  const [position, setPosition] = useState({ x: 0, y: 0 });


  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };


  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          top: position.y - 25,
          left: position.x - 25, 
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: "blue",
        }}
      />
    </div>
  );
}

export default App;
