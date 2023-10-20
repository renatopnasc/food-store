import { Container } from "./style";

export function Input({ placeholder, ...rest }) {
  return (
    <Container>
      <input {...rest} type="text" placeholder={placeholder} />
    </Container>
  );
}
