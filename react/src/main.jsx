import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx'
import {Context} from "./Context.jsx";
import {  BrowserRouter as Router } from 'react-router-dom';
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Context>
    <Router>
    <App />
    </Router>
    </Context>
  </StrictMode>,
)
