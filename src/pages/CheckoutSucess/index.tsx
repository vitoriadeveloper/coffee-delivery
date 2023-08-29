import { MapPin, Timer, CurrencyDollar } from "phosphor-react";
import illustration from "../../assets/Illustration.png";
import {
  ContainerSucess,
  IconAlignment,
  IconContent,
  SucessContent,
  SucessTitle,
} from "./styles";
import { useContext } from "use-context-selector";
import { AddressContext } from "../../contexts/AddressContext";

export function Sucess() {
  const { address } = useContext(AddressContext);
  return (
    <ContainerSucess>
      <SucessTitle>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <SucessContent>
          <IconAlignment>
            <span className="map">
              <MapPin size={16} color="white" weight="fill" />
            </span>
            <IconContent>
              <span>
                Entrega em{" "}
                <strong>
                  {address ? `${address.logradouro},` : "Carregando..."}
                </strong>
              </span>
              <span>
                {address?.bairro} - {address?.localidade}, {address?.uf}
              </span>
            </IconContent>
          </IconAlignment>
          <IconAlignment>
            <span className="timer">
              <Timer size={16} color="white" weight="fill" />
            </span>
            <IconContent>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min </strong>
            </IconContent>
          </IconAlignment>
          <IconAlignment>
            <span className="dolar">
              <CurrencyDollar size={16} color="white" weight="fill" />
            </span>
            <IconContent>
              <span>Pagamento na entrega</span>
              <strong>Cartão de Crédito </strong>
            </IconContent>
          </IconAlignment>
        </SucessContent>
      </SucessTitle>
      <img src={illustration} alt="" />
    </ContainerSucess>
  );
}
