import { Container, Content, Form } from "./style";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { Input } from "../../components/Input";

import { InputFile } from "../../components/InputFile";

import { SelectBox } from "../../components/SelectBox";
import { useState } from "react";

export function Add() {
  const [dishName, setDishName] = useState("");

  const [option, setOption] = useState("");
  const [optionsVisible, setOptionsVisible] = useState(false);

  function handleOptionsVisible() {
    setOptionsVisible((prevState) => !prevState);
  }

  function handleOption(event) {
    setOption(event.target.value);
  }

  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="voltar" />

          <Section title="Adicionar prato">
            <Form>
              <div className="form-group">
                <div className="form-item">
                  <label htmlFor="file">Imagem do prato</label>
                  <InputFile />
                </div>

                <div className="form-item">
                  <label htmlFor="name">Nome</label>
                  <Input
                    onChange={(event) => setDishName(event.target.value)}
                    id="name"
                    placeholder="Ex.: Salada de frutas"
                  />
                </div>

                <div className="form-item">
                  <SelectBox
                    optionsVisible={optionsVisible}
                    option={option}
                    handleOptionsVisible={handleOptionsVisible}
                    handleOption={handleOption}
                  />
                </div>
              </div>
            </Form>
          </Section>
        </Content>
      </main>
    </Container>
  );
}
