import React, { useState, useRef } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
  ControlButton,
  Background,
  MiniMap,
  isEdge
} from 'react-flow-renderer';
import customNodes from './CustomNodes';
import customEdges from './CustomEdges';

import Sidebar from './Sidebar';

import './dnd.css';

const initialElements = [];

let id = 0;
const getId = () => `dndnode_${id++}`;

const DnDFlow = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [elements, setElements] = useState(initialElements);
  const onConnect = (params) => setElements((els) => addEdge(
   { 
     ...params, 
     animated:true,
     sourceX:10,
     sourceY:10,
     style: { stroke: 'green', strokeWidth: "3px" },
     data: { source: "", target: "", payload: "test" }
   },
     els
    ));
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));

  const onLoad = (_reactFlowInstance) =>
    setReactFlowInstance(_reactFlowInstance);

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  const onDrop = (event) => {
    event.preventDefault();

    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData('application/reactflow');
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });
    const newNode = {
      id: getId(),
      type,
      position,
      data: { label: `${type} node` },
    };

    setElements((es) => es.concat(newNode));
  };

  const edgeTypes = {
    custom: customEdges
  };

  let theme = 'light'
  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <Sidebar />
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            style={{
              background:
                theme !== "light" ? "rgb(215,215,215)" : "rgb(35,35,35)"
            }}
            elements={elements}
            onConnect={onConnect}
            onElementsRemove={onElementsRemove}
            onLoad={onLoad}
            onDrop={onDrop}
            onDragOver={onDragOver}
            nodeTypes={customNodes}
            edgeTypes={edgeTypes}
            connectionLineStyle={{ stroke: "#3498db", strokeWidth: 2 }}
          >
            <Controls style={{marginBottom:"0rem"}}>
              <ControlButton>""</ControlButton>
            </Controls>
            <Background
              gap={55}
              color={theme === "light" ? "#7f8c8d" : "rgb(170,170,170)"}
              size={theme === "light" ? "2.5px" : "1px"}
            />
            <MiniMap  nodeColor="#00FF00" />
          </ReactFlow>
        </div>

      </ReactFlowProvider>
    </div>
  );
};

export default DnDFlow;