import { Close, Menu } from '@mui/icons-material'
import { Box, Drawer, IconButton, Toolbar, useTheme } from '@mui/material'
import { FrukiAppBarLink } from 'components/FrukiAppBarLink'
import { FrukiLogo } from 'components/frukiLogo'
import { OndeEncontrar } from 'components/OndeEncontrar'
import { SejaClient } from 'components/SejaClient'
import { useIsBigScreen } from 'components/useIsBigScreen'
import { PageProps } from 'gatsby'
import React, { useState } from 'react'
import { useBoletoForm } from '../layouts'

export function FrukiToolbar({
  trigguer = false,
  onClick,
  onClick1,
  location,
}: {
  trigguer?: boolean
  location: PageProps['location']
  onClick: () => void
  onClick1: () => void
  open: boolean
  onClose: () => void
}): JSX.Element {
  const theme = useTheme()
  const sx = {
    color: trigguer ? 'white' : 'unset',
    textDecorationColor: 'transparent',
    ':hover': {
      color: theme.palette.secondary.main,
    },
  }

  const isBig = useIsBigScreen()
  const [sidebar, setSidebar] = useState(false)
  const [, setState] = useBoletoForm()
  return (
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Drawer
        open={sidebar}
        anchor="left"
        onClose={() => setSidebar((s) => !s)}
        hideBackdrop
        sx={(theme) => ({
          '.MuiPaper-root': {
            width: '100vw',
            background: theme.palette.primary.main,
            height: '100%',
            maxHeight: '100vh',
          },
        })}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 5 }}>
          <IconButton onClick={() => setSidebar((s) => !s)}>
            <Close color="secondary" />
          </IconButton>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', px: 4 }}>
          <Box sx={{ width: 'fit-content' }}>
            <FrukiAppBarLink
              sx={{
                ...sx,
                color: 'white',
                fontSize: 18,
                fontWeight: location.pathname === '/sobre-nos' ? 700 : 400,
              }}
              onClick={() => setSidebar((s) => !s)}
              to="/sobre-nos"
            >
              Sobre nós
            </FrukiAppBarLink>
          </Box>
          <Box sx={{ width: 'fit-content', pt: 7 }}>
            <FrukiAppBarLink
              sx={{
                ...sx,
                color: 'white',
                fontSize: 18,
                fontWeight: location.pathname === '/marcas' ? 700 : 400,
              }}
              onClick={() => {
                setSidebar((s) => !s)
                setState((st) => ({ ...st, isLegal: !st.isLegal }))
              }}
            >
              Nossas Marcas
            </FrukiAppBarLink>
          </Box>
          <Box sx={{ width: 'fit-content', pt: 7 }}>
            <FrukiAppBarLink
              sx={{
                ...sx,
                color: 'white',
                fontSize: 18,
                fontWeight:
                  location.pathname === '/planeta-e-pessoas' ? 700 : 400,
              }}
              onClick={() => setSidebar((s) => !s)}
              to="/planeta-e-pessoas"
            >
              Planeta e Pessoas
            </FrukiAppBarLink>
          </Box>
          <Box sx={{ width: 'fit-content', pt: 7 }}>
            <FrukiAppBarLink
              sx={{
                ...sx,
                color: 'white',
                fontSize: 18,

                fontWeight: location.pathname === '/denuncias' ? 700 : 400,
              }}
              onClick={() => setSidebar((s) => !s)}
              to="/denuncias"
            >
              Canal de Denúncias
            </FrukiAppBarLink>
          </Box>
        </Box>
        <Box
          sx={{
            p: 4,
            flexGrow: 1,
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            flexDirection: 'column',
          }}
        >
          <Box>
            <OndeEncontrar
              sx={{ display: 'inline-flex' }}
              background={trigguer}
              onClick={onClick}
            />
          </Box>
          <Box sx={{ mt: 7 }}>
            <SejaClient onClick={onClick1} big={isBig} />
          </Box>
        </Box>
      </Drawer>
      <Box sx={{ flexGrow: 1, display: 'flex' }}>
        {!isBig && (
          <Box>
            <IconButton onClick={() => setSidebar((s) => !s)}>
              <Menu
                sx={(theme) => ({
                  color: trigguer ? 'white' : theme.palette.primary.main,
                })}
              />
            </IconButton>
          </Box>
        )}
        <FrukiLogo trigger={trigguer} />
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'none', sm: 'none', md: 'flex' },
          }}
        >
          <FrukiAppBarLink sx={sx} to="/sobre-nos">
            Sobre nós
          </FrukiAppBarLink>
          <FrukiAppBarLink
            sx={{ ...sx, fontWeight: 400 }}
            onClick={() => {
              setState((st) => ({ ...st, isLegal: !st.isLegal }))
            }}
          >
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
      <Box sx={{ width: 'max-content' }}>
        <OndeEncontrar background={trigguer} onClick={onClick} />
        <SejaClient
          onClick={() => {
            setSidebar(false)
            onClick1()
          }}
          big={isBig}
        />
      </Box>
    </Toolbar>
  )
}
