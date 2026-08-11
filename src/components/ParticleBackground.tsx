"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 140;
const FIELD_RADIUS = 9;
const LINK_DISTANCE = 2.1;

function buildConstellationGeometry() {
  const points: THREE.Vector3[] = [];
  for (let i = 0; i < NODE_COUNT; i++) {
    points.push(
      new THREE.Vector3(
        (Math.random() - 0.5) * FIELD_RADIUS * 2,
        (Math.random() - 0.5) * FIELD_RADIUS * 1.2,
        (Math.random() - 0.5) * FIELD_RADIUS
      )
    );
  }

  const positions = new Float32Array(points.length * 3);
  points.forEach((p, i) => {
    positions[i * 3] = p.x;
    positions[i * 3 + 1] = p.y;
    positions[i * 3 + 2] = p.z;
  });

  const lineVerts: number[] = [];
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      if (points[i].distanceTo(points[j]) < LINK_DISTANCE) {
        lineVerts.push(points[i].x, points[i].y, points[i].z);
        lineVerts.push(points[j].x, points[j].y, points[j].z);
      }
    }
  }

  return {
    positions,
    linePositions: new Float32Array(lineVerts),
  };
}

// Generated once at module load (not during a component render), so the
// buffer attributes are present for the very first WebGL draw call.
const { positions: nodePositions, linePositions } = buildConstellationGeometry();

function Constellation() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.035;
    groupRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.08) * 0.08;
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[nodePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#22d3ee"
          size={0.055}
          sizeAttenuation
          transparent
          opacity={0.85}
        />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#10b981" transparent opacity={0.18} />
      </lineSegments>
    </group>
  );
}

export default function ParticleBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Constellation />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
    </div>
  );
}
