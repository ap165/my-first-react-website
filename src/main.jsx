import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from "react-router-dom";


const Root = createRoot(document.getElementById('root'))

Root.render(
  (<StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>),
)
