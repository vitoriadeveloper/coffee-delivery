import { ReactNode, useState } from "react";
import { createContext } from "use-context-selector";
import { CoffeesPropsType } from "../components/Coffee/components/AllCoffees";

export interface CoffeesDetails {
  id: number;
  img: string;
  type: string[];
  title: string;
  paragraph: string;
  price: number;
  quantity: number;
}

interface CoffeeContextType {
  coffeCart: CoffeesDetails[];
  addCoffeeToCart: (coffeeProps: CoffeesDetails) => void;
  decrementItemOnCart: (id: number) => void;
  handleRemoveItemsOnCart: (id: number) => void;
}

interface CoffeeProviderProps {
  children: ReactNode;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

export function CoffeeProvider({ children }: CoffeeProviderProps) {
  const [coffeCart, SetCoffeeCart] = useState<CoffeesDetails[]>([]);

  function addCoffeeToCart(coffeeProps: CoffeesPropsType) {
    const currentyCoffeeIndex = coffeCart.findIndex(
      (coffee) => coffee.id === coffeeProps.id,
    );

    // Se existir café no carrinho, aumente a quantidade para mais 1
    if (currentyCoffeeIndex >= 0) {
      // pega o que ja tem no carrinho e adiciona
      SetCoffeeCart((state) =>
        state.map((coffee, index) =>
          index === currentyCoffeeIndex
            ? { ...coffeeProps, quantity: coffee.quantity + 1 }
            : coffee,
        ),
      );
    } else {
      SetCoffeeCart((state) => [...state, { ...coffeeProps, quantity: 1 }]);
    }
  }
  // para diminuir item

  function decrementItemOnCart(id: number) {
    const currentyCoffeeIndex = coffeCart.findIndex(
      (coffee) => coffee.id === id,
    );
    if (currentyCoffeeIndex >= 0) {
      // pega o que ja tem no carrinho e adiciona
      SetCoffeeCart(
        (state) =>
          state
            .map((coffee, index) =>
              index === currentyCoffeeIndex
                ? { ...coffee, quantity: coffee.quantity - 1 }
                : coffee,
            )
            .filter((coffee) => coffee.quantity > 0), // para não diminuir negativo
      );
    }
  }
  function handleRemoveItemsOnCart(id: number) {
    const currentyCoffeeIndex = coffeCart.findIndex(
      (coffee) => coffee.id === id,
    );

    if (currentyCoffeeIndex >= 0) {
      SetCoffeeCart((state) =>
        state.filter((_, index) => index !== currentyCoffeeIndex),
      );
    }
  }
  return (
    <CoffeeContext.Provider
      value={{
        decrementItemOnCart,
        addCoffeeToCart,
        coffeCart,
        handleRemoveItemsOnCart,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
