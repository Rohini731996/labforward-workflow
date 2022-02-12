import styled from "@emotion/styled";
import MainNode from "./MainNode";
export const RectangleNodeWrapper = styled(MainNode)`
   height:100px;
   width:200px;
`;
export const SquareNodeWrapper = styled(MainNode)`
   height:100px;
   width:100px;
`;
export const CircleNodeWrapper = styled(MainNode)`
   height:150px;
   width:150px;
   border-radius:150px
`;

export const DiamondNodeWrapper = styled(MainNode)`
   height: 120px;
   text-align: center;
   transform:rotate(45deg);
    width:90px;
`;

export const InputLabel = styled.div`
  color: red;
`;
