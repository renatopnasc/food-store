import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  #options-view-button:focus + #select-button {
    outline: 1px solid ${({ theme }) => theme.COLORS.CAKE_100};
  }

  #select-button {
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.COLORS.DARK_800};
    justify-content: space-between;

    padding-inline: 1.6rem;
    border-radius: 0.5rem;
    height: 4.8rem;

    font-family: "Roboto", sans-serif;
    font-size: 1.4rem;
    font-weight: 500;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    #chevrons span:last-child {
      display: none;
    }
  }

  #category-select {
    position: relative;
  }

  #options-view-button {
    all: unset;

    position: absolute;
    inset: 0;

    cursor: pointer;
    z-index: 3;
  }

  #options {
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.COLORS.DARK_800};

    display: none;

    .option {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      position: relative;

      padding: 2rem;

      width: 100%;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_700};

      &:has(input:checked),
      &:hover {
        background: ${({ theme }) => theme.COLORS.DARK_500};
      }

      &:has(input:focus) {
        outline: 1px solid ${({ theme }) => theme.COLORS.CAKE_100};
        border-radius: 0.5rem;
      }

      input[type="radio"] {
        all: unset;

        position: absolute;
        inset: 0;

        cursor: pointer;
      }
    }
  }

  #category-select:has(#options-view-button:checked) + #options {
    display: block;
  }
`;
