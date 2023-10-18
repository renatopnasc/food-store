import styled from "styled-components";

export const Container = styled.button`
  background: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-size: 2.4rem;
  font-weight: bold;
  line-height: 140%;
  border: none;
  margin-bottom: 2.4rem;

  display: flex;
  align-items: center;
`;
