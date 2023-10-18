import { Container } from "./styles";

export function Button({ title, onClick, ...rest }) {
  return (
    <Container {...rest} onClick={onClick}>
      {title}
    </Container>
  );
}
