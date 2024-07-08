import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import theme from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <HashRouter>
    <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>,
)
