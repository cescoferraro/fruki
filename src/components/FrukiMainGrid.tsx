import { Box, Button, Grid, Typography } from '@mui/material'
import * as React from 'react'

export function FrukiMainGrid() {
  return (
    <Grid
      container
      sx={{
        background: 'red',
        height: 800,
      }}
    >
      <Grid item xs={12} sm={12} md={8}>
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pl: 3,
          }}
        >
          <Box>
            <Typography variant="h1" color="primary.contrastText">
              Nossa paixão é oferecer o melhor sabor
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pr: 3,
          }}
        >
          <Box>
            <Typography
              display="flex"
              variant="bodyRegular"
              color="primary.contrastText"
              sx={{ textAlign: 'center' }}
            >
              Cadastre-se para ser um revendedor dos produtos Fruki. Vem
              compartilhar com a gente essa paixão por oferecer o melhor sabor!
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Button variant="contained" color="secondary" sx={{ mt: 4 }}>
                Quero Revender Fruki
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}
