// import React, { Suspense, useRef } from "react";
// import "./App.css";
// import { Canvas } from "@react-three/fiber";
// import { Environment, OrbitControls, useGLTF } from "@react-three/drei";

// function Model(props) {
//   const group = useRef();
//   const { nodes, materials } = useGLTF("/klout.glb");
//   return (
//     <group
//       ref={group}
//       {...props}
//       dispose={null}
//       style={{ marginLeft: 600 }}
//       scale={0.02}
//     >
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Blender_AMD_TRY.geometry}
//         material={nodes.Blender_AMD_TRY.material}
//         // position={[10, 2, 3]}
//         // scale={0.04}
//       />
//     </group>
//   );
// }

// useGLTF.preload("/klout.glb");

// function App() {
//   return (
//     <div id="canvas-container">
//       <Canvas style={{ height: "100vh", background: "#bebebe" }}>
//         <Suspense fallback={null}>
//           <Model />
//           <OrbitControls />
//           <Environment preset="night" />
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// }

// export default App;

//////////////////////////// 2222222222222222

import React, { Suspense, useRef } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Environment, Stage, OrbitControls, useGLTF } from "@react-three/drei";

function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/klout.glb");
  console.log("nodes", nodes);
  console.log("materials", materials);

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
        // position={[10, 2, 3]}
        // scale={0.04}
      />
    </group>
  );
}

useGLTF.preload("/klout.glb");

function App() {
  const ref = useRef();
  return (
    <div id="canvas-container">
      <Canvas
        style={{ height: "100vh", background: "#333333" }}
        shadows
        dpr={[1, 2]}
        camera={{ fov: 50 }}
      >
        <Suspense fallback={null}>
          <Stage controls={ref}>
            <Model />
          </Stage>
        </Suspense>
        <OrbitControls ref={ref} autoRotate />
      </Canvas>
    </div>
  );
}

export default App;
