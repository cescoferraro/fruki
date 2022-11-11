import React from 'react'
import { Helmet } from 'react-helmet'
import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { FrukiAppBar } from '../../components/FrukiAppBar'

const theme = createTheme({
  palette: {
    primary: {
      main: '#034638',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#41B02A',
      contrastText: '#FFFFFF',
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
        <Box
          sx={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              height: '100vh',
              width: '100vw',
            }}
          >
            <FrukiAppBar />
            <Box sx={{ flexGrow: 1, overflowY: 'auto', overflowX: 'hidden' }}>
              {children}
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </React.Fragment>
  )
}
export default TopLayout
