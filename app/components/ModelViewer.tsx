import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, ContactShadows, PresentationControls } from '@react-three/drei';
import { Group } from 'three';

interface ModelProps {
  path: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

function Model({ path, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }: ModelProps) {
  const group = useRef<Group>(null);
  const { scene } = useGLTF(path);
  
  return (
    <group ref={group} position={position} rotation={rotation} scale={[scale, scale, scale]}>
      <primitive object={scene} />
    </group>
  );
}

interface ModelViewerProps {
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  backgroundColor?: string;
  height?: string;
  width?: string;
  className?: string;
  enableDragging?: boolean;
}

export default function ModelViewer({
  modelPath,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  backgroundColor = 'transparent',
  height = '100%',
  width = '100%',
  className = '',
  enableDragging = false,
}: ModelViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div 
      ref={containerRef}
      className={`${className} overflow-hidden w-full`} 
      style={{ 
        height, 
        width, 
        background: backgroundColor,
        padding: '0'
      }}
    >
      <Canvas
        camera={{ 
          position: [7, 2, 7],
          fov: 35,
          near: 0.1,
          far: 1000
        }}
        shadows
        style={{ width: '100%', height: '100%' }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.8} />
        <spotLight position={[12, 8, 5]} angle={0.15} penumbra={1} intensity={0.8} castShadow />
        <spotLight position={[12, 8, -5]} angle={0.15} penumbra={1} intensity={0.8} castShadow />
        <spotLight position={[-5, 5, 0]} angle={0.25} penumbra={1} intensity={0.5} castShadow />
        
        <Suspense fallback={null}>
          {enableDragging ? (
            <>
              <Model path={modelPath} scale={scale} position={position} rotation={rotation} />
              <OrbitControls 
                enablePan={false}
                enableRotate={true}
                rotateSpeed={1}
                minPolarAngle={0}
                maxPolarAngle={Math.PI}
                enableZoom={false}
                minDistance={3}
                maxDistance={20}
                dampingFactor={0.1}
                enableDamping={true}
                mouseButtons={{
                  LEFT: 1, // ROTATE - This is the standard value for rotation
                  MIDDLE: 0, // NONE
                  RIGHT: 0  // NONE
                }}
              />
            </>
          ) : (
            <PresentationControls
              global
              snap
              rotation={[0, 0, 0]}
              polar={[0, 0]}
              azimuth={[0, 0]}
              speed={0}
            >
              <Model path={modelPath} scale={scale} position={position} rotation={rotation} />
            </PresentationControls>
          )}
          
          <Environment preset="city" />
          <ContactShadows 
            position={[0, -0.01, 0]} 
            opacity={0.35}
            scale={8}
            blur={1.2} 
            far={3} 
            resolution={256}
          />
        </Suspense>
      </Canvas>
    </div>
  );
} 