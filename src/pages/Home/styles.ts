import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
    background: ${theme.COLORS.primary};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 20px;
    ${theme.COLORS.textColor};
  `}
`;
