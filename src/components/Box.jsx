import React from 'react'
import { Box } from '@react-three/drei';
import { Material } from 'three'
import { Mesh } from 'three'
import { Geometry } from 'three/examples/jsm/deprecated/Geometry.js'

export default function Box() {
  return (
    <Mesh>
      <Box args={[1, 1, 1]} position={[0, 0, 0]} />
    </Mesh>
  )
}
