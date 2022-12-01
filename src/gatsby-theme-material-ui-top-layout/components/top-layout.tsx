import { Box, CssBaseline } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// @ts-ignore
import ThemeTopLayout from 'gatsby-theme-material-ui-top-layout/src/components/top-layout'
import React from 'react'
import { Helmet } from 'react-helmet'
import { FrukiAppBar } from '../../components/FrukiAppBar'

const queryClient = new QueryClient()
export default function TopLayout({ children, theme }: any) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeTopLayout theme={theme}>
        <React.Fragment>
          <Helmet>
            <title>Fruki</title>
            <link
              rel="preload"
              href="/fonts/Fontspring-DEMO-mangueira-regular.otf"
              as="font"
              type="font/otf"
              crossOrigin="anonymous"
              key="interFont"
            />
          </Helmet>
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
        </React.Fragment>
      </ThemeTopLayout>
    </QueryClientProvider>
  )
}
