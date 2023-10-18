import { Container } from "./styles";

export function ButtonHeader({ icon: Icon, title, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon size={26} />}
      {title}
    </Container>
  );
}
