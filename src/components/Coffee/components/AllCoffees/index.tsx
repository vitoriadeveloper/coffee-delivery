import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import {
  CoffeeContent,
  CoffeeType,
  ContentPrice,
  Price,
  ContentAmount,
  AmountCart,
  Cart,
} from "./styles";

export interface CoffeesPropsType {
  id: number;
  img: string;
  type: string[];
  title: string;
  paragraph: string;
  price: number;
  amount: number;
}

interface CoffessProps {
  coffeeProps: CoffeesPropsType;
}
export function AllCoffees({ coffeeProps }: CoffessProps) {
  const { id, amount, img, paragraph, price, title, type } = coffeeProps;
  const formattedPrice = price.toFixed(2).replace(".", ",");
  return (
    <CoffeeContent>
      <img src={img} alt="" />

      <div className="row">
        {type.map((tag) => (
          <div key={id} className="tags">
            <CoffeeType>{tag} </CoffeeType>
          </div>
        ))}
      </div>
      <h2>{title}</h2>
      <p>{paragraph}</p>
      <ContentPrice>
        <Price>
          <span>
            R$ <strong>{formattedPrice}</strong>
          </span>
        </Price>
        <ContentAmount>
          <AmountCart>
            <div className="minus">
              <Minus color="#8047F8" size={14} weight="bold" />
            </div>
            {amount}
            <span className="plus">
              <Plus color="#8047F8" size={14} weight="bold" />
            </span>
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
}
