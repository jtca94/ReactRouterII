import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF0000',
    },
    secondary: {
      //Colores personalizados de la paleta de colores
      main: '#CC0000',
    },
    blue: {
      //Colores personalizados de la paleta de colores
      main: '#3B4CCA',
    },
    yellow: {
      //Colores personalizados de la paleta de colores
      main: '#FFDE00',
    },
    yellowDark: {
      //Colores personalizados de la paleta de colores
      main: '#B3A125',
    }
  },
});





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
