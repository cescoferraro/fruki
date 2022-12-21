import { Box, Typography } from '@mui/material'
import AboutBAckground from 'assets/about/img.png'
import AboutImage from 'assets/about/img_1.png'
import { center } from 'components/center'
import * as React from 'react'

export function AboutMain() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${AboutBAckground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        width: '100%',
        height: 720,
        display: 'flex',
      }}
    >
      <Box sx={{ flexBasis: '50%', ...center, p: 5 }}>
        <Box>
          <Typography color="primary.contrastText" variant="h1">
            Somos Fruki Bebidas
          </Typography>
          <br />
          <Typography color="primary.contrastText">
            E se a gente te contar que a gentileza sempre fez parte da nossa
            história? Nestes quase 100 anos de trajetória, mais do que produzir
            bebidas, nutrimos conexões verdadeiras. É um orgulho olhar para trás
            e ver quantos relacionamentos de confiança criamos. E o sabor que
            isso nos trouxe. Seguimos olhando para a frente e decididos a
            transformar o futuro. Mantendo um olhar gentil para todos que fazem
            parte da nossa vida e inspirando essa atitude em cada um.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          flexBasis: '50%',
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${AboutImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            height: '100%',
          }}
        ></Box>
      </Box>
    </Box>
  )
}
