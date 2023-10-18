import { Container } from "./style";
import { RxShare2 } from "react-icons/rx";

export function InputFile({ label }) {
  return (
    <Container>
      <p>{label}</p>
      <label htmlFor="file">
        <RxShare2 size={24} /> Selecione Imagem
        <input type="file" name="file" id="file" />
      </label>
    </Container>
  );
}
