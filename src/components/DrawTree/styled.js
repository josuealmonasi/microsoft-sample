import styled from 'styled-components';
import { DEEPEST_NODE, INFO_TEXT, NODE_BG_COLOR, NODE_BORDER } from '../../utils/appConstants';

export const TreeContainer = styled.div`
  display: flex;
  margin: auto;
`;

export const Tree = styled.div`
  border: solid 2px ${({ isDeepest }) => (!isDeepest ? NODE_BORDER : DEEPEST_NODE)};
  background: ${NODE_BG_COLOR};
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2px;
  margin: 2px;
`;

export const TreeLeave = styled.div`
  display: flex;
  justify-content: center;
  min-width: 70px;
`;

export const TreeRoot = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Info = styled.small`
  color: ${INFO_TEXT};
`;
