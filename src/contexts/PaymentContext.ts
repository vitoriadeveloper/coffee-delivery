// import { ReactNode, useState } from "react";
// import { createContext, useContext } from "use-context-selector";

// interface ChildrenType {
//   children: ReactNode;
// }
// interface PaymentContextType {
//     selectedPayment: string;
//     handlePaymentClick: (paymentType: string)=> void;
// }
// export const MetodPaymentContext = createContext({} as PaymentContextType);

// export function usePayment() {
//   return useContext(MetodPaymentContext);
// }

// export function PaymentProvider({ children }: ChildrenType) {

//   return (
//     <MetodPaymentContext.Provider value={{ selectedPayment, handlePaymentClick }}>
//       {children}
//     </MetodPaymentContext.Provider>
//   );
// }
