import { useGLTF,useScroll } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useControls } from "leva";
import gsap from "gsap";
import ScrollTrigger from "gsap-trial/ScrollTrigger";

export default function Car() {
    return(
        <>
            <directionalLight
                castShadow
				position={[-2.38, 1.32, 0.74]}
				intensity={5}
            />
            <group>

            </group>
        </>
    )
}