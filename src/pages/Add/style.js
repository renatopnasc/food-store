import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.4rem 1fr;
  grid-template-areas:
    "header"
    "content";

  > main {
    width: 100%;
    overflow-y: auto;

    &::-webkit-scrollbar {
      background: none;
    }
  }
`;

export const Content = styled.div`
  max-width: 112.2rem;
  margin-inline: auto;
  padding-top: 2.6rem;
`;

export const Form = styled.form`
  width: 100%;

  > .form-group {
    width: 100%;

    display: grid;
    grid-template-columns: auto 1fr 36.4rem;
    gap: 3.2rem;

    .form-item {
      label {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-family: "Roboto", sans-serif;
        margin-bottom: 1.6rem;
        display: inline-block;
      }

      /* #options-view-button:focus + #select-button {
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
      } */
    }
  }
`;
