import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom';
import SaleContextProvider from './context/SaleContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  /*<React.StrictMode>*/
  <SaleContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SaleContextProvider>

  /*</React.StrictMode>*/,
)
