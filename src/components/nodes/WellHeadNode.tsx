import { NodeProps, Handle, Position } from 'reactflow'
import { WellHead } from '../pieces/WellHead'

export function WellHeadNode(props: NodeProps) {
  props.data

  return (
    <>
      <div className='w-[280px] h-[150px]'>
      <WellHead />
        <Handle
          id='right'
          type='source'
          position={Position.Right}
          className='-right-5 w-3 h-3 bg-blue-400/80'
        />
        <Handle
          id='left'
          type='source'
          position={Position.Left}
          className='-left-5 w-3 h-3 bg-blue-400/80'
        />
        <Handle
          id='top'
          type='source'
          position={Position.Top}
          className='-top-5 w-3 h-3 bg-blue-400/80'
        />
        <Handle
          id='bottom'
          type='source'
          position={Position.Bottom}
          className='-bottom-5 w-3 h-3 bg-blue-400/80'
        />
      </div>
    </>
  )
}