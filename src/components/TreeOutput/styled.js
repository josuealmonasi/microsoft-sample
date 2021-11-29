import styled from 'styled-components';

export const TreeAsText = styled.textarea`
  overflow: auto;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.textColor};
  background-color: ${({ theme }) => theme.colors.bgColor};
`;
