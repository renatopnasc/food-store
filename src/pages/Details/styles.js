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

    .food-container {
      display: flex;
      align-items: center;
      gap: 2.6rem;

      &::-webkit-scrollbar {
        background: none;
      }
    }
  }
`;

export const Content = styled.div`
  max-width: 112.2rem;
  grid-area: content;
  margin: 0 auto;
  padding-top: 2.6rem;

  > section {
    display: flex;
    align-items: center;
    gap: 4.6rem;

    margin-top: 4.2rem;

    img {
      max-width: 38.9rem;
      height: 38.9rem;
      flex: 1;
      object-fit: cover;
      border-radius: 50%;
    }

    .description {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      display: flex;
      flex-direction: column;
      gap: 2.4rem;
      max-width: 68.7rem;
      flex: 1;

      h1 {
        font-size: 4rem;
        font-weight: 500;
        line-height: 140%;
      }

      p {
        font-size: 2.4rem;
        line-height: 140%;
        font-weight: 400;
      }

      .tags-container {
        display: flex;
        align-items: center;
        gap: 1.2rem;
        flex-wrap: wrap;
      }

      .add-item-container {
        display: flex;
        align-items: center;
        gap: 3.3rem;
        max-width: 29.4rem;

        .counter {
          display: flex;
          align-items: center;
          gap: 1.4rem;

          p {
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            font-size: 2rem;
            line-height: 160%;
            font-weight: bold;
            font-family: "Roboto", sans-serif;
          }

          button {
            border: none;
            background: none;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            display: flex;
          }
        }
      }
    }
  }
`;
