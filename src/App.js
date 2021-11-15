import React from "react";
import { ThemeProvider } from "styled-components";
import Navigation from "./components/Navigation";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation />
    </ThemeProvider>
  );
}

export default App;
