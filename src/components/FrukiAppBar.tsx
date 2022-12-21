import CloseIcon from '@mui/icons-material/LocationOn'
import { AppBar, Box, Button, Toolbar, useScrollTrigger } from '@mui/material'
import React, { useState } from 'react'
import { FrukiAppBarLink } from './FrukiAppBarLink'
import { FrukiLogo } from './frukiLogo'
import { FrukiModal } from './FrukiModal'

function NewComponent(props: {
  background?: string
  onClick: () => string
  onClick1: () => void
  open: boolean
  onClose: () => void
}): JSX.Element {
  let sx = {
    color: props.background ? 'white' : 'unset',
    textDecorationColor: 'transparent',
  }
  return (
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{ flexGrow: 1, display: 'flex' }}>
        <FrukiLogo />
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'none', sm: 'none', md: 'flex' },
          }}
        >
          <FrukiAppBarLink sx={sx} to="/sobre-nos">
            Sobre nós
          </FrukiAppBarLink>
          <FrukiAppBarLink sx={sx} to="/marcas">
            Nossas Marcas
          </FrukiAppBarLink>
          <FrukiAppBarLink sx={sx} to="/planetas-e-pessoas">
            Planetas e Pessoas
          </FrukiAppBarLink>
          <FrukiAppBarLink sx={sx} to="/denuncias">
            Canal de Denúncias
          </FrukiAppBarLink>
          <FrukiAppBarLink sx={sx} to="/faq">
            FAQ
          </FrukiAppBarLink>
        </Box>
      </Box>
      <Box>
        <Button
          sx={{
            color: props.background ? 'white' : 'unset',
            display: {
              xs: 'none',
              sm: 'none',
              md: 'none',
              lg: 'unset',
            },
          }}
          onClick={props.onClick}
          startIcon={<CloseIcon color="secondary" />}
        >
          Onde encontrar
        </Button>
        <Button
          onClick={props.onClick1}
          sx={{
            whiteSpace: 'nowrap',
            minWidth: 'auto',

            borderRadius: 20,
            textTransform: 'none',
          }}
          size="medium"
          variant="contained"
          color="secondary"
        >
          Seja Cliente
        </Button>
      </Box>
    </Toolbar>
  )
}

export function FrukiAppBar() {
  const [open, setOpen] = useState(false)
  let onClose = () => setOpen((s) => !s)

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })
  const background = trigger ? 'green' : undefined
  return (
    <>
      <FrukiModal open={open} onClose={onClose} />
      <AppBar
        position="sticky"
        sx={{ background: background }}
        color="transparent"
      >
        <NewComponent
          background={background}
          onClick={() => (window.location.href = '/admin')}
          onClick1={() => setOpen((st) => !st)}
          open={open}
          onClose={onClose}
        />
      </AppBar>
    </>
  )
}
