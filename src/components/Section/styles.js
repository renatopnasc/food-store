import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  position: relative;

  > h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 140%;
    margin-bottom: 2.4rem;
  }
`;
