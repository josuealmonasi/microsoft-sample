import styled from 'styled-components';
import {
  INFO_BG_COLOR,
  INFO_BORDER,
  OVERLAY_BG_COLOR,
  OVERLAY_CONTENT_BG_COLOR
} from '../../utils/appConstants';

export const ErrorContainer = styled.div`
  border: solid ${INFO_BORDER} 2px;
  border-radius: 8px;
  width: 300px;
  margin: 40px auto;
  background: ${INFO_BG_COLOR};
`;

export const HelpButton = styled.button`
  background: ${INFO_BG_COLOR};
  border: none;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
  color: ${INFO_BORDER};
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  background: ${OVERLAY_BG_COLOR};
  top: 0;
  left: 0;
`;

export const OverlayContent = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
  padding: 25px;
  box-sizing: border-box;
  width: 70vw;
  height: 55vh;
  background: ${OVERLAY_CONTENT_BG_COLOR};
  top: 0;
  left: 0;
`;

export const CodeExample = styled.div`
  background: whitesmoke;
  padding: 10px;
  border-radius: 10px;
  margin: 10px 0;
`;

export const OverLayScroll = styled.div`
  overflow: scroll;
`;
