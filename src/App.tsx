import React from "react";
import "./App.css";
import "./base.sass";
import CssBaseline from "@material-ui/core/CssBaseline";
import FrontPage from "./frontpage";
import { ThemeProvider } from "styled-components";

export const Theme = {
  colors: {
    charcoal: "#333",
    blueBlack: "#66778d",
    gray100: "#7E8C9F",
    green100: "#25daa5"
  },
  fontFamilies: {
    serif: "'Playfair Display', serif"
  }
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <CssBaseline />
        <FrontPage />
      </div>
    </ThemeProvider>
  );
};

export default App;
