/* eslint-disable no-unused-vars */
import React, { Suspense, useRef, useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Environment, Stage, OrbitControls, useGLTF } from "@react-three/drei"; 

function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/klout.glb");
  console.log("nodes.material", nodes?.Blender_AMD_TRY.material);
  console.log("nodes.geometry", nodes?.Blender_AMD_TRY.geometry);


  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      style={{ marginLeft: 600 }}
      scale={0.02}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Blender_AMD_TRY.geometry}
        material={nodes.Blender_AMD_TRY.material}
        material-color={props.color}
        // position={[10, 2, 3]}
        // scale={0.04}
      />
    </group>
  );
}

useGLTF.preload("/klout.glb");

function App() {
  const [color, setColor] = useState("white");
  const ref = useRef();

  return (
    <div
      id="canvas-container"
      style={{ background: "#333333", height: "100vh" }}
    >
      <Canvas
        style={{ height: "80vh", background: "#333333" }}
        shadows
        dpr={[1, 2]}
        camera={{ fov: 65 }}
      >
        <Suspense fallback={null}>
          <Stage controls={ref}>
            <Model color={color} />
          </Stage>
        </Suspense>
        <OrbitControls ref={ref} autoRotate />
      </Canvas>

      <div className="flex-center">
        <div className="social-links">
          <div
            className="social-btn flex-center"
            id="linkedin"
            style={{ background: "white" }}
            onClick={() => setColor("white")}
          >
            <span>White</span>
          </div>

          <div
            className="social-btn flex-center"
            id="linkedin"
            style={{ background: "#C2C2C2" }}
            onClick={() => setColor("#C2C2C2")}
          >
            <span>Gray</span>
          </div>

          <div
            className="social-btn flex-center"
            id="github"
            style={{ background: "#3A3A3A" }}
            onClick={() => setColor("#3A3A3A")}
          >
            <span>Black</span>
          </div>

          <div
            className="social-btn flex-center"
            id="github"
            style={{ background: "#9D23CE" }}
            onClick={() => setColor("#9D23CE")}
          >
            <span>Purple</span>
          </div>
          <div
            className="social-btn flex-center"
            id="github"
            style={{ background: "#0B7AC3" }}
            onClick={() => setColor("#0B7AC3")}
          >
            <span>Blue</span>
          </div>
          <div
            className="social-btn flex-center"
            id="twitter"
            style={{ background: "#FF5733" }}
            onClick={() => setColor("#FF5733")}
          >
            <span>Red</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
