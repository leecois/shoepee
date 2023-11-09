import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import ModelNike from './models/ModelNike';

function Scene() {
  return (
    <Canvas camera={{ position: [0, 0.5, 0.5] }}>
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      <directionalLight intensity={0.1} position={[100, 0, 50]} />
      <ModelNike />
      <Environment files="./img/small.hdr" background />
    </Canvas>
  );
}

export default Scene;
