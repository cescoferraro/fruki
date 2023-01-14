import LocationOn from '@mui/icons-material/LocationOn'
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  useScrollTrigger,
  useTheme,
} from '@mui/material'
import { useIsBigScreen } from 'components/useIsBigScreen'
import React, { useState } from 'react'
import { FrukiAppBarLink } from './FrukiAppBarLink'
import { FrukiLogo } from './frukiLogo'
import { FrukiModal } from './FrukiModal'

function NewComponent({
  background,
  onClick,
  onClick1,
}: {
  background?: string
  onClick: () => void
  onClick1: () => void
  open: boolean
  onClose: () => void
}): JSX.Element {
  const theme = useTheme()
  const sx = {
    color: background ? 'white' : 'unset',
    textDecorationColor: 'transparent',
    ':hover': {
      color: theme.palette.secondary.main,
    },
  }

  const isBig = useIsBigScreen()
  return (
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{ flexGrow: 1, display: 'flex' }}>
        <FrukiLogo background={background} />
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
          <FrukiAppBarLink sx={sx} to="/planeta-e-pessoas">
            Planeta e Pessoas
          </FrukiAppBarLink>
          <FrukiAppBarLink sx={sx} to="/denuncias">
            Canal de Denúncias
          </FrukiAppBarLink>
        </Box>
      </Box>
      <Box display={{ width: 'max-content' }}>
        <Button
          sx={{
            color: background ? 'white' : 'unset',
            display: {
              xs: 'none',
              sm: 'none',
              md: 'none',
              lg: 'unset',
            },
            fontSize: 16,
          }}
          onClick={onClick}
          startIcon={<LocationOn color="secondary" />}
        >
          Onde encontrar
        </Button>
        <Button
          onClick={onClick1}
          sx={{
            whiteSpace: 'nowrap',
            minWidth: 'auto',

            borderRadius: 20,
            textTransform: 'none',
            fontWeight: 700,
          }}
          size="medium"
          variant="contained"
          color="secondary"
        >
          {isBig ? 'Quero ser Cliente' : 'Seja Cliente'}
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
  const theme = useTheme()
  const background = trigger ? theme.palette.primary.main : undefined
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
          onClick={() => {
            window.location.href = 'https://fruki.pertinhodemim.com/'
          }}
          onClick1={() => setOpen((st) => !st)}
          open={open}
          onClose={onClose}
        />
      </AppBar>
    </>
  )
}
