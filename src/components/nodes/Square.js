import { Handle } from "react-flow-renderer";
import { Colors } from "./Colors";
import { SquareNodeWrapper, InputLabel } from "./styles";

const Square = (self) => {
  return (
    <SquareNodeWrapper>
      <InputLabel>{self.data.label}</InputLabel>
      <Handle
        type="target"
        position="top"
        id="target-1"
        style={{ background: Colors.target, left: '50%' }}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
      <Handle
        type="target"
        position="left"
        id="target-2"
        style={{ background: Colors.target }}
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
    </SquareNodeWrapper>
  );
};

export default Square;
