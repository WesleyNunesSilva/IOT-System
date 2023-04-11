import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/global'
import Theme from '../styles/theme'
import { AuthProvider } from './hooks/auth'
import { ClientProvider } from './hooks/clients'

import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme} >
      <GlobalStyles />
      <AuthProvider>
        <ClientProvider>
          <Routes/>
        </ClientProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
