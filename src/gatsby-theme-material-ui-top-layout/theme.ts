import { createTheme } from '@mui/material'

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    bodyRegular: true
    bodyLarge: true
    bodyExtraLarge: true
    bodySmall: true
  }
}

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        size: 'large',
      },
      styleOverrides: {
        root: {
          borderRadius: 300,
        },
        sizeLarge: {
          height: 48,
          fontSize: 18,
          fontWeight: 'bold',
          lineHeight: '135%',
          letterSpacing: 0,
        },
      },
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'bodyExtraLarge' },
          style: {
            fontSize: 24,
            fontWeight: 'regular',
            lineHeight: '140%',
            letterSpacing: 0,
          },
        },
        {
          props: { variant: 'bodyLarge' },
          style: {
            fontSize: 20,
            fontWeight: 'regular',
            lineHeight: '140%',
            letterSpacing: 0,
          },
        },
        {
          props: { variant: 'bodyRegular' },
          style: {
            fontSize: 18,
            fontWeight: 'regular',
            lineHeight: '140%',
            letterSpacing: 0,
          },
        },
        {
          props: { variant: 'bodySmall' },
          style: {
            fontSize: 16,
            fontWeight: 'regular',
            lineHeight: '150%',
            letterSpacing: 0,
          },
        },
      ],
    },
  },
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
  typography: {
    fontFamily: 'Mangueira',
    h1: {
      fontSize: 64,
      fontWeight: 'bold',
      lineHeight: '115%',
      letterSpacing: 0,
    },
    h2: {
      fontSize: 56,
      fontWeight: 'bold',
      lineHeight: '115%',
      letterSpacing: 0,
    },
    h3: {
      fontSize: 48,
      fontWeight: 'bold',
      lineHeight: '110%',
      letterSpacing: 0,
    },
    h4: {
      fontSize: 40,
      fontWeight: 'bold',
      lineHeight: '120%',
      letterSpacing: 0,
    },
    h5: {
      fontSize: 32,
      fontWeight: 'bold',
      lineHeight: '130%',
      letterSpacing: 0,
    },
    h6: {
      fontSize: 24,
      fontWeight: 'bold',
      lineHeight: '130%',
      letterSpacing: 0,
    },
  },
})

export default theme
