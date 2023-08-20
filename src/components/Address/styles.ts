import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const ContainerAddress = styled.div`
  width: 640px;
  max-width: 100%;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  padding: 2.5rem;
`;

export const ContentAddress = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const IconAlignment = styled.div`
  display: flex;
  gap: 8px;
`;
export const TextAlignment = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 0.875rem;
  gap: 1rem;
  input {
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme["base-button"]};
    background-color: ${(props) => props.theme["base-input"]};
    padding: 0.75rem;
  }

  input::placeholder {
    font-family: "Roboto";
    color: ${(props) => props.theme["base-label"]};
  }

  .cep .number .neighborhood {
    width: 200px;
    max-width: 100%;
  }

  .street {
    width: 560px;
    max-width: 100%;
  }
  .complement {
    width: 348px;
    max-width: 100%;
  }
  .city {
    width: 272px;
    max-width: 100%;
  }

  .state {
    width: 60px;
    max-width: 100%;
  }
`;

export const InputsRow = styled.div`
  display: flex;
  gap: 1.75rem;
`;

export const ContainerPayment = styled.div`
  width: 640px;
  max-width: 100%;
  background-color: ${(props) => props.theme["base-card"]};
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-self: stretch;
  border-radius: 6px;
`;

export const ContainerPaymentButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  :hover {
    background-color: ${(props) => props.theme["base-hover"]};
    color: ${(props) => props.theme["base-subtitle"]};
  }
  :active {
    background-color: ${(props) => props.theme["purple-light"]};
    border: 1px solid ${(props) => props.theme.purple};
  }
`;

export const Buttons = styled.button`
  font-size: 0.75rem;
  text-transform: uppercase;
  font-family: Roboto;
  font-weight: 500;
  display: flex;
  gap: 12px;
  color: ${(props) => props.theme["base-text"]};
  padding: 1rem;
  border-radius: 6px;
  border: none;
  background-color: ${(props) => props.theme["base-button"]};
  cursor: pointer;
`;