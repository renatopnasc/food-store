import { Container } from "./style";

export function InputSection({ children, label }) {
  return (
    <Container>
      <div>
        <label htmlFor="options-view-button">{label}</label>
        <input type="checkbox" id="options-view-button" />
      </div>
      {children}
    </Container>
  );
}
