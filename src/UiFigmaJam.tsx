import ReactFlow, { addEdge, Background, Connection, ConnectionMode, Controls, useEdgesState, useNodesState } from 'reactflow';
import { zinc } from 'tailwindcss/colors';
import 'reactflow/dist/style.css';

import * as Toolbar from '@radix-ui/react-toolbar';

import { Square } from './components/nodes/Square';
import { useCallback } from 'react';
import DefaultEdge from './components/edges/DefaultEdge';
import { WellHeadNode } from './components/nodes/WellHeadNode';
import { WellHead } from './components/pieces/WellHead';
// import { WellBodyNode } from './components/nodes/WellBodyNode';

// Nodes - tudo que vai aparecer em tela.
// Edges - são as conexões entre nodes.

const NODE_TYPES = {
  square: Square,
}

const WELLHEAD_NODE = {
  square: WellHeadNode,
}

// const WELLBODY_NODE = {
//   square: WellBodyNode,
// }

const EDGE_TYPES = {
  default: DefaultEdge,
}

const INITIAL_NODES = [
  {
    // id: crypto.randomUUID(),
    // type: 'square',
    // position: {
    //   x: 400,
    //   y: 400
    // },
    // data: {},
  },
] //satisfies Node[]

// const INITIALBODY_NODES = [
//   {
//     id: crypto.randomUUID(),
//     type: 'square',
//     position: {
//       x: 600,
//       y: 600
//     },
//     data: {},
//   }
// ] //satisfies Node[]

// function body() {
//   const [edges, setEdges, onEdgesChange] = useEdgesState([])
//   const [nodes, setNodes, onNodesChange] = useNodesState(INITIAL_NODES)
//   const [body, setBodyNodes, onBodyNodesChange] = useNodesState(INITIALBODY_NODES)
//   const onConnect = useCallback((connection: Connection) => {
//     return setEdges(edges => addEdge(connection, edges))
//   }, [])
//   return (
//     <ReactFlow
//       nodeTypes={WELLBODY_NODE}
//       edgeTypes={EDGE_TYPES}
//       nodes={body}
//       edges={edges}
//       onEdgesChange={onEdgesChange}
//       onConnect={onConnect}
//       onNodesChange={onNodesChange}
//       connectionMode={ConnectionMode.Loose}
//       defaultEdgeOptions={{
//         type: 'default',
//       }}
//     />
//   )
// }

export const UiFigmaJam = () => {

  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  // const [nodes, setNodes, onNodesChange] = useNodesState(INITIAL_NODES)
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  // const [body, setBodyNodes, onBodyNodesChange] = useNodesState(INITIALBODY_NODES)

  const onConnect = useCallback((connection: Connection) => {
    return setEdges(edges => addEdge(connection, edges))
  }, [])

  function addSquareNode() {
    setNodes(nodes => [
      ...nodes,
      {
        id: crypto.randomUUID(),
        type: 'square',
        position: {
          x: 750,
          y: 350
        },
        data: {},
      },
    ])
  }

  return (
    <div className='w-sreen h-screen'>
      <ReactFlow
        // nodeTypes={NODE_TYPES}
        nodeTypes={WELLHEAD_NODE}
        edgeTypes={EDGE_TYPES}
        nodes={nodes}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodesChange={onNodesChange}
        connectionMode={ConnectionMode.Loose}
        defaultEdgeOptions={{
          type: 'default',
        }}
      >
        <Background
          gap={12}
          size={2}
          color={zinc[400]}
        />
        <Controls />
      </ReactFlow>

      <Toolbar.Root
        // className='fixed bottom-20 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg border border-zinc-300 px-14 h-25 w-96 overflow-hidden'
        className='fixed bottom-20 left-56 top-12 -translate-x-1/2 bg-white rounded-2xl shadow-lg border border-zinc-300 px-14 h-2/3 w-96 overflow-hidden'
      >
        <div className='flex-row gap-2 l-12'>
          <Toolbar.Button
            onClick={addSquareNode}
            // className='w-32 h-32 bg-violet-500 mt-6 rounded hover:-translate-y-10'
            className='w-32 h-32 mt-6 rounded hover:-translate-y-2'
          >
            <WellHead />
          </Toolbar.Button>
        </div>
        <div className='flex-row gap-2 l-12'>
          <Toolbar.Button
            onClick={addSquareNode}
            // className='w-32 h-32 bg-violet-500 mt-6 rounded hover:-translate-y-10'
            className='w-32 h-32 mt-6 rounded hover:-translate-y-2'
          >
            <WellHead />
          </Toolbar.Button>
        </div>
        <div className='flex-row gap-2 l-12'>
          <Toolbar.Button
            onClick={addSquareNode}
            // className='w-32 h-32 bg-violet-500 mt-6 rounded hover:-translate-y-10'
            className='w-32 h-32 mt-6 rounded hover:-translate-y-2'
          >
            <WellHead />
          </Toolbar.Button>
        </div>
      </Toolbar.Root>
    </div>
  )
}