import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 100%;
  }

  > input {
    background: ${({ theme, $border }) =>
      $border === "true" ? "transparent" : theme.COLORS.DARK_900};

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    padding: 1.2rem 1.4rem;
    border: ${({ theme, $border }) =>
      $border === "true" ? `1px solid ${theme.COLORS.LIGHT_100}` : "none"};
    border-radius: 0.5rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      font-family: "Roboto", sans-serif;
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 100%;
    }
  }
`;
