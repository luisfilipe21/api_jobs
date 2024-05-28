import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./styles/index.scss"
import { BrowserRouter } from 'react-router-dom'
import { JobProvider } from './providers/JobsProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <JobProvider>
        <App />
      </JobProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
