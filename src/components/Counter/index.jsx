import { Container } from "./styles";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export function Counter({ decremet, increment, amount }) {
  return (
    <Container>
      <button>
        <AiOutlineMinus size={24} onClick={decremet} />
      </button>

      <p>{amount}</p>

      <button>
        <AiOutlinePlus size={24} onClick={increment} />
      </button>
    </Container>
  );
}
