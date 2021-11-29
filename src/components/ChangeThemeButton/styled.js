import styled from 'styled-components';

export const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  text-transform: capitalize;
  border: 2px solid ${({ theme }) => theme.colors.infoText};
  color: ${({ theme }) => theme.colors.infoText};
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.bgColor};
`;
