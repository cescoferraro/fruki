import { CssBaseline } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// @ts-ignore
import ThemeTopLayout from 'gatsby-theme-material-ui-top-layout/src/components/top-layout'
import React from 'react'
import { Helmet } from 'react-helmet'
import './global.css'

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
            <style />
          </Helmet>
          <CssBaseline />
          {children}
        </React.Fragment>
      </ThemeTopLayout>
    </QueryClientProvider>
  )
}
