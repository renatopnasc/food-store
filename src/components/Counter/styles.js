import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  p {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 2rem;
    line-height: 160%;
    font-weight: bold;
    font-family: "Roboto", sans-serif;
  }

  button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    display: flex;
  }
`;
