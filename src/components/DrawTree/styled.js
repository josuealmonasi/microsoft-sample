import styled from 'styled-components';
import { DEEPEST_NODE, INFO_TEXT, NODE_BG_COLOR, NODE_BORDER } from '../../utils/appConstants';

export const TreeContainer = styled.div`
  display: flex;
  margin: auto;
`;

export const Tree = styled.div`
  border: solid 2px ${({ isDeepest }) => (!isDeepest ? NODE_BORDER : DEEPEST_NODE)};
  border-radius: 8px;
  background: ${NODE_BG_COLOR};
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4px;
  margin: 4px;
`;

export const TreeLeave = styled.div`
  display: flex;
  justify-content: center;
`;

export const TreeRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Info = styled.small`
  color: ${INFO_TEXT};
`;
