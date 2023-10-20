import styled from "styled-components";

export const Container = styled.div`
  > #file-label {
    padding: 1.2rem 3.2rem;
    width: 23rem;
    border-radius: 0.8rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    font-size: 1.4rem;

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
