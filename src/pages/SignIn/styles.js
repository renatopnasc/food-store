import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  > div {
    text-align: center;
    margin-top: -8rem;
  }
`;

export const Form = styled.form`
  background: ${({ theme }) => theme.COLORS.DARK_700};
  width: 47.6rem;

  margin: 0 auto;
  padding: 6.4rem;
  border-radius: 1.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;

  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 140%;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > span {
    color: ${({ theme }) => theme.COLORS.TOMATO_300};
    font-size: 1.2rem;
  }
`;
