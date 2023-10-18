import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.TOMATO_100};
  border: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  padding: 1.2rem 2.4rem;
  border-radius: 0.5rem;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;
`;
