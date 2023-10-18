import styled from "styled-components";

export const Container = styled.button`
  max-width: 21.6rem;
  height: 5.6rem;
  padding: 1.2rem 3.2rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background: ${({ theme }) => theme.COLORS.TOMATO_100};
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;

  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`;
