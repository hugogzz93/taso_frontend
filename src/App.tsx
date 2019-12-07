import React from "react";
import "./App.css";
import "./base.sass";
import CssBaseline from "@material-ui/core/CssBaseline";
import FrontPage from "./frontpage";
import { ThemeProvider } from "styled-components";
import Wrapper from "./wrapper";
// import "./lib/html5up/breakpoints.min.js";
// import "./lib/html5up/js/jquery.min.js";
// import "./lib/html5up/js/jquery.scrolly.min.js";
// import "./lib/html5up/js/browser.min.js";
// import "./lib/html5up/js/breakpoints.min.js";
// import "./lib/html5up/js/util.js";
// import "./lib/html5up/js/main.js";

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
        {/* <CssBaseline /> */}
        {/* <FrontPage /> */}
        <Wrapper />
      </div>
    </ThemeProvider>
  );
};

export default App;
