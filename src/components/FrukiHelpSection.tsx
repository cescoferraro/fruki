import { Box, Button, Grid, Typography } from '@mui/material'
import * as React from 'react'

export function FrukiHelpSection() {
  return (
    <Grid
      component="section"
      container
      sx={{
        height: 800,
      }}
    >
      <Grid item xs={12} sm={12} md={6} sx={{ minHeight: 800 }}>
        <Box
          sx={{
            height: '100%',
            backgroundImage: `url("/assets/menino_ajuda.png")`,
            backgroundSize: 'cover',
          }}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6} sx={{ minHeight: 800 }}>
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pr: 3,
            pl: 15,
          }}
        >
          <Box>
            <Typography display="flex" variant="h1" color="secondary">
              Precisa de ajuda?
            </Typography>
            <Typography
              display="flex"
              variant="bodyRegular"
              color="primary.main"
              sx={{ pt: 3 }}
            >
              Se você está com alguma dúvida, estamos aqui para ajudar! Escolha
              seu canal preferido para podermos atender você da melhor forma.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                mt: 2,
              }}
            >
              <Box>
                <Button variant="outlined" color="secondary" sx={{ mt: 2 }}>
                  Mandar mensagem
                </Button>
              </Box>
              <Box>
                <Button variant="outlined" color="secondary" sx={{ mt: 2 }}>
                  Ligar agora{' '}
                </Button>
              </Box>
              <Box>
                <Button variant="outlined" color="secondary" sx={{ mt: 2 }}>
                  Conversar no chat online{' '}
                </Button>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Button variant="text" color="secondary" sx={{ mt: 4 }}>
                  Ver as dúvidas frequentes{' '}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}
