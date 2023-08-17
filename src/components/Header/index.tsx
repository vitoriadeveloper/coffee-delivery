import logo from "../../assets/icons/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import {
  HeaderContainer,
  HeaderContent,
  HeaderLocation,
  HeaderCart,
} from "./styles";
export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo café" />
      <HeaderContent>
        <HeaderLocation>
          <MapPin color="#8047F8" size={20} weight="fill" />
          Salvador, BA
        </HeaderLocation>
        <HeaderCart>
          <ShoppingCart color="#C47F17" size={20} weight="fill" />
        </HeaderCart>
      </HeaderContent>
    </HeaderContainer>
  );
}
