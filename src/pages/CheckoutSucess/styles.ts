import styled from "styled-components";

export const ContainerSucess = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;
`;

export const SucessTitle = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-family: "Baloo 2";
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme["yellow-dark"]};
  }
  p {
    font-family: "Roboto";
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.25rem;
    font-weight: 400;
    margin-bottom: 2.5rem;
  }
`;

export const SucessContent = styled.div`
  width: 526px;
  max-width: 100%;
  padding: 40px;
  background:
    linear-gradient(#fafafa, #fafafa) padding-box,
    linear-gradient(to right, #c47f17, #4b2995) border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  span {
    font-family: "Roboto";
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const IconAlignment = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  .map {
    display: flex;
    background-color: ${(props) => props.theme.purple};
    padding: 8px;
    border-radius: 100%;
  }

  .timer {
    display: flex;
    background-color: ${(props) => props.theme.yellow};
    padding: 8px;
    border-radius: 100%;
  }
  .dolar {
    display: flex;
    background-color: ${(props) => props.theme["yellow-dark"]};
    padding: 8px;
    border-radius: 100%;
  }
`;

export const IconContent = styled.div`
  display: flex;
  flex-direction: column;
`;
