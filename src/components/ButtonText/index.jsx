import { Container } from "./styles";
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export function ButtonText({ title, ...rest }) {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container onClick={handleBack} {...rest}>
      <BsChevronLeft size={22} /> {title}
    </Container>
  );
}
