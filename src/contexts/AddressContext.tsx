import { ReactNode, useState } from "react";
import { createContext, useContext } from "use-context-selector";

interface ChildrenType {
  children: ReactNode;
}

interface AddressData {
  logradouro?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
}

interface AddressContextType {
  address: AddressData | null;
  setAddressData: (data: AddressData | null) => void;
}

export const AddressContext = createContext({} as AddressContextType);

export function useAddress() {
  return useContext(AddressContext);
}

export function AddressProvider({ children }: ChildrenType) {
  const [address, setAddress] = useState<AddressData | null>(null);

  const setAddressData = (data: AddressData | null) => {
    setAddress(data);
  };

  return (
    <AddressContext.Provider value={{ setAddressData, address }}>
      {children}
    </AddressContext.Provider>
  );
}
