import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// css

import './index.css'
import './CSS/Media.desktop.css'
import './CSS/Media.mobile.css'

// end css

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
