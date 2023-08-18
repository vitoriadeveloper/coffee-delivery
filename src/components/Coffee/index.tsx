import CafeExpresso from "../../assets/expresso.png";
import Americano from "../../assets/americano.png";
import Cremoso from "../../assets/expresso_cremoso.png";
import Gelado from "../../assets/cafe_gelado.png";
import CafeComLeite from "../../assets/cafe_com_leite.png";
import Latte from "../../assets/latte.png";
import Capuccino from "../../assets/capuccino.png";
import Macchiato from "../../assets/macchiato.png";
import Mocaccino from "../../assets/mochaccino.png";
import ChocolateQuente from "../../assets/chocolate_quente.png";
import Cubano from "../../assets/cubano.png";
import Havaiano from "../../assets/havaiano.png";
import Arabe from "../../assets/arabe.png";
import Irlandes from "../../assets/irlandes.png";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import {
  CoffeeContainer,
  CoffeeContent,
  CoffeeType,
  ContentAmount,
  ContentPrice,
  Price,
  AmountCart,
  Cart,
  DivRow,
} from "./styles";

const array = [
  {
    img: CafeExpresso,
    type: "Tradicional",
    title: "Expresso Tradicional",
    paragraph: "O tradicional café feito com água quente e grãos moídos",
  },
  {
    img: Americano,
    type: "Tradicional",
    title: "Expresso Americano",
    paragraph: "Expresso diluído, menos intenso que o tradicional",
  },
  {
    img: Cremoso,
    type: "Tradicional",
    title: "Expresso Cremoso",
    paragraph: "Café expresso tradicional com espuma cremosa",
  },
  {
    img: Gelado,
    type: ["Tradicional", "gelado"],
    title: "Expresso Gelado",
    paragraph: "Bebida preparada com café expresso e cubos de gelo",
  },
  {
    img: CafeComLeite,
    type: ["Tradicional", " com leite"],
    title: "Café com Leite",
    paragraph: "Meio a meio de expresso tradicional com leite vaporizado",
  },
  {
    img: Latte,
    type: ["Tradicional", " com leite"],
    title: "Latte",
    paragraph:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
  },
  {
    img: Capuccino,
    type: ["Tradicional", " com leite"],
    title: "Capuccino",
    paragraph:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
  },
  {
    img: Macchiato,
    type: ["Tradicional", " com leite"],
    title: "Macchiato",
    paragraph: "Café expresso misturado com um pouco de leite quente e espuma",
  },
  {
    img: Mocaccino,
    type: ["Tradicional", " com leite"],
    title: "Mocaccino",
    paragraph: "Café expresso com calda de chocolate, pouco leite e espuma",
  },
  {
    img: ChocolateQuente,
    type: ["especial", " com leite"],
    title: "Chocolate Quente",
    paragraph: "Bebida feita com chocolate dissolvido no leite quente e café",
  },
  {
    img: Cubano,
    type: ["especial", " alcoólico", " gelado"],
    title: "Cubano",
    paragraph:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
  },
  {
    img: Havaiano,
    type: "especial",
    title: "Havaiano",
    paragraph: "Bebida adocicada preparada com café e leite de coco",
  },
  {
    img: Arabe,
    type: "especial",
    title: "Árabe",
    paragraph: "Bebida preparada com grãos de café árabe e especiarias",
  },
  {
    img: Irlandes,
    type: ["especial", " alcoólico"],
    title: "Irlandês",
    paragraph: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
  },
];

export function Coffees() {
  return (
    <CoffeeContainer>
      <h1>Nossos cafés</h1>
      <DivRow>
        {array.map((coffee, index) => {
          return (
            <CoffeeContent key={index}>
              <img src={coffee.img} alt="" />
              <CoffeeType>{coffee.type}</CoffeeType>
              <h2>{coffee.title}</h2>
              <p>{coffee.paragraph}</p>
              <ContentPrice>
                <Price>
                  <span>
                    R$ <strong>9,90</strong>
                  </span>
                </Price>
                <ContentAmount>
                  <AmountCart>
                    <Minus color="#8047F8" size={14} weight="bold" />
                    1
                    <Plus color="#8047F8" size={14} weight="bold" />
                  </AmountCart>
                  <Cart>
                    <Link to="/checkout">
                      <ShoppingCart color="white" weight="fill" size={20} />
                    </Link>
                  </Cart>
                </ContentAmount>
              </ContentPrice>
            </CoffeeContent>
          );
        })}
      </DivRow>
    </CoffeeContainer>
  );
}
