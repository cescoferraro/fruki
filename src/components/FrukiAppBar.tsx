import {
  AppBar,
  Box,
  Button,
  Modal,
  Paper,
  Typography,
  useScrollTrigger,
  useTheme,
} from '@mui/material'
import { center } from 'components/center'
import { Desktop, Mobile } from 'components/FrukiContainer'
import { FrukiToolbar } from 'components/FrukiToolbar'
import { SmallFrukiLogo } from 'components/SmallFrukiLogo'
import { PageProps } from 'gatsby'
import React, { Dispatch, SetStateAction } from 'react'
import { FrukiContext } from '../layouts'
import { FrukiModal } from './FrukiModal'

export function FrukiAppBar({
  location,
  setState,
  state,
}: {
  location: PageProps['location']
  state: FrukiContext
  setState: Dispatch<SetStateAction<FrukiContext>>
}) {
  let onClose = () =>
    setState((s) => ({
      ...s,
      boleto: !s.boleto,
    }))

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })
  const theme = useTheme()
  const background = trigger ? theme.palette.primary.main : undefined
  let closeDialog = () => {
    console.log('called')
    setState((s) => ({ ...s, isLegal: false }))
  }
  return (
    <>
      <FrukiModal open={state.boleto} onClose={onClose} />
      <Modal
        open={state.isLegal}
        sx={{
          ...center,
        }}
      >
        <Paper
          sx={{
            ...center,
            maxWidth: 800,
            p: 5,
            width: {
              xs: '90vw',
              sm: '80vw',
              md: '100%',
            },
            borderRadius: 24 / 8,
          }}
        >
          <Box sx={{ minWidth: '50%' }}>
            <Box sx={{ ...center, pb: 4 }}>
              <Desktop>
                <SmallFrukiLogo trigger={false} />
              </Desktop>
              <Mobile>
                <svg
                  width="33"
                  height="38"
                  viewBox="0 0 33 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.0036 0H17.8993V11.1144H27.0036C30.0384 11.1144 32.4999 8.61794 32.4999 5.54011C32.4999 2.49647 30.0384 0 27.0036 0Z"
                    fill="#41B02A"
                  />
                  <path
                    d="M27.0036 17.749H17.8993V28.8634H27.0036C30.0384 28.8634 32.4999 26.367 32.4999 23.2891C32.4999 20.2455 30.0384 17.749 27.0036 17.749Z"
                    fill="#41B02A"
                  />
                  <path
                    d="M0.5 10.3962V37.7205H1.24184C6.90676 37.7205 11.4589 33.0695 11.4589 27.3584V0.0341229H10.7171C5.08588 -7.52173e-05 0.5 4.65087 0.5 10.3962Z"
                    fill="#41B02A"
                  />
                </svg>
              </Mobile>
            </Box>
            <Typography variant={'h4'} color="secondary" align="center">
              Bem-vindo!
            </Typography>
            <Typography
              mt={2}
              variant={'h6'}
              color="primary"
              fontWeight={700}
              align="center"
            >
              Você tem mais de 18 anos?
            </Typography>
            <Box display={'flex'} gap={2} mt={4}>
              <Button
                fullWidth
                color={'secondary'}
                variant="contained"
                onClick={() => {
                  closeDialog()
                  window.open('/pdf/Portfolio_Digital_Fruki_Bebidas.pdf')
                }}
              >
                Sim
              </Button>
              <Button
                color={'secondary'}
                fullWidth
                variant="outlined"
                sx={{
                  background: 'white',
                  ':hover': {
                    background: 'white',
                  },
                }}
                onClick={closeDialog}
              >
                Não
              </Button>
            </Box>
          </Box>
        </Paper>
      </Modal>
      <AppBar
        position="sticky"
        sx={{ background: background }}
        color="transparent"
      >
        <FrukiToolbar
          location={location}
          trigguer={trigger}
          onClick={() => {
            window.location.href = 'https://fruki.pertinhodemim.com/'
          }}
          onClick1={() =>
            setState((st) => ({
              ...st,
              boleto: !st.boleto,
            }))
          }
          open={state.boleto}
          onClose={onClose}
        />
      </AppBar>
    </>
  )
}
