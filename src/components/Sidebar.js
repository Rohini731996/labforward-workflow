import React from 'react';
import './dnd.css'
import { NodeWrapper } from "./styles";

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside>
      <div className="description">Select Shapes</div>
      <NodeWrapper>
        <div className="dndnode default" onDragStart={(event) => onDragStart(event, 'rectangle')} draggable>
          <div className="dndnode rectangle" />
          Rectangle
        </div>
      </NodeWrapper>
      <NodeWrapper>
        <div className="dndnode default" onDragStart={(event) => onDragStart(event, 'square')} draggable>
          <div className="dndnode square" />
          Square
        </div>
      </NodeWrapper>
      <NodeWrapper>
        <div className="dndnode default" onDragStart={(event) => onDragStart(event, 'circle')} draggable>
          <div className="dndnode circle" />
          Circle
        </div>
      </NodeWrapper>
      <NodeWrapper>
        <div className="dndnode default" onDragStart={(event) => onDragStart(event, 'diamond')} draggable>
          <div className="dndnode diamond" />
          Diamond
        </div>
      </NodeWrapper>
    </aside>
  );
};