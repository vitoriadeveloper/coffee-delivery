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
import { CoffeeContext } from "../../../../contexts/CoffeeContext";
import { useContext } from "use-context-selector";

export interface CoffeesPropsType {
  id: number;
  img: string;
  type: string[];
  title: string;
  paragraph: string;
  price: number;
  amount?: number;
}

interface CoffessProps {
  coffeeProps: CoffeesPropsType;
}
export function AllCoffees({ coffeeProps }: CoffessProps) {
  const { img, paragraph, price, title, type, id } = coffeeProps;
  const formattedPrice = price.toFixed(2).replace(".", ",");
  const { quantities, setQuantity } = useContext(CoffeeContext);
  const quantity = quantities[id] || 0;

  function handleQuantityIncrement() {
    setQuantity(id, quantity + 1);
  }
  function handleQuantityDecrement() {
    if (quantity > 0) {
      setQuantity(id, quantity - 1);
    }
  }

  return (
    <CoffeeContent>
      <img src={img} alt="" />

      <div className="row">
        {type.map((tag) => (
          <div key={tag} className="tags">
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
              <Minus
                color="#8047F8"
                size={14}
                weight="bold"
                onClick={handleQuantityDecrement}
              />
            </div>
            {quantity}
            <span className="plus">
              <Plus
                color="#8047F8"
                size={14}
                weight="bold"
                onClick={handleQuantityIncrement}
              />
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
