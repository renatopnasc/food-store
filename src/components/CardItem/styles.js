import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.DARK_200};
  padding: 5.5rem 2.4rem;
  border-radius: 0.8rem;
  max-width: 30.4rem;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  > button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    position: absolute;
    top: 1.6rem;
    right: 1.8rem;
  }

  > img {
    width: 17.6rem;
    height: 17.6rem;
    object-fit: cover;
    border-radius: 50%;
    cursor: pointer;
  }

  > h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 2.4rem;
    line-height: 140%;
  }

  > .food-description {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: "Roboto", sans-serif;
    font-size: 1.4rem;
    line-height: 160%;
    font-weight: 400;
  }

  > .food-price {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-family: "Roboto", sans-serif;
    font-size: 3.2rem;
    line-height: 160%;
    font-weight: 400;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }
`;
