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
import { FrukiAppBar } from 'components/FrukiAppBar'
import { FrukiContainer } from 'components/FrukiContainer'
import { useIsBigScreen } from 'components/useIsBigScreen'
import { navigate, PageProps } from 'gatsby'
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  Suspense,
  useContext,
  useEffect,
  useState,
} from 'react'
import TagManager from 'react-gtm-module'
import { Helmet } from 'react-helmet'
import { useLocalStorage } from '../hooks/useLocalStorage'
import './global.css'
import theme from './theme'

const queryClient = new QueryClient()

type Props = {
  fallback?: ReactNode
  children: ReactNode
}

export const SuspenseHelper: React.FC<Props> = ({ fallback, children }) => {
  const [isMounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    if (!isMounted) {
      setMounted(true)
    }
  })

  return (
    <Suspense fallback={fallback}>{!isMounted ? fallback : children}</Suspense>
  )
}
export type FrukiContext = { isLegal: boolean; boleto: boolean }
export type FrukiContextInterface = [
  FrukiContext,
  Dispatch<SetStateAction<FrukiContext>>
]

const Ctx = createContext<FrukiContextInterface>(
  undefined as unknown as FrukiContextInterface
)

export const useBoletoForm = () => useContext<FrukiContextInterface>(Ctx)

if (typeof window !== 'undefined') {
  TagManager.initialize({
    gtmId: 'G-TGPP4E3416',
  })
}

export default function ({
  children,
  location,
}: { children: any } & PageProps) {
  console.log(234, location)
  const [cookies, setCookies] = useLocalStorage<'denied' | 'accepted'>(
    'cookies-fruki',
    'denied'
  )
  // const [boletoForm, setBoletoForm] = useState(false)
  const [state, setState] = useState({
    boleto: false,
    isLegal: false,
  })
  const isBig = useIsBigScreen()
  return (
    <Ctx.Provider value={[state, setState]}>
      <SuspenseHelper>
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
                <meta
                  name="description"
                  content="This is the description tag"
                />
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
                    border: '2px solid green',
                  }}
                >
                  <Box
                    display="flex"
                    flexDirection={{ xs: 'column', sm: 'column', md: 'row' }}
                    gap={3}
                  >
                    <Box>
                      <Typography sx={{ fontSize: 16 }}>
                        Nós usamos cookies para operacionalizar o site e
                        melhorar cada vez mais sua experiência de navegação.
                        Para mais informações acesse a {'  '}
                        <MUILink
                          color="secondary"
                          onClick={() => {
                            navigate('/privacidade')
                          }}
                          sx={{
                            fontWeight: 700,
                          }}
                        >
                          Política de Cookies | Política de Privacidade
                        </MUILink>
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        ...center,
                        justifyContent: isBig ? 'center' : 'felx-start',
                      }}
                    >
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
              <FrukiAppBar
                location={location}
                state={state}
                setState={setState}
              />
              <FrukiContainer>{children}</FrukiContainer>
            </React.Fragment>
          </ThemeProvider>
        </QueryClientProvider>
      </SuspenseHelper>
    </Ctx.Provider>
  )
}
// TODO GTM
// <!-- Google tag (gtag.js) --> <script async src="https://www.googletagmanager.com/gtag/js?id=G-TGPP4E3416"></script> <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-TGPP4E3416'); </script>

// TODO Libras
// <body> <!-- Inicio do corpo da página -->
//
// ... <!-- Conteúdo da página -->
//
// <div vw className="enabled">
//   <div vw-access-button className="active"></div>
//   <div vw-plugin-wrapper>
//     <div className="vw-plugin-top-wrapper"></div>
//   </div>
// </div>
// <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
// <script>
//   new window.VLibras.Widget('https://vlibras.gov.br/app');
// </script>
// </body> <!-- Fim do corpo da página -->
