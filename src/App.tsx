import React from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import usePersistedState from "./Utils/userPersistedState";

import { ThemeProvider, DefaultTheme } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import BuscadorCep from "./components/BuscadorCep";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <BuscadorCep />
      </div>
    </ThemeProvider>
  );
}

export default App;
