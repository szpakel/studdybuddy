import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 30px;
  padding-bottom: 20px;
  gap: 10px;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;

export const StyledAverage = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.s};
  justify-content: center;
  background-color: ${({ theme, value }) => {
    if (value < 5 && value > 3) {
      return theme.colors.warning;
    } else if (value < 3) {
      return theme.colors.error;
    }
    return theme.colors.success;
  }};
  width: 30px;
  height: 30px;
  border-radius: 20px;
  font-weight: bold;
  color: white;
  margin-right: 15px;
`;

export const StyledInfo = styled.div`
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  p:last-child {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  p:first-child {
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: 600;
  }
`;
