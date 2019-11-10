import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline'
import FrontPage from './frontpage'

const App: React.FC = () => {
  return (
    <div className="App">
      <CssBaseline />
      <FrontPage />
    </div>
  );
}

export default App;
