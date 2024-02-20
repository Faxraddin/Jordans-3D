import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";

export default function CanvasContainer () {
    return(
        <Canvas>
            <OrbitControls
                enablePan={false}
                enableRotate={false}
                enableZoom={false}
            />
            <Suspense >
			
			</Suspense>
            <Environment preset="city" />
        </Canvas>
    )
}