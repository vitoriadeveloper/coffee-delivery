import { Minus, Plus, Trash } from "phosphor-react";
import cafe from "../../assets/arabe.png";
import {
  BtnSucess,
  ButtonAmount,
  ButtonTrash,
  CheckoutContainer,
  CoffeeAmount,
  CoffeeChosen,
  CoffeeContainer,
  CoffeeContent,
  CoffeeDescription,
  ContainerTotalPayment,
  Hr,
  Total,
  TotalContent,
  BtnContainerConfirm,
} from "./styles";
import { Address } from "../../components/Address";
export function Checkout() {
  return (
    <CheckoutContainer>
      <Address />
      <CoffeeContainer>
        <h2>Cafés selecionados</h2>
        <CoffeeChosen>
          <CoffeeContent>
            <img src={cafe} alt="" />
            <CoffeeDescription>
              <p>Expresso Tradicional</p>
              <CoffeeAmount>
                <ButtonAmount>
                  <Minus color="#8047F8" size={14} weight="bold" />
                  1
                  <Plus color="#8047F8" size={14} weight="bold" />
                </ButtonAmount>
                <ButtonTrash>
                  <Trash size={16} color="#8047F8" />
                  remover
                </ButtonTrash>
              </CoffeeAmount>
            </CoffeeDescription>
            <span>R$ 9,90</span>
          </CoffeeContent>
          <Hr />
          <ContainerTotalPayment>
            <TotalContent>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </TotalContent>

            <TotalContent>
              <span>Entrega</span>
              <span>R$ 29,70</span>
            </TotalContent>
            <TotalContent>
              <Total>Total</Total>
              <Total>R$ 33,20</Total>
            </TotalContent>
          </ContainerTotalPayment>
          <BtnContainerConfirm>
            <BtnSucess type="submit">confirmar pedido</BtnSucess>
          </BtnContainerConfirm>
        </CoffeeChosen>
      </CoffeeContainer>
    </CheckoutContainer>
  );
}
