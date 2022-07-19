import React from 'react'
import Router from '../src/Routes/Router'

import theme from './constants/theme'
import {ThemeProvider} from '@mui/material'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
