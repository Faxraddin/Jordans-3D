import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Loading from './components/Loading';

import Car from "./components/Car";

export default function CanvasContainer () {
    return(
        <Canvas 
            camera={{
                position: [
                    4.742922067308307, 2.2387122409413784, 1.2218255872664914,
                ],
            }}
            shadows
        >
            <OrbitControls
                enablePan={false}
                enableRotate={false}
                enableZoom={false}
            />
            <Suspense fallback={<Loading/>}>
                <Car/>
            </Suspense>
            <Environment preset="city" />
        </Canvas>
    )
}