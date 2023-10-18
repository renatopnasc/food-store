import { Container, Form } from "./styles";
import logoSvg from "../../assets/svg/logo.svg";
import { InputForm } from "../../components/InputForm";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignUp() {
    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário criado com sucesso");

        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar");
        }
      });
  }

  return (
    <Container>
      <div>
        <img src={logoSvg} alt="Logo da empresa" />
      </div>

      <Form>
        <p>Crie sua conta</p>

        <InputForm
          label="Seu nome"
          type="text"
          placeholder="Exemplo: Maria da Silva"
          onChange={(event) => setName(event.target.value)}
        />

        <InputForm
          label="Email"
          type="email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          onChange={(event) => setEmail(event.target.value)}
          requer
        />

        <InputForm
          label="Senha"
          type="password"
          placeholder="No mínimo 6 caracteres"
          onChange={(event) => setPassword(event.target.value)}
        />

        <Button type="button" onClick={handleSignUp} title="Criar conta" />

        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </Container>
  );
}
