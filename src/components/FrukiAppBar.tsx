import CloseIcon from '@mui/icons-material/LocationOn'
import { AppBar, Box, Button, Toolbar } from '@mui/material'
import React, { useState } from 'react'
import { FrukiModal } from './FrukiModal'
import { FrukiAppBarLink } from './FrukiAppBarLink'
import { FrukiLogo } from './frukiLogo'

export function FrukiAppBar() {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position="sticky" color="transparent">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ flexGrow: 1, display: 'flex' }}>
          <FrukiLogo />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'none', md: 'flex' },
            }}
          >
            <FrukiAppBarLink to="/">Início</FrukiAppBarLink>
            <FrukiAppBarLink to="/sobre-nos">Sobre nós</FrukiAppBarLink>
            <FrukiAppBarLink to="/marcas">Nossas Marcas</FrukiAppBarLink>
            <FrukiAppBarLink to="/sustentabilidade">
              Sustentabilidade
            </FrukiAppBarLink>
          </Box>
        </Box>
        <Box>
          <Button
            sx={{
              display: {
                xs: 'none',
                sm: 'none',
                md: 'none',
                lg: 'unset',
              },
            }}
            onClick={() => (window.location.href = '/admin')}
            startIcon={<CloseIcon color="secondary" />}
          >
            Onde encontrar
          </Button>
          <Button
            onClick={() => setOpen((st) => !st)}
            sx={{
              borderRadius: 20,
              ml: 2,
            }}
            variant="contained"
            color="secondary"
          >
            Seja um parceiro
          </Button>
        </Box>
      </Toolbar>
      <FrukiModal open={open} onClose={() => setOpen((s) => !s)} />
    </AppBar>
  )
}
