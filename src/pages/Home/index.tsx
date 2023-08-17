import bigCoffee from "../../assets/Imagem.png";
import blur from "../../assets/icons/blur.svg";
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import {
  Blur,
  HomeContainer,
  HomeContentColumn,
  SectionContentRow,
  Content,
  SpanCart,
  SpanCoffee,
  SpanPackge,
  SpanTimer,
} from "./styles";
export function Home() {
  return (
    <HomeContainer>
      <HomeContentColumn>
        <Blur src={blur} alt="" />
        <h1>
          Encontre o café perfeito <br />
          para qualquer hora do dia
        </h1>

        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a <br />
          qualquer hora
        </p>

        <SectionContentRow>
          <Content>
            <span>
              <SpanCart>
                <ShoppingCart size={16} weight="fill" color="white" />
              </SpanCart>
              Compra simples e segura
            </span>
            <span>
              <SpanTimer>
                <Timer size={16} weight="fill" color="white" />
              </SpanTimer>
              Entrega rápida e rastreada
            </span>
          </Content>
          <Content>
            <Blur src={blur} alt="" />
            <span>
              <SpanPackge>
                <Package size={16} weight="fill" color="white" />
              </SpanPackge>
              Embalagem mantém o café intacto
            </span>
            <span>
              <SpanCoffee>
                <Coffee size={16} weight="fill" color="white" />
              </SpanCoffee>
              O café chega fresquinho até você
            </span>
          </Content>
        </SectionContentRow>
      </HomeContentColumn>
      <Blur src={blur} alt="" />
      <img src={bigCoffee} alt="" />
      <Blur src={blur} alt="" />
    </HomeContainer>
  );
}
