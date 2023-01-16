import {
  Box,
  Button,
  CircularProgress,
  Modal,
  Paper,
  Typography,
} from '@mui/material'
import Drawer from '@mui/material/SwipeableDrawer'

import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useIsBigScreen } from 'components/useIsBigScreen'
import React from 'react'
import { center } from '../components/center'
import { FrukiForm } from '../components/FrukiForm'
import { LoveIcon } from '../components/LoveIcon'
import { MedalIcon } from '../components/MedalIcon'
import { Lead } from '../components/useRevendedorFormik'
import { FrukiCheckIcon } from './FrukiCheckIcon'

interface IProps {
  onClose: () => void
  open: boolean
}

export const FrukiModal: React.FC<IProps> = ({ onClose, open }) => {
  const sx = {
    flexBasis: {
      sm: '100%',
      md: '50%',
    },
    px: { xs: 0, sm: 2, md: 4, lg: 8 },
    display: 'flex',
    flexDirection: { xs: 'row', sm: 'row', md: 'column' },
  }
  const paper = {
    p: 3,
    borderRadius: 4,
    maxHeight: '90vh',
    overflowY: 'auto',
    maxWidth: { xs: '90vw', sm: '70vw', md: '60vw', lg: '50vw', xl: '40vw' },
    minWidth: { xs: '90vw', sm: '70vw', md: '60vw', lg: '50vw', xl: '40vw' },
  }
  const iconContainer = {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'column', md: 'row' },
    justifyContent: 'space-between',
  }
  const host =
    typeof window !== 'undefined'
      ? window?.location?.host?.includes('localhost')
        ? `http://localhost:3333`
        : 'https://api.fruki.cescoferraro.com'
      : 'https://api.fruki.cescoferraro.com'
  const mutation = useMutation<Lead, Error, Lead>({
    mutationFn: (lead) => {
      return axios.post(`${host}/graphql`, {
        operationName: 'CreateLead',
        query: `mutation CreateLead($name: String!, $cnpj: String!, $email: String!, $phone: String!) { createLead(name: $name, cnpj: $cnpj, email: $email, phone: $phone) { name cnpj email phone } } `,
        variables: lead,
      })
    },
  })
  const isBig = useIsBigScreen()
  const HH = isBig ? Modal : Drawer
  return (
    <HH
      open={open}
      onClose={() => {
        onClose()
        mutation.reset()
      }}
      sx={{
        ...center,
        '.MuiPaper-root': {
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        },
      }}
      anchor={'bottom'}
    >
      <Box sx={{ maxHeight: '80vh' }}>
        <Paper
          sx={
            isBig
              ? paper
              : {
                  p: 3,
                  borderTopRightRadius: 100,
                  borderTopLeftRadius: 100,
                }
          }
        >
          {!isBig && (
            <Box sx={{ ...center }}>
              <svg
                width="64"
                height="5"
                viewBox="0 0 64 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="64" height="5" rx="2.5" fill="#C9D7E3" />
              </svg>
            </Box>
          )}

          {mutation.isSuccess ? (
            <>
              <Box sx={{ ...center, py: 4 }}>
                <FrukiCheckIcon />
              </Box>
              <Typography align="center" color="secondary" variant="h4">
                Cadastro Concluído!
              </Typography>

              <Box sx={{ ...center, py: 6 }}>
                <Typography align="center" color="grey.900">
                  Seu pré-cadastro foi concluído com sucesso! Em breve, nossa
                  equipe comercial vai entrar em contato com você.
                </Typography>
              </Box>
              <Box sx={{ ...center }}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    onClose()
                    mutation.reset()
                  }}
                >
                  Voltar para a página inicial
                </Button>
              </Box>
            </>
          ) : mutation.isLoading ? (
            <CircularProgress />
          ) : (
            <>
              <Typography
                align="center"
                color="secondary"
                fontWeight={700}
                variant={isBig ? 'h4' : 'h6'}
                sx={{ pt: 2 }}
              >
                Tudo o que fazemos juntos,
              </Typography>
              <Typography
                align="center"
                color="secondary"
                fontWeight={700}
                variant={isBig ? 'h4' : 'h6'}
              >
                fazemos melhor
              </Typography>
              {isBig && (
                <Box sx={{ ...center, py: 2, pb: 4 }}>
                  <Typography align="center" color="grey.900">
                    Cadastre-se para ser um revendedor dos produtos Fruki.
                  </Typography>
                </Box>
              )}
              <Box sx={iconContainer} id="icon-container">
                <Box sx={sx}>
                  <Box sx={{ ...center }}>
                    <MedalIcon />
                  </Box>
                  <Box sx={{ ...center, py: 2, pl: { xs: 1, sm: 2, md: 0 } }}>
                    <Typography
                      align="center"
                      color="grey.700"
                      fontSize={isBig ? 18 : 16}
                    >
                      Nossa variedade de produtos é para todos os gostos
                    </Typography>
                  </Box>
                </Box>
                <Box sx={sx}>
                  <Box sx={{ ...center }}>
                    <LoveIcon />
                  </Box>
                  <Box sx={{ ...center, py: 2, pl: { xs: 1, sm: 2, md: 0 } }}>
                    <Typography
                      align="center"
                      color="grey.700"
                      fontSize={isBig ? 18 : 16}
                    >
                      É mais fácil vender o que todo mundo adora!
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ ...center }}>
                {isBig && (
                  <Typography
                    align="center"
                    variant="bodyExtraLarge"
                    color="grey.700"
                  >
                    Pré-Cadastro
                  </Typography>
                )}
              </Box>
              <FrukiForm mutation={mutation} />
            </>
          )}
        </Paper>
      </Box>
    </HH>
  )
}
