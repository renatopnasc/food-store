import { Container } from "./styles";
import { Button } from "../Button";
import { useState } from "react";
import { Counter } from "../Counter";

import { AiOutlineHeart } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";

export function CardItem({ data, onClick }) {
  const [amount, setAmount] = useState(0);
  const { user } = useAuth();

  function handleIncrement() {
    setAmount((state) => state + 1);
  }

  function handleDecrement() {
    setAmount((state) => {
      if (state === 0) return 0;

      return state - 1;
    });
  }

  return (
    <Container>
      <button>
        {user.role === USER_ROLE.ADMIN ? (
          <BsPencil size={24} />
        ) : (
          <AiOutlineHeart size={24} />
        )}
      </button>

      <img
        onClick={onClick}
        src={data.photo}
        alt={`Imagem de um ${data.name}`}
      />

      <h1>{data.name}</h1>

      <p className="food-description">{data.description}</p>

      <p className="food-price">R$ {data.price}</p>

      {user.role !== USER_ROLE.ADMIN && (
        <div>
          <Counter
            amount={amount}
            decremet={handleDecrement}
            increment={handleIncrement}
          />
          <Button title="incluir" />
        </div>
      )}
    </Container>
  );
}
