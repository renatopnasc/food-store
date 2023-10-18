import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.DARK_600};

  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: header;

  > nav {
    max-width: 112.2rem;
    height: 5rem;

    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > a img {
      max-width: 19.7rem;
      height: 3rem;
    }

    > .signOut-btn {
      width: 3.2rem;
      background: none;
      border: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`;

export const SearchInput = styled.form`
  max-width: 58.1rem;
  background: ${({ theme }) => theme.COLORS.DARK_900};
  padding: 1.2rem 1.4rem;
  border-radius: 0.5rem;

  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > input {
    background: none;
    border: none;
    width: 34.4rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;
