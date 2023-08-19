import {
  MapPin,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
  Minus,
  Plus,
  Trash,
} from "phosphor-react";
import cafe from "../../assets/arabe.png";
import {
  CheckoutContainer,
  ContainerAddress,
  ContainerPayment,
  ContentAddress,
  Inputs,
  InputsRow,
  Content,
  ContainerPaymentButtons,
  Buttons,
} from "./styles";
export function Checkout() {
  return (
    <CheckoutContainer>
      <Content>
        <h2> Complete seu pedido</h2>
        <ContainerAddress>
          <ContentAddress>
            <div>
              <MapPin size={20} color="#C47F17" />
              <span>Endereço de Entrega</span>
            </div>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </ContentAddress>

          <Inputs>
            <input type="text" placeholder="CEP" className="cep" />
            <input type="text" placeholder="Rua" className="street" />

            <InputsRow>
              <input type="text" placeholder="Número" className="number" />
              <input
                type="text"
                placeholder="Complemento"
                className="complement"
              />
            </InputsRow>
            <InputsRow>
              <input
                type="text"
                placeholder="Bairro"
                className="neighborhood"
              />
              <input type="text" placeholder="Cidade" className="city" />
              <input type="text" placeholder="UF" className="state" />
            </InputsRow>
          </Inputs>
        </ContainerAddress>

        <ContainerPayment>
          <div className="filho pagamento">
            <CurrencyDollar size={22} color="#8047F8" />
            <span>Pagamento</span>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
          <ContainerPaymentButtons>
            <Buttons>
              <CreditCard size={16} color="#8047F8" />
              cartão de crédito
            </Buttons>
            <Buttons>
              <Bank size={16} color="#8047F8" />
              cartão de débito
            </Buttons>
            <Buttons>
              <Money size={16} color="#8047F8" />
              dinheiro
            </Buttons>
          </ContainerPaymentButtons>
        </ContainerPayment>
      </Content>
      <div className="cafes-selecionados">
        <h2>Cafés selecionados</h2>
        <div className="div-cafe-tudo-linha">
          <img src={cafe} alt="" />
          <div className="column">
            <span>Expresso Tradicional</span>
            <div className="cafe-row">
              <span>
                <Minus color="#8047F8" size={14} weight="bold" />
                1
                <Plus color="#8047F8" size={14} weight="bold" />
              </span>
              <span>
                <Trash />
                remover
              </span>
            </div>
          </div>
          <hr />
          <div className="container-total-colum">
            <div className="container-row-total">
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>

            <div className="container-row-total">
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div className="container-row-total">
              <span>Total</span>
              <span>R$ 33,20</span>
            </div>
          </div>
          <button>confirmar pedido</button>
        </div>
      </div>
    </CheckoutContainer>
  );
}
