import { Container, Form } from "./styles";
import logoSvg from "../../assets/svg/logo.svg";
import { InputForm } from "../../components/InputForm";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SignIn() {
  const { signIn, errorMessage } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <div>
        <img src={logoSvg} alt="Logo da empresa" />
      </div>

      <Form>
        <p>Faça login</p>

        <InputForm
          label="Email"
          border
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="email"
          onChange={(event) => setEmail(event.target.value)}
        />

        <InputForm
          label="Senha"
          border
          placeholder="No mínimo 6 caracteres"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />

        <span>{errorMessage ? errorMessage : ""}</span>

        <Button type="button" onClick={handleSignIn} title="Entrar" />

        <Link to="/signup">Criar uma conta</Link>
      </Form>
    </Container>
  );
}
