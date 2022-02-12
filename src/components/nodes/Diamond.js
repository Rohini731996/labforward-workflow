import { Handle } from "react-flow-renderer";
import { Colors } from "./Colors";
import { DiamondNodeWrapper, InputLabel } from "./styles";

const DiamondNode = (self) => {
  return (
    <DiamondNodeWrapper>
      {/* <InputLabel>{self.data.label}</InputLabel> */}
      <Handle
        type="target"
        position="top"
        id="target-1"
        style={{ background: Colors.target, left: "-0.5%" }}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
      <Handle
        type="target"
        position="bottom"
        id="target-2"
        style={{ background: Colors.target,left:'1%' }}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
      <Handle
        type="left"
        position="right"
        id="source-1"
        style={{ top: "-0.5%", background: Colors.source }}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
      <Handle
        type="source"
        position="bottom"
        id="source-2"
        style={{ left: "99%", background: Colors.source }}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
    </DiamondNodeWrapper>
  );
};

export default DiamondNode;
