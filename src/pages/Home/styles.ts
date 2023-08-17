import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
  padding: 0rem 10rem;
`;

export const HomeContentColumn = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: ${(props) => props.theme["base-title"]};
    font-family: "Baloo 2", cursive;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
  }
  p {
    color: ${(props) => props.theme["base-subtitle"]};
    font-family: Roboto;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 130%;
    margin-bottom: 66px;
  }
`;
export const Blur = styled.img`
  position: absolute;
  opacity: 0.15;
`;

export const SectionContentRow = styled.div`
  display: flex;
  gap: 2.5rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25.5px;

  span {
    font-size: 1rem;
    color: ${(props) => props.theme["base-text"]};
    font-weight: 400;
    line-height: 130%;
  }
`;

export const SpanCart = styled.span`
  padding: 0.5rem;
  border-radius: 100%;
  background-color: ${(props) => props.theme["yellow-dark"]};
  margin-right: 0.75rem;
`;
export const SpanTimer = styled.span`
  padding: 0.5rem;
  border-radius: 100%;
  background-color: ${(props) => props.theme.yellow};
  margin-right: 0.75rem;
`;
export const SpanPackge = styled.span`
  padding: 0.5rem;
  border-radius: 100%;
  background-color: ${(props) => props.theme["base-text"]};
  margin-right: 0.75rem;
`;
export const SpanCoffee = styled.span`
  padding: 0.5rem;
  border-radius: 100%;
  background-color: ${(props) => props.theme.purple};
  margin-right: 0.75rem;
`;
