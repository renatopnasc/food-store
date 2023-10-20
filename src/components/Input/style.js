import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 4.8rem;
  background: ${({ theme }) => theme.COLORS.DARK_800};
  border-radius: 0.8rem;

  > input {
    width: 100%;
    height: 100%;
    background: none;
    border: none;

    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    line-height: 100%;
    font-weight: 500;

    padding-inline: 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;
