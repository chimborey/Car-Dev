import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // <-- import Tailwind CSS
import App from './App';
import ShopContextProvider from './Components/ShopContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
  // {/* </React.StrictMode> */}
);