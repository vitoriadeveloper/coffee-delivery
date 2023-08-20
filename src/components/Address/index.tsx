import {
  MapPin,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from "phosphor-react";
import {
  Content,
  ContainerAddress,
  ContentAddress,
  IconAlignment,
  TextAlignment,
  Inputs,
  InputsRow,
  ContainerPayment,
  ContainerPaymentButtons,
  Buttons,
} from "./styles";

export function Address() {
  return (
    <Content>
      <h2> Complete seu pedido</h2>
      <ContainerAddress>
        <ContentAddress>
          <IconAlignment>
            <MapPin size={20} color="#C47F17" />
            <TextAlignment>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </TextAlignment>
          </IconAlignment>
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
            <input type="text" placeholder="Bairro" className="neighborhood" />
            <input type="text" placeholder="Cidade" className="city" />
            <input type="text" placeholder="UF" className="state" />
          </InputsRow>
        </Inputs>
      </ContainerAddress>
      <ContainerPayment>
        <IconAlignment>
          <CurrencyDollar size={22} color="#8047F8" />
          <TextAlignment>
            <span>Pagamento</span>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </TextAlignment>
        </IconAlignment>
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
  );
}
