import styled from 'styled-components';

export const ErrorContainer = styled.div`
  border: solid ${({ theme }) => theme.colors.infoBorder} 2px;
  border-radius: 8px;
  width: 300px;
  margin: 40px auto;
  background: ${({ theme }) => theme.colors.infoBgColor};
`;

export const HelpButton = styled.button`
  background: ${({ theme }) => theme.colors.infoBgColor};
  border: none;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.infoBorder};
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  background: ${({ theme }) => theme.colors.overlayBgColor};
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
  background: ${({ theme }) => theme.colors.overlayContentBgColor};
  top: 0;
  left: 0;
`;

export const CodeExample = styled.div`
  background: ${({ theme }) => theme.colors.codeText};
  padding: 10px;
  border-radius: 10px;
  margin: 10px 0;
`;

export const OverLayScroll = styled.div`
  overflow: scroll;
`;
