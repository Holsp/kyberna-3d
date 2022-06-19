import React, { useState, useEffect, Suspense } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {
    Canvas,
    useThree,
    extend,
    useLoader,
} from "@react-three/fiber";

extend({ OrbitControls });
React.useLayoutEffect = React.useEffect;

import Amplify from "@aws-amplify/core"
import { Storage } from "aws-amplify"

//Amazon connection string
Amplify.configure({
    Auth: {
        region: 'eu-central-1',
        identityPoolId: 'eu-central-1:d3080cb0-0880-44cc-a3f8-cdab62be9274',
    },
    Storage: {
        AWSS3: {
            bucket: 'kyberna-three-dee',
            region: 'eu-central-1',
        }
    }
})


export default function PanoramaView({ data }) {

    //Image used in the panorama
    const [image, setImage] = useState(null);

    useEffect(async () => {
        
        //Gets the image
        const str = 'panoramas/' + data.toLowerCase() + '.jpg';
        const img = await Storage.get(str);
        setImage(img);
    
    }, [])



    const CameraController = () => {
        const { camera, gl } = useThree();
        useEffect(
            () => {
                const controls = new OrbitControls(camera, gl.domElement);

                controls.minDistance = 3;
                controls.maxDistance = 20;
                controls.rotateSpeed = - 0.25;
                return () => {
                    controls.dispose();
                };
            },
            [camera, gl]
        );
        return null;
    };


    function Dome({ texture }) {
        return (
            <group>
                <mesh>
                    <sphereBufferGeometry attach="geometry" args={[500, 60, 40]} />
                    <meshBasicMaterial
                        attach="material"
                        //map={texture}
                        map={useLoader(THREE.TextureLoader, texture)}
                        side={THREE.BackSide}
                    />
                </mesh>
            </group>
        );
    }


    //When Image stops being null, the components render and pass image as prop
    return (
        <div>
            
            {image !== null &&
                <div>
                    <Canvas concurrent camera={{ position: [0, 0, 0.1] }} style={{ width: "100vw", height: "100vh", cursor: "grab" }} className="canvas">
                        <CameraController />
                        <Suspense fallback={null}>
                            <Dome texture={image} />
                        </Suspense>
                    </Canvas>
                </div>
            }

        </div>

    );
}
