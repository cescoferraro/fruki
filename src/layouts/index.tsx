import {
  Box,
  Button,
  CssBaseline,
  Link as MUILink,
  Paper,
  Snackbar,
  ThemeProvider,
  Typography,
} from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { center } from 'components/center'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import theme from './theme'
import './global.css'

function useLocalStorage<T>(key: string, initialValue: T) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key)
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // If error also return initialValue
      console.log(error)
      return initialValue
    }
  })
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      // Save state
      setStoredValue(valueToStore)
      // Save to local storage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error)
    }
  }
  return [storedValue, setValue] as const
}

const queryClient = new QueryClient()

export default function ({ children }: { children: any }) {
  const [cookies, setCookies] = useLocalStorage<'denied' | 'accepted'>(
    'cookies-fruki',
    'denied'
  )
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Helmet htmlAttributes={{ lang: 'pt-BR' }}>
            <title>Fruki</title>
            <link
              rel="preload"
              href="/fonts/MangueiraAlt-Regular.otf"
              as="font"
              type="font/otf"
              crossOrigin="anonymous"
              key="interFont"
            />
            <meta name="description" content="This is the description tag" />
            <style />
          </Helmet>
          <Snackbar
            open={cookies === 'denied'}
            autoHideDuration={6000}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            onClose={() => {}}
          >
            <Paper
              sx={{
                p: 3,
                borderRadius: 8,
                minWidth: { sm: '90vw', md: '80vw', lg: '70vw' },
              }}
            >
              <Box
                display="flex"
                flexDirection={{ xs: 'column', sm: 'column', md: 'row' }}
                gap={3}
              >
                <Box>
                  <Typography>
                    Nós usamos cookies para operacionalizar o site e melhorar
                    cada vez mais sua experiência de navegação. Para mais
                    informações acesse a {'  '}
                    <MUILink
                      color="secondary"
                      onClick={() => {
                        window.location.href = '/assets/Fruki_LGPD.pdf'
                      }}
                    >
                      Política de Cookies | Política de Privacidade
                    </MUILink>
                  </Typography>
                </Box>
                <Box sx={{ ...center }}>
                  <Button
                    sx={{
                      whiteSpace: 'nowrap',
                      minWidth: 'auto',
                      // minWidth: 160,
                    }}
                    color="secondary"
                    variant="contained"
                    onClick={() => setCookies('accepted')}
                  >
                    Aceitar Cookies
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Snackbar>
          <CssBaseline />
          {children}
        </React.Fragment>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
