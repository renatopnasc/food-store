import { Container } from "./style";
import { RxShare2 } from "react-icons/rx";

export function InputFile() {
  return (
    <Container>
      <label id="file-label" htmlFor="file">
        <RxShare2 size={24} /> Selecione Imagem
        <input type="file" name="file" id="file" />
      </label>
    </Container>
  );
}
