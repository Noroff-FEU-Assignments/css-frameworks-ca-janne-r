import React from "react";
import { ThemeProvider } from "styled-components";
import Navigation from "./components/Navigation";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}

export default App;
