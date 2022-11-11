import React from 'react'
import { Helmet } from 'react-helmet'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#034638',
    },
    secondary: {
      main: '#41B02A',
    },
  },
})
const TopLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Agência Global</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </React.Fragment>
  )
}
export default TopLayout
