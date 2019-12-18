import React from "react";
import "./App.css";
import "./base.sass";
import CssBaseline from "@material-ui/core/CssBaseline";
import FrontPage from "./frontpage";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Wrapper from "./wrapper";

// export const Theme = {
//   colors: {
//     charcoal: "#333",
//     blueBlack: "#66778d",
//     gray100: "#7E8C9F",
//     green100: "#25daa5"
//   },
//   fontFamilies: {
//     // serif: "'Playfair Display', serif"
//   }
//   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
//     "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
//     sans-serif;
// };

export const Theme = createMuiTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      "sans-serif"
    ].join(",")
  }
});

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
