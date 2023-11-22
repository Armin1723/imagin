import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="466931667428-5pmg2grrnc1uf2sk1sl9hjr27f87hiei.apps.googleusercontent.com">
      <App/>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
