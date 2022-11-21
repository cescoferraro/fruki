import { Box, Modal, Paper, Typography } from '@mui/material'
import React from 'react'
import { FrukiForm } from '../components/FrukiForm'
import { center } from '../components/center'
import { LoveIcon } from '../components/LoveIcon'
import { MedalIcon } from '../components/MedalIcon'

export function FrukiModal(props: { onClose: () => void; open: boolean }) {
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
  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
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
          <Typography align="center" variant="bodyExtraLarge" color="grey.700">
            Pré-Cadastro
          </Typography>
        </Box>
        <FrukiForm />
      </Paper>
    </Modal>
  )
}
