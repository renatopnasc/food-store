import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";
import { Counter } from "../../components/Counter";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { api } from "../../services/api";

export function Details() {
  const [amount, setAmout] = useState(0);
  const [data, setData] = useState(null);

  const navigate = useNavigate();
  const params = useParams();

  function handleDecrement(event) {
    if (amount <= 0) return;

    setAmout((state) => state - 1);
  }

  function handleIncrement(event) {
    setAmout((state) => state + 1);
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);
    }

    fetchDish();
  }, []);

  return (
    <Container>
      <Header />

      {data && (
        <main>
          <Content>
            <ButtonText title="voltar" />

            <section>
              <img src={data.photo} alt={`Imagem de um ${data.name}`} />

              <div className="description">
                <h1>{data.name}</h1>

                <p>{data.description}</p>

                <div className="tags-container">
                  {/* <Tag title="alface" />
                  <Tag title="cebola" />
                  <Tag title="pão naan" />
                  <Tag title="pepino" />
                  <Tag title="rabanete" />
                  <Tag title="tomate" /> */}
                  {data.ingredients.map((ingredient) => (
                    <Tag key={ingredient.id} title={ingredient.name} />
                  ))}
                </div>

                <div className="add-item-container">
                  <Counter
                    amount={amount}
                    decremet={handleDecrement}
                    increment={handleIncrement}
                  />

                  <Button title={`incluir ∙ ${data.price}`} />
                </div>
              </div>
            </section>
          </Content>
        </main>
      )}
    </Container>
  );
}
