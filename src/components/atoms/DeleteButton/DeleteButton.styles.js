import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.grey};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 20px;
  border: none;
  margin-left: 10px;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }
`;
