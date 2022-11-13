import { Box, Button, Container, Typography } from '@mui/material'
import * as React from 'react'
import main from '../../static/assets/main_background.png'

interface IProps {
  home: GatsbyTypes.HomeFragmentFragment | null
}

export const FrukiMainGrid: React.FC<IProps> = ({ home }) => {
  return (
    <Box
      sx={{
        background: `url(${main}) `,
      }}
    >
      <Container>
        <Box sx={{ display: 'flex', minHeight: 800 }}>
          <Box>
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
                  {home?.title}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                pr: 3,
              }}
            >
              <Box sx={{ ml: 10 }}>
                <Typography display="flex" variant="bodyLarge" color="primary">
                  Cadastre-se para ser um revendedor dos produtos Fruki. Vem
                  compartilhar com a gente essa paixão por oferecer o melhor
                  sabor!
                </Typography>
                <Button variant="contained" color="secondary" sx={{ mt: 4 }}>
                  Quero Revender Fruki
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
