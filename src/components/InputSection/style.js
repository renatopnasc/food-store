import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  width: 100%;

  > div {
    label {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 1.6rem;
    }
  }
`;
