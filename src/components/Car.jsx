import { useGLTF,useScroll } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useControls } from "leva";
import gsap from "gsap";

export default function Car() {
    const { nodes, materials } = useGLTF("/scene.glb");

    return(
        <>
            <directionalLight
                castShadow
				position={[-2.38, 1.32, 0.74]}
				intensity={5}
            />
            <group 
                scale={10}
            >
                <mesh
                    geometry={nodes.car_body.g}
                />
            </group>
        </>
    )
}