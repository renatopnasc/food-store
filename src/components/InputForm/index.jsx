import { Container } from "./styles";

export function InputForm({ border = false, label, ...rest }) {
  return (
    <Container $border={border.toString()}>
      <label>{label}</label>
      <input {...rest} />
    </Container>
  );
}
