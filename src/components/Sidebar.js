import React from 'react';
import './dnd.css'
import { NodeWrapper, InputLabel } from "./styles";

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside>
      <div className="description">Select Shapes</div>
      <NodeWrapper>
        <div className="dndnode default" onDragStart={(event) => onDragStart(event, 'input')} draggable>
         Input
        </div>
      </NodeWrapper>
      <NodeWrapper>
        <div className="dndnode default" onDragStart={(event) => onDragStart(event, 'rectangle')} draggable>
         Rectangle
        </div>
      </NodeWrapper>
      <NodeWrapper>
        <div className="dndnode default" onDragStart={(event) => onDragStart(event, 'square')} draggable>
         Square
        </div>
      </NodeWrapper>
      <NodeWrapper>
        <div className="dndnode default" onDragStart={(event) => onDragStart(event, 'circle')} draggable>
         circle
        </div>
      </NodeWrapper>
      <NodeWrapper>
        <div className="dndnode default" onDragStart={(event) => onDragStart(event, 'diamond')} draggable>
          Diamond
        </div>
      </NodeWrapper>
    </aside>
  );
};