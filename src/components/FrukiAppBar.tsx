import CloseIcon from '@mui/icons-material/LocationOn'
import { AppBar, Box, Button, Toolbar } from '@mui/material'
import React from 'react'
import { FrukiAppBarLink } from './FrukiAppBarLink'
import { FrukiLogo } from './frukiLogo'

export function FrukiAppBar() {
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
            startIcon={<CloseIcon color="secondary" />}
          >
            Onde encontrar
          </Button>
          <Button
            sx={{
              borderRadius: 20,
              ml: 2,
            }}
            onClick={() => (window.location.href = '/admin')}
            variant="contained"
            color="secondary"
          >
            Seja um parceiro
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
