import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  padding: 2rem 10rem;
  justify-content: space-between;

  h2 {
    font-family: "Baloo 2";
    font-size: 1.125rem;
    font-weight: 700;
  }
`;

export const CoffeeContainer = styled.div`
  h2 {
    margin-bottom: 15px;
  }
`;
export const CoffeeChosen = styled.div`
  width: 448px;
  max-width: 100%;
  font-family: "Roboto";
  padding: 2.5rem;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px 44px;

  display: flex;
  gap: 24px;
  flex-direction: column;
`;

export const CoffeeContent = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    width: 64px;
  }

  span {
    font-weight: 600;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const CoffeeDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  p {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1rem;
    font-weight: 400;
  }
`;
export const CoffeeAmount = styled.div`
  display: flex;
  gap: 8px;

  button {
    font-family: "Roboto";
    font-size: 0.75rem;
    text-transform: uppercase;
    border: none;
    border-radius: 6px;
    padding: 8px;
    background-color: ${(props) => props.theme["base-button"]};
  }
`;

export const ButtonAmount = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${(props) => props.theme["base-title"]};
`;

export const ButtonTrash = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${(props) => props.theme["base-text"]};
  font-weight: 500;
`;

export const Hr = styled.hr`
  color: ${(props) => props.theme["base-button"]};
  opacity: 0.2;
`;

export const ContainerTotalPayment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`;

export const TotalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${(props) => props.theme["base-text"]};
  font-size: 0.875rem;
`;

export const Total = styled.span`
  color: ${(props) => props.theme["base-subtitle"]};
  font-size: 1.25rem;
  font-weight: 700;
`;
export const BtnSucess = styled.button`
  font-family: "Roboto";
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 8px;
  border: none;
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 6px;
  cursor: pointer;
`;
