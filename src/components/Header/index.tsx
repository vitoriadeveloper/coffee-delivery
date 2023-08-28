import logo from "../../assets/icons/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { Outlet, Link } from "react-router-dom";
import {
  HeaderContainer,
  HeaderContent,
  HeaderLocation,
  HeaderCart,
} from "./styles";
import { useContext } from "use-context-selector";
import { CoffeeContext } from "../../contexts/CoffeeContext";

export function Header() {
  const { coffeCart } = useContext(CoffeeContext);
  return (
    <div>
      <HeaderContainer>
        <Link to="/">
          <img src={logo} alt="Logo café" />
        </Link>
        <HeaderContent>
          <HeaderLocation>
            <MapPin color="#8047F8" size={20} weight="fill" />
            Salvador, BA
          </HeaderLocation>
          <HeaderCart>
            <Link to="/checkout">
              {coffeCart.map(
                (coffee) =>
                  coffee.quantity > 0 && (
                    <span className="cart-badge" key={coffee.id}>
                      {coffee.quantity}
                    </span>
                  ),
              )}
              <ShoppingCart color="#C47F17" size={20} weight="fill" />
            </Link>
          </HeaderCart>
        </HeaderContent>
      </HeaderContainer>
      <Outlet />
    </div>
  );
}
