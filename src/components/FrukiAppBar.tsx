import CloseIcon from '@mui/icons-material/LocationOn'
import { Button, AppBar, Box, LinkProps, Toolbar } from '@mui/material'
import { Link } from 'gatsby-theme-material-ui'
import React from 'react'
import { FrukiLogo } from './frukiLogo'

interface IProps extends LinkProps {
  to?: string
}

const FrukiLink = (props: IProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Link
        {...props}
        sx={{
          ml: {
            md: 4,
            lg: 6,
          },
          ...props.sx,
        }}
        to={props.to}
      >
        {props.children}
      </Link>
    </Box>
  )
}

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
            <FrukiLink to="/">Início</FrukiLink>
            <FrukiLink to="/sobre-nos">Sobre nós</FrukiLink>
            <FrukiLink to="/marcas">Nossas Marcas</FrukiLink>
            <FrukiLink to="/sustentabilidade">Sustentabilidade</FrukiLink>
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
