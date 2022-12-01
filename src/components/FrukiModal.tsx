import {
  Box,
  Button,
  CircularProgress,
  Modal,
  Paper,
  Typography,
} from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { Lead } from 'components/useRevendedorFormik'
import React from 'react'
import { center } from '../components/center'
import { FrukiForm } from '../components/FrukiForm'
import { LoveIcon } from '../components/LoveIcon'
import { MedalIcon } from '../components/MedalIcon'

const SvgComponent = (props) => (
  <svg
    width={80}
    height={80}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={80} height={80} rx={40} fill="#5F99AF" />
    <path
      d="m30 40.8 6.207 7.2L50 32"
      stroke="#fff"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

type IProps = {
  onClose: () => void
  open: boolean
}

export const FrukiModal: React.FC<IProps> = ({ onClose, open }) => {
  const sx = { flexBasis: '50%', px: { xs: 0, sm: 2, md: 4, lg: 8 } }
  const paper = {
    p: 3,
    borderRadius: 4,
    maxWidth: { xs: '90vw', sm: '70vw', md: '60vw', lg: '50vw', xl: '40vw' },
  }
  const iconContainer = {
    display: { xs: 'none', sm: 'flex' },
    flexDirection: 'row',
    justifyContent: 'space-between',
  }

  const mutation = useMutation<Lead, Error, Lead>({
    mutationFn: (lead) => {
      return axios.post('http://localhost:3333/graphql', {
        operationName: 'Heelo',
        query: `query Heelo($name: String!, $cnpj: String!, $email: String!, $phone: String!) { createLead(name: $name, cnpj: $cnpj, email: $email, phone: $phone) { name cnpj email phone } } `,
        variables: lead,
      })
    },
  })
  return (
    <Modal open={open} onClose={onClose} sx={{ ...center }}>
      {mutation.isSuccess ? (
        <Paper sx={paper}>
          <Box sx={{ ...center, py: 4 }}>
            <SvgComponent />
          </Box>
          <Typography align="center" color="secondary" variant="h4">
            Cadastro Concluído!
          </Typography>

          <Box sx={{ ...center, py: 6 }}>
            <Typography align="center" color="grey.900">
              Seu pré-cadastro foi concluído com sucesso! Em breve, nossa equipe
              comercial vai entrar em contato com você.
            </Typography>
          </Box>
          <Box sx={{ ...center }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => onClose()}
            >
              Voltar para a página inicial
            </Button>
          </Box>
        </Paper>
      ) : mutation.isLoading ? (
        <CircularProgress />
      ) : (
        <Paper sx={paper}>
          <Typography align="center" color="secondary" variant="h4">
            Tudo o que fazemos juntos,
          </Typography>
          <Typography align="center" color="secondary" variant="h4">
            fazemos melhor
          </Typography>
          <Box sx={{ ...center, py: 2, pb: 4 }}>
            <Typography align="center" color="grey.900">
              Cadastre-se para ser um revendedor dos produtos Fruki.
            </Typography>
          </Box>
          <Box sx={iconContainer}>
            <Box sx={sx}>
              <Box sx={{ ...center }}>
                <MedalIcon />
              </Box>
              <Box sx={{ ...center, py: 2 }}>
                <Typography align="center" color="grey.700">
                  Nossa variedade de produtos é para todos os gostos
                </Typography>
              </Box>
            </Box>
            <Box sx={sx}>
              <Box sx={{ ...center }}>
                <LoveIcon />
              </Box>
              <Box sx={{ ...center, py: 2 }}>
                <Typography align="center" color="grey.700">
                  É mais fácil vender o que todo mundo adora!
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ ...center }}>
            <Typography
              align="center"
              variant="bodyExtraLarge"
              color="grey.700"
            >
              Pré-Cadastro
            </Typography>
          </Box>
          <FrukiForm mutation={mutation} />
        </Paper>
      )}
    </Modal>
  )
}
