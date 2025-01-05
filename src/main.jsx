import { react } from 'react'
// import  ReactDOm from 'react-dom/client'
<script src="http://localhost:8097"></script>
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>

)

// index.html ka baccha main.jsx , main.jsx ka baccha app.jsx
//40:00

