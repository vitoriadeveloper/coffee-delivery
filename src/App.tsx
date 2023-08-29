import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { CoffeeProvider } from "./contexts/CoffeeContext";
import { AddressProvider } from "./contexts/AddressContext";
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeProvider>
          <AddressProvider>
            <Router />
          </AddressProvider>
        </CoffeeProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
