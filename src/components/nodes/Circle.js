import { Handle } from "react-flow-renderer";
import { Colors } from "./Colors";
import { CircleNodeWrapper, InputLabel } from "./styles";

const CircleNode = (self) => {
  return (
    <CircleNodeWrapper>
      {/* <InputLabel>{self.data.label}</InputLabel> */}
      <Handle
        type="target"
        position="top"
        id="target-1"
        style={{ left: "50%", background: Colors.target }}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
      <Handle
        type="source"
        position="left"
        id="target-2"
        style={{ left: "-5px", background: Colors.target }}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
      <Handle
        type="source"
        position="right"
        id="source-1"
        style={{ background: Colors.source }}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
      <Handle
        type="source"
        position="bottom"
        id="source-2"
        style={{ left: "50%", background: Colors.source }}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
    </CircleNodeWrapper>
  );
};

export default CircleNode;
