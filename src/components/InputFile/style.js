import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
  }

  > label {
    padding: 1.2rem 3.2rem;
    max-width: 22.9rem;
    border-radius: 0.8rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    display: flex;
    align-items: center;
    gap: 0.8rem;

    cursor: pointer;

    background: ${({ theme }) => theme.COLORS.DARK_800};

    input {
      display: none;
    }
  }
`;
