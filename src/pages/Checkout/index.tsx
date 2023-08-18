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
export function Checkout() {
  return (
    <div className="row">
      <div className="column">
        <h2> Complete seu pedido</h2>
        <div className="container-endereço">
          <div className="filho-endereço">
            <MapPin />
            <span>Endereço de Entrega</span>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>

          <div className="container-inputs-column">
            <input type="text" placeholder="90250-440" />
            <input type="text" placeholder="Rua João Daniel Martinelli" />

            <div className="inputs-row">
              <input type="text" placeholder="102" />
              <input type="text" placeholder="Complemento" />
            </div>
            <div className="inputs-row">
              <input type="text" placeholder="Farrapos" />
              <input type="text" placeholder="Porto Alegre" />
              <input type="text" placeholder="R$" />
            </div>
          </div>
        </div>

        <div className="container-pagamento">
          <div className="filho pagamento">
            <CurrencyDollar />
            <span>Pagamento</span>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
          <div className="filho-meio-pagamento">
            <button>
              <CreditCard />
              cartão de crédito
            </button>
            <button>
              <Bank />
              cartão de débito
            </button>
            <button>
              <Money />
              dinheiro
            </button>
          </div>
        </div>
      </div>
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
    </div>
  );
}
