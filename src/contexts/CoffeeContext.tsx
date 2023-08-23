import { ReactNode, useState } from "react";
import { createContext } from "use-context-selector";

interface Coffees {
  id: number;
  img: string;
  type: string[];
  title: string;
  paragraph: string;
  price: number;
  amount?: number;
}

interface CoffeeContextType {
  coffee: Coffees[];
  quantities: { [key: number]: number }; // Um objeto para rastrear as quantidades por id
  setQuantity: (id: number, quantity: number) => void; // Função para definir a quantidade de um item
}

interface CoffeeProviderProps {
  children: ReactNode;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

export function CoffeeProvider({ children }: CoffeeProviderProps) {
  const [coffee, setCoffee] = useState<Coffees[]>([]);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  // Função para definir a quantidade de um item com base no id
  const setQuantity = (id: number, quantity: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: quantity,
    }));
  };

  return (
    <CoffeeContext.Provider value={{ coffee, quantities, setQuantity }}>
      {children}
    </CoffeeContext.Provider>
  );
}
