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
  margin-inline: auto;
  padding-top: 2.6rem;

  display: flex;
  flex-direction: column;
  gap: 4.8rem;

  > img {
    width: 100%;
  }
`;
