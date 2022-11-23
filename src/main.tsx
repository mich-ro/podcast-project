import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-uin022d5nc7lyh5l.us.auth0.com"
    clientId="IvFbWORAIyDnK9fFCrkO7eVlc12xrYeX"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
  </React.StrictMode>
)
