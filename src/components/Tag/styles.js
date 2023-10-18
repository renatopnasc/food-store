import styled from "styled-components";

export const Container = styled.span`
  background: ${({ theme }) => theme.COLORS.DARK_1000};
  font-size: 1.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  line-height: 2.4rem;
  font-weight: 500;
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
`;
