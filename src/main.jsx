import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from './components/UserProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <UserProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </UserProvider>
)
