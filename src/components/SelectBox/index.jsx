import { Container } from "./style";

import { BsChevronCompactDown } from "react-icons/bs";

import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function SelectBox({
  handleOptionsVisible,
  handleOption,
  optionsVisible,
  option,
}) {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    async function fetchCategories() {
      const response = await api.get("categories");
      const data = response.data;

      setCategories(data);
    }

    fetchCategories();
  }, []);

  return (
    <Container>
      <div id="category-select">
        <label htmlFor="options-view-button">Categoria</label>
        <input
          type="checkbox"
          id="options-view-button"
          onClick={handleOptionsVisible}
        />

        <div id="select-button">
          <div id="select-value">
            {option ? option : "Selecione a categoria"}
          </div>

          <div id="chevrons">
            <BsChevronCompactDown size={24} />
          </div>
        </div>
      </div>

      <ul id="options" style={{ display: optionsVisible ? "block" : "none" }}>
        {categories &&
          categories.map((category) => (
            <li
              className="option"
              onClick={(event) => {
                handleOption(event);
                handleOptionsVisible();
              }}
              key={category.id}
            >
              <input
                key={category.id}
                type="radio"
                name="category"
                value={category.name}
                data-label="Padaria"
              />
              <span className="label">{category.name}</span>
            </li>
          ))}
      </ul>
    </Container>
  );
}
