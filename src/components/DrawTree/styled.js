import styled from 'styled-components';

export const TreeContainer = styled.div`
  display: flex;
  margin: auto;
`;

export const Tree = styled.div`
  border: solid 2px
    ${({ isDeepest, theme }) => (!isDeepest ? theme.colors.nodeBorder : theme.colors.deepestNode)};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.nodeBgColor};
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
  color: ${({ theme }) => theme.colors.infoText};
`;
