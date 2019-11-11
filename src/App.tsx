import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline'
import FrontPage from './frontpage'
import { ThemeProvider } from 'styled-components'
import Slider from '@material-ui/core/Slider'

export const Theme = {
  colors: {
    charcoal: '#333',
    blueBlack: '#223',
    gray100: '#7E8C9F',
    green100: '#25daa5',
  }
}

const App: React.FC = () => {
  return (
  <ThemeProvider theme={Theme}>
    <div className="App">
      <CssBaseline />
      <FrontPage />
    </div>
  </ThemeProvider>
  );
}

export default App;
