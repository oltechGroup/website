import React, { useEffect, useLayoutEffect, useRef } from "react";
import {
  useGLTF,
  useScroll,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";

export const NB_FLOORS = 3;
export const FLOOR_HEIGHT = 7;

import "./Overlay.css";

export default function Skeleton(props) {
  const { nodes, materials } = useGLTF("/skeleton.glb");
  const skeletonRef = useRef();
  const tl = useRef();

  const costillasRef = useRef();
  const craneoRef = useRef();
  const brazosRef = useRef();
  const manosRef = useRef();
  const piesRef = useRef();
  const inferiorRef = useRef();
  const piernasRef = useRef();
  const columnaRef = useRef();

  const svgRef = useRef();
  const page1Ref = useRef();
  const item1 = useRef();
  const item2 = useRef();
  const item3 = useRef();
  const item4 = useRef();
  const item5 = useRef();
  const item6 = useRef();
  const item7 = useRef();
  const item8 = useRef();
  const item9 = useRef();
  const item10 = useRef();
  const item11 = useRef();
  const item12 = useRef();
  const item13 = useRef();
  const item14 = useRef();
  const item15 = useRef();

  const scroll = useScroll();

  useLayoutEffect(() => {
    // References pages
    page1Ref.current = document.getElementById("page1");
    svgRef.current = document.getElementById("canvasSvg");

    // References Items
    item1.current = document.getElementById("item1");
    item2.current = document.getElementById("item2");
    item3.current = document.getElementById("item3");
    item4.current = document.getElementById("item4");
    item5.current = document.getElementById("item5");
    item6.current = document.getElementById("item6");
    item7.current = document.getElementById("item7");
    item8.current = document.getElementById("item8");
    item9.current = document.getElementById("item9");
    item10.current = document.getElementById("item10");
    item11.current = document.getElementById("item11");
    item12.current = document.getElementById("item12");
    item13.current = document.getElementById("item13");
    item14.current = document.getElementById("item14");
    item15.current = document.getElementById("item15");
  }, []);

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    // ======================== ANIMATION SKELETON ========================
    // Animation head
    tl.current.to(
      craneoRef.current.material.color,
      {
        duration: 1,
        r: 0.8,
        g: 0.4,
        b: 0.3,
      },
      0
    );
    tl.current.to(
      skeletonRef.current.position,
      {
        duration: 1,
        z: 3.2,
        x: 1,
        y: -6.7,
      },
      0
    );
    tl.current.to(
      skeletonRef.current.rotation,
      {
        duration: 1,
        z: 1,
      },
      0
    );
    // End animation head

    // Animation columna
    tl.current.to(
      craneoRef.current.material.color,
      {
        duration: 1,
        r: 1,
        g: 1,
        b: 1,
      },
      1
    );
    tl.current.to(
      columnaRef.current.material.color,
      {
        duration: 1,
        r: 0.8,
        g: 0.4,
        b: 0.3,
      },
      1
    );
    tl.current.to(
      skeletonRef.current.position,
      {
        duration: 1,
        y: -4,
        z: 1,
        x: -2,
      },
      1
    );
    tl.current.to(
      skeletonRef.current.rotation,
      {
        duration: 1,
        z: 3.5,
      },
      1
    );
    // End animation columna

    // Animation costillas
    tl.current.to(
      columnaRef.current.material.color,
      {
        duration: 1,
        r: 1,
        g: 1,
        b: 1,
      },
      2
    );
    tl.current.to(
      costillasRef.current.material.color,
      {
        duration: 1,
        r: 0.8,
        g: 0.4,
        b: 0.3,
      },
      2
    );
    tl.current.to(
      skeletonRef.current.position,
      {
        duration: 1,
        y: -3.7,
        z: 2,
        x: 1.5,
      },
      2
    );
    tl.current.to(
      skeletonRef.current.rotation,
      {
        duration: 1,
        z: 0.6,
      },
      2
    );
    // End animation costillas

    // Animation arms
    tl.current.to(
      costillasRef.current.material.color,
      {
        duration: 1,
        r: 1,
        g: 1,
        b: 1,
      },
      3
    );
    tl.current.to(
      brazosRef.current.material.color,
      {
        duration: 1,
        r: 0.8,
        g: 0.4,
        b: 0.3,
      },
      3
    );
    tl.current.to(
      skeletonRef.current.position,
      {
        duration: 1,
        y: -3,
        z: 1,
        x: -2,
      },
      3
    );
    tl.current.to(
      skeletonRef.current.rotation,
      {
        duration: 1,
        z: -0.5,
      },
      3
    );
    // End animation arms

    // animation bottom
    tl.current.to(
      brazosRef.current.material.color,
      {
        duration: 1,
        r: 1,
        g: 1,
        b: 1,
      },
      4
    );
    tl.current.to(
      inferiorRef.current.material.color,
      {
        duration: 1,
        r: 0.8,
        g: 0.4,
        b: 0.3,
      },
      4
    );
    tl.current.to(
      skeletonRef.current.position,
      {
        duration: 1,
        y: 0,
        z: 2,
        x: 0,
      },
      4
    );
    tl.current.to(
      skeletonRef.current.rotation,
      {
        duration: 1,
        z: 0,
      },
      4
    );
    // End animation bottom

    // Animation hands
    tl.current.to(
      inferiorRef.current.material.color,
      {
        duration: 1,
        r: 1,
        g: 1,
        b: 1,
      },
      5
    );
    tl.current.to(
      manosRef.current.material.color,
      {
        duration: 1,
        r: 0.8,
        g: 0.4,
        b: 0.3,
      },
      5
    );
    tl.current.to(
      skeletonRef.current.position,
      {
        duration: 1,
        x: 3,
        y: 0.5,
        z: 2.8,
      },
      5
    );
    tl.current.to(
      skeletonRef.current.rotation,
      {
        duration: 1,
        z: -0.3,
      },
      5
    );
    // End animation hands

    // Animation legs
    tl.current.to(
      manosRef.current.material.color,
      {
        duration: 1,
        r: 1,
        g: 1,
        b: 1,
      },
      6
    );
    tl.current.to(
      piernasRef.current.material.color,
      {
        duration: 1,
        r: 0.8,
        g: 0.4,
        b: 0.3,
      },
      6
    );
    tl.current.to(
      skeletonRef.current.rotation,
      {
        duration: 1,
        z: 0,
      },
      6
    );
    tl.current.to(
      skeletonRef.current.position,
      {
        duration: 1,
        x: 0,
        y: 3,
        z: 0,
      },
      6
    );
    // End animation legs

    // Animation feet
    tl.current.to(
      piernasRef.current.material.color,
      {
        duration: 1,
        r: 1,
        g: 1,
        b: 1,
      },
      7
    );
    tl.current.to(
      piesRef.current.material.color,
      {
        duration: 1,
        r: 0.8,
        g: 0.4,
        b: 0.3,
      },
      7
    );
    tl.current.to(
      skeletonRef.current.position,
      {
        duration: 1,
        y: 7,
        z: 1,
      },
      7
    );
    // End animation feet

    // ======================== ANIMATION ITEMS HTML ========================
    tl.current.to(
      page1Ref.current,
      {
        duration: 0.5,
        opacity: 0,
      },
      0
    );
    tl.current.to(
      svgRef.current,
      {
        duration: 0.5,
        opacity: 0,
      },
      0
    );

    // Craneo show items
    tl.current.to(
      item1.current,
      {
        duration: 0.2,
        opacity: 1,
        transform: "translateY(0)",
      },
      0.5
    );
    tl.current.to(
      item2.current,
      {
        duration: 0.3,
        opacity: 1,
        transform: "translateY(0)",
      },
      0.6
    );

    // Craneo hide items
    tl.current.to(
      item1.current,
      {
        duration: 0.7,
        opacity: 0,
        transform: "translateY(-100%)",
      },
      0.9
    );
    tl.current.to(
      item2.current,
      {
        duration: 0.7,
        opacity: 0,
        transform: "translateY(-100%)",
      },
      0.9
    );

    // Columna show items
    tl.current.to(
      item3.current,
      {
        duration: 0.3,
        opacity: 1,
        transform: "translateY(0)",
      },
      1.6
    );

    // Columna hide items
    tl.current.to(
      item3.current,
      {
        duration: 0.7,
        opacity: 0,
        transform: "translateY(-100%)",
      },
      1.9
    );

    // Costillas show items
    tl.current.to(
      item4.current,
      {
        duration: 0.2,
        opacity: 1,
        transform: "translateY(0)",
      },
      2.5
    );
    tl.current.to(
      item5.current,
      {
        duration: 0.3,
        opacity: 1,
        transform: "translateY(0)",
      },
      2.6
    );

    // Costillas hide items
    tl.current.to(
      item4.current,
      {
        duration: 0.7,
        opacity: 0,
        transform: "translateY(-100%)",
      },
      2.9
    );
    tl.current.to(
      item5.current,
      {
        duration: 0.7,
        opacity: 0,
        transform: "translateY(-100%)",
      },
      2.9
    );

    // Brazos show items
    tl.current.to(
      item6.current,
      {
        duration: 0.3,
        opacity: 1,
        transform: "translateY(0)",
      },
      3.5
    );
    tl.current.to(
      item7.current,
      {
        duration: 0.3,
        opacity: 1,
        transform: "translateY(0)",
      },
      3.55
    );
    tl.current.to(
      item8.current,
      {
        duration: 0.3,
        opacity: 1,
        transform: "translateY(0)",
      },
      3.6
    );

    // Brazos hide items
    tl.current.to(
      item6.current,
      {
        duration: 0.7,
        opacity: 0,
        transform: "translateY(-100%)",
      },
      3.9
    );
    tl.current.to(
      item7.current,
      {
        duration: 0.7,
        opacity: 0,
        transform: "translateY(-100%)",
      },
      3.9
    );
    tl.current.to(
      item8.current,
      {
        duration: 0.7,
        opacity: 0,
        transform: "translateY(-100%)",
      },
      3.9
    );

    // Inferior show items
    tl.current.to(
      item9.current,
      {
        duration: 0.3,
        opacity: 1,
        transform: "translateY(0)",
      },
      4.6
    );

    // Inferior hide items
    tl.current.to(
      item9.current,
      {
        duration: 0.7,
        opacity: 0,
        transform: "translateY(-100%)",
      },
      4.9
    );

    // Manos show items
    tl.current.to(
      item10.current,
      {
        duration: 0.2,
        opacity: 1,
        transform: "translateY(0)",
      },
      5.5
    );
    tl.current.to(
      item11.current,
      {
        duration: 0.3,
        opacity: 1,
        transform: "translateY(0)",
      },
      5.6
    );

    // Manos hide items
    tl.current.to(
      item10.current,
      {
        duration: 0.7,
        opacity: 0,
        transform: "translateY(-100%)",
      },
      5.9
    );
    tl.current.to(
      item11.current,
      {
        duration: 0.7,
        opacity: 0,
        transform: "translateY(-100%)",
      },
      5.9
    );

    // Piernas show items
    tl.current.to(
      item12.current,
      {
        duration: 0.2,
        opacity: 1,
        transform: "translateY(0)",
      },
      6.5
    );
    tl.current.to(
      item13.current,
      {
        duration: 0.3,
        opacity: 1,
        transform: "translateY(0)",
      },
      6.6
    );

    // Piernas hide items
    tl.current.to(
      item12.current,
      {
        duration: 0.7,
        opacity: 0,
        transform: "translateY(-100%)",
      },
      6.9
    );
    tl.current.to(
      item13.current,
      {
        duration: 0.7,
        opacity: 0,
        transform: "translateY(-100%)",
      },
      6.9
    );

    // Pies show items
    tl.current.to(
      item14.current,
      {
        duration: 0.2,
        opacity: 1,
        transform: "translateY(0)",
      },
      7.5
    );
    tl.current.to(
      item15.current,
      {
        duration: 0.3,
        opacity: 1,
        transform: "translateY(0)",
      },
      7.6
    );
  }, []);

  return (
    <group
      {...props}
      dispose={null}
      ref={skeletonRef}
      position={[0, -6, 1.3]}
      rotation={[Math.PI / 2.1, 0, -0.5]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.male_skeleton_first_anatomy_study001.geometry}
        material={nodes.male_skeleton_first_anatomy_study001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.male_skeleton_first_anatomy_study002.geometry}
        material={nodes.male_skeleton_first_anatomy_study002.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.male_skeleton_first_anatomy_study003.geometry}
        material={nodes.male_skeleton_first_anatomy_study003.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.male_skeleton_first_anatomy_study004.geometry}
        material={nodes.male_skeleton_first_anatomy_study004.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.male_skeleton_first_anatomy_study008.geometry}
        material={nodes.male_skeleton_first_anatomy_study008.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.male_skeleton_first_anatomy_study009.geometry}
        material={nodes.male_skeleton_first_anatomy_study009.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.male_skeleton_first_anatomy_study010.geometry}
        material={nodes.male_skeleton_first_anatomy_study010.material}
      />
      <mesh
        ref={columnaRef}
        castShadow
        receiveShadow
        geometry={nodes.columna.geometry}
        material={materials["Material.003"]}
      />
      <mesh
        ref={inferiorRef}
        castShadow
        receiveShadow
        geometry={nodes.inferior.geometry}
        material={materials["Material.005"]}
      />
      <mesh
        ref={costillasRef}
        castShadow
        receiveShadow
        geometry={nodes.costillas.geometry}
        material={materials["Material.002"]}
      />
      <mesh
        ref={brazosRef}
        castShadow
        receiveShadow
        geometry={nodes.brazos.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        ref={craneoRef}
        castShadow
        receiveShadow
        geometry={nodes.craneo.geometry}
        material={materials["Material.004"]}
      ></mesh>
      <mesh
        ref={manosRef}
        castShadow
        receiveShadow
        geometry={nodes.manos.geometry}
        material={materials["Material.008"]}
      />
      <mesh
        ref={piernasRef}
        castShadow
        receiveShadow
        geometry={nodes.piernas.geometry}
        material={materials["Material.006"]}
      />
      <mesh
        ref={piesRef}
        castShadow
        receiveShadow
        geometry={nodes.pies.geometry}
        material={materials["Material.007"]}
      />
    </group>
  );
}

useGLTF.preload("/skeleton.glb");
