import styled from 'styled-components';

export const TabsContainer = styled.div`
  border: solid 1px ${({ theme }) => theme.colors.infoText};
  border-radius: 10px;
  width: 80%;
  margin: 40px auto;
  padding: 20px;
  box-sizing: border-box;
  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    width: 100%;
    max-height: 70vh;
  }
`;

export const TabsTitleContainer = styled.div`
  display: flex;
`;

export const TabsTitles = styled.div`
  cursor: pointer;
  border: solid 1px ${({ theme }) => theme.colors.infoText};
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 0;
  background-color: ${({ active, theme }) => active && theme.colors.infoBgColor};
  margin: 10px 0 0 0;
  min-width: 40px;
  padding: 10px;
  transition: border 300ms ease-in-out, background-color 300ms ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.infoBgColor};
    border-color: ${({ theme }) => theme.colors.infoBorder};
  }
`;

export const TabOutput = styled.div`
  width: 100%;
  border: solid 1px ${({ theme }) => theme.colors.infoText};
  overflow: auto;
  max-height: 60vh;
  padding: 20px;
  box-sizing: border-box;
`;
