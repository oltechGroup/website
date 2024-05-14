import React, { useRef } from "react";
import { Canvas } from "react-three-fiber";
import { useGLTF } from "@react-three/drei";

const Model = () => {
  const group = useRef();
  const parteOneRef = useRef();

  const { nodes } = useGLTF("/path/al/modelo.glb");

  return (
    <group>
      {/* Agrega aquí las luces y cámaras si es necesario */}
      <group ref={parteOneRef} dispose={null}>
        <mesh
          onPointerOver={(e) => {
            e.stopPropagation();
            // Aquí puedes cambiar el color del material o realizar otras acciones
            parteOneRef.current.children[0].material.color.getHex(0xff0000)
          }}
          onPointerOut={(e) => {
            e.stopPropagation();
            // Restaura el color original al salir del puntero
            parteOneRef.current.children[0].material.color.set(0xffffff);
          }}
        >
          {nodes.NombreDelModelo}{" "}
          {/* Reemplaza con el nombre correcto del modelo */}
        </mesh>
      </group>

      <mesh>{/* Mesh here */}</mesh>
    </group>
  );
};

const App = () => {
  return (
    <Canvas>
      <Model />
    </Canvas>
  );
};

export default App;
