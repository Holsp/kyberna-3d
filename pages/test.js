import React, { useRef, Suspense } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {
  Canvas,
  extend,
  useThree,
  useFrame,
  useLoader
} from "@react-three/fiber";

extend({ OrbitControls });

const place = "/aurora.jpg";

function Controls(props) {
  const orbitRef = useRef();
  const { camera, gl } = useThree();

  useFrame(() => {
    orbitRef.current.update();
  });

  return (
    <orbitControls
      ref={orbitRef}
      target={[0, 0, 0]}
      args={[camera, gl.domElement]}
    />
  );
}

function Dome({ position, color, texture, onClick }) {
  return (
    <group>
      <mesh>
        <sphereBufferGeometry attach="geometry" args={[500, 60, 40]} />
        <meshBasicMaterial
          attach="material"
          map={useLoader(THREE.TextureLoader, texture)}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

export default function Test() {
  return (
    <Canvas concurrent camera={{ position: [0, 0, 0.1] }}>
      <Controls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.2}
        autoRotate={false}
        rotateSpeed={-0.5}
      />
      <Suspense fallback={null}>
        <Dome texture={place} />
      </Suspense>
    </Canvas>
  );
}
