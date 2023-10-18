import { Container, Content, Form } from "./style";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";

import { InputFile } from "../../components/InputFile";

export function Add() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="voltar" />

          <Section title="Adicionar prato">
            <Form>
              <div>
                <InputFile label="Imagem do Prato" />
              </div>
            </Form>
          </Section>
        </Content>
      </main>
    </Container>
  );
}
