import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { CardItem } from "../../components/CardItem";

import bannerSvg from "../../assets/svg/homeBanner.svg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

export function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 3.5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const [dishes, setDishes] = useState([]);

  const navigate = useNavigate();

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchCategories() {
      const response = await api.get("/categories");
      setCategories(response.data);
    }

    fetchCategories();
  }, []);

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`dishes?name=${search}`);
      setDishes(response.data);
    }

    fetchDishes();
  }, [search]);

  return (
    <Container>
      <Header onChange={handleSearch} />

      <main>
        <Content>
          <img src={bannerSvg} alt="" />

          {categories &&
            categories.map((category) => (
              <Section key={category.id} title={category.name}>
                <Carousel responsive={responsive}>
                  {dishes &&
                    dishes.map(
                      (dish) =>
                        category.id === dish.category_id && (
                          <CardItem
                            key={dish.id}
                            data={dish}
                            onClick={() => handleDetails(dish.id)}
                          />
                        )
                    )}
                </Carousel>
              </Section>
            ))}
        </Content>
      </main>
    </Container>
  );
}
