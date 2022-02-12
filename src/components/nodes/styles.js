import styled from "@emotion/styled";
import MainNode from "./MainNode";
import { Colors } from "./Colors"
export const RectangleNodeWrapper = styled(MainNode)`
   height:100px;
   width:200px;
   background: ${Colors.rectangle};
   box-shadow: 0.261px 1.5px 3px 0px rgba(0, 0, 0, 0.5);
   overflow-wrap: break-word;
   word-wrap: break-word;
   hyphens: auto;
`
;
export const SquareNodeWrapper = styled(MainNode)`
   height:100px;
   width:100px;
   background: ${Colors.square};
   box-shadow: 0.261px 1.5px 3px 0px rgba(0, 0, 0, 0.5);

`;
export const CircleNodeWrapper = styled(MainNode)`
   height:150px;
   width:150px;
   border-radius:150px;
   background: ${Colors.circle};
   box-shadow: 0.261px 1.5px 3px 0px rgba(0, 0, 0, 0.5);
   overflow-wrap: break-word;
   word-wrap: break-word;
   hyphens: auto;
`;

export const DiamondNodeWrapper = styled(MainNode)`
   height: 120px;
   text-align: center;
   transform:rotate(45deg);
   width:90px;
   background: ${Colors.diamond};
   box-shadow: 0.261px 1.5px 3px 0px rgba(0, 0, 0, 0.5);
   overflow-wrap: break-word;
   word-wrap: break-word;
   hyphens: auto;
`;
