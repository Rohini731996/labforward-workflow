import { Handle, Position } from "react-flow-renderer";
import { RectangleNodeWrapper } from "./styles";
import { Colors } from "./Colors";
import React, { useState } from "react";
const Rectangle = (self = '') => {
  const [text, settext] = useState('')
  return (
    <RectangleNodeWrapper component={"rectangle"}>
      <textarea style={{margin:'2rem 1rem 0rem 0rem'}} value={text} onChange={e=>settext(e.target.value)}></textarea>
      <Handle
        type="target"
        position={Position.Top}
        id="target-1"
        style={{ background: Colors.target }}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="target-2"
        style={{ background: Colors.target }}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="source-1"
        style={{ background: Colors.source }}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="source-2"
        style={{ background: Colors.source }}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
    </RectangleNodeWrapper>
  );
};

export default Rectangle;
