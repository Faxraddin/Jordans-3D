import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

import Car from "./components/Car";

export default function CanvasContainer () {
    return(
        <Canvas camera={{ position: [0, 0, 5] }}>
            <OrbitControls
                enablePan={false}
                enableRotate={false}
                enableZoom={false}
            />
            <Suspense>
                <Car/>
            </Suspense>
            <Environment preset="city" />
        </Canvas>
    )
}