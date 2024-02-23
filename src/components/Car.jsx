import React, { useRef } from 'react';
import { CameraControls, Plane, useGLTF, useScroll  } from '@react-three/drei';

import {
	forwardRef,
	useEffect,
	useLayoutEffect,
	useState,
} from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useControls } from 'leva';

gsap.registerPlugin(ScrollTrigger)

export default function Car(props) {
  const { nodes, materials } = useGLTF('/scene.gltf');
  const car = useRef(null);

  const {scene,camera} = useThree();
  const tl = gsap.timeline();

  const {cameraPosition,scenePosition,sceneRotation} = useControls({
    cameraPosition:{
      value:{x:0,y:0,z:0},
      step:0.5
    },
    scenePosition:{
      value:{x:0,y:0,z:0},
      step:0.5
    },
    sceneRotation:{
      value:{x:0,y:0,z:0},
      step:0.5
    }
  })

  useFrame(()=>{
    camera.position.x = cameraPosition.x
    camera.position.y = cameraPosition.y
    camera.position.z = cameraPosition.z

    scene.position.x = scenePosition.x
    scene.position.y = scenePosition.y
    scene.position.z = scenePosition.z

    scene.rotation.x = sceneRotation.x
    scene.rotation.y = sceneRotation.y
    scene.rotation.z = sceneRotation.z
  })

  return (
    <group ref={car} rotation-x={[-Math.PI * 0.5]} position={[2, 1, -1.5]} castShadow scale={0.7} {...props} dispose={null}>
      <group 
				
      >
        <mesh geometry={nodes.Object_2.geometry} material={materials.F40_Carbon} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.F40_GridD} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.F40_Headlights} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.F40_Sheft} />
        <mesh geometry={nodes.Object_6.geometry} material={materials['F40_Window.001']} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.super_brakelight} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.super_reverselight} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.material} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.material} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.F40_Brake} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.F40_Chrome} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.F40_Chrome} />
        <mesh geometry={nodes.Object_14.geometry} material={materials['F40_Chrome.001']} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.F40_Cockpit} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.F40_Cockpit} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.F40_Cockpit} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.F40_Cockpit_HR} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.F40_Display} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.F40_Display_1} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.F40_Estra} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.F40_Glass} />
        <mesh geometry={nodes.Object_23.geometry} material={materials['F40_Glass.001']} />
        <mesh geometry={nodes.Object_24.geometry} material={materials.F40_Grid} />
        <mesh geometry={nodes.Object_25.geometry} material={materials.F40_Logos} />
        <mesh geometry={nodes.Object_26.geometry} material={materials.F40_Mechanics} />
        <mesh geometry={nodes.Object_27.geometry} material={materials.F40_Mechanics} />
        <mesh geometry={nodes.Object_28.geometry} material={materials['F40_Mechanics.001']} />
        <mesh geometry={nodes.Object_29.geometry} material={materials.F40_Pedali} />
        <mesh geometry={nodes.Object_30.geometry} material={materials.F40_Rrims} />
        <mesh geometry={nodes.Object_31.geometry} material={materials.F40_Rrims} />
        <mesh geometry={nodes.Object_32.geometry} material={materials.F40_Skin} />
        <mesh geometry={nodes.Object_33.geometry} material={materials.F40_Strelki} />
        <mesh geometry={nodes.Object_34.geometry} material={materials.F40_Tappetini} />
        <mesh geometry={nodes.Object_35.geometry} material={materials.F40_Vehiclelight} />
        <mesh geometry={nodes.Object_36.geometry} material={materials.F40_Window} />
        <mesh geometry={nodes.Object_37.geometry} material={materials['Scene_-_Root.002']} />
        <mesh geometry={nodes.Object_38.geometry} material={materials['Scene_-_Root.002']} />
        <mesh geometry={nodes.Object_39.geometry} material={materials['Scene_-_Root.002']} />
        <mesh geometry={nodes.Object_40.geometry} material={materials['Scene_-_Root.002']} />
        <mesh geometry={nodes.Object_41.geometry} material={materials.super_gauges} />
        <mesh geometry={nodes.Object_42.geometry} material={materials.super_headlight} />
        <mesh geometry={nodes.Object_43.geometry} material={materials.super_signal_L} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
