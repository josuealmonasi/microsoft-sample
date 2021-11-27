import styled from 'styled-components';
import { INFO_BG_COLOR, INFO_BORDER, INFO_TEXT } from '../../utils/appConstants';

export const TabsContainer = styled.div`
  border: solid 1px ${INFO_TEXT};
  border-radius: 10px;
  width: 80%;
  margin: 40px auto;
  padding: 20px;
  @media (max-width: 768px) {
    width: 100%;
    max-height: 70vh;
  }
`;

export const TabsTitleContainer = styled.div`
  display: flex;
`;

export const TabsTitles = styled.div`
  cursor: pointer;
  border: solid 1px ${INFO_TEXT};
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 0;
  background-color: ${({ active }) => active && INFO_BG_COLOR};
  margin: 10px 0 0 0;
  min-width: 40px;
  padding: 10px;
  transition: border 300ms ease-in-out, background-color 300ms ease-in-out;

  &:hover {
    background-color: ${INFO_BG_COLOR};
    border-color: ${INFO_BORDER};
  }
`;

export const TabOutput = styled.div`
  width: 100%;
  border: solid 1px ${INFO_TEXT};
  overflow: auto;
  max-height: 60vh;
  padding: 20px;
  box-sizing: border-box;
`;
