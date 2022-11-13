import { Box, Button, Grid, Typography } from '@mui/material'
import * as React from 'react'

interface IProps {
  home: GatsbyTypes.HomeFragmentFragment | null
}

export const FrukiTimelineSection: React.FC<IProps> = ({}) => (
  <Grid component="section" container sx={{ minHeight: 800 }}>
    <Grid item xs={12} sm={12} md={6} sx={{ minHeight: 800 }}>
      <Box
        sx={{
          height: '100%',
          backgroundImage: `url("/assets/menino_pensante.png")`,
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
            Sempre que trabalho e paixão se encontram, dá Fruki!!!!!!!!!
          </Typography>
          <Typography
            display="flex"
            variant="bodyRegular"
            color="primary.main"
            sx={{ pt: 3 }}
          >
            Conheça um pouco mais da nossa história! Das primeiras garrafas aos
            últimos lançamentos!
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              // alignItems: 'center',
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
