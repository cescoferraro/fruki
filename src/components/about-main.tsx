import { Typography } from '@mui/material'
import AboutBAckground from 'assets/about/img.png'
import image4 from 'assets/about/img_1.png'
import { defaultPl } from 'components/defaultPl'
import { NewGeneric } from 'components/newGeneric'
import { SvgThing } from 'components/svgThing'
import { useIsBigScreen } from 'components/useIsBigScreen'
import * as React from 'react'

export function AboutMain() {
  const isBig = useIsBigScreen()
  return (
    <NewGeneric
      sx={{
        backgroundImage: `url(${AboutBAckground})`,
        backgroundSize: 'cover',
      }}
      left={{
        element: (
          <>
            <Typography
              variant={isBig ? 'h1' : 'h5'}
              sx={{ pl: defaultPl, fontWeight: 700 }}
              color="primary.contrastText"
            >
              Somos Fruki Bebidas
            </Typography>
            <Typography
              sx={{ pl: defaultPl }}
              variant="body1"
              color="primary.contrastText"
              fontSize={20}
            >
              E se a gente te contar que a gentileza sempre fez parte da nossa
              história? Nestes quase 100 anos de trajetória, mais do que
              produzir bebidas, nutrimos conexões verdadeiras. É um orgulho
              olhar para trás e ver quantos relacionamentos de confiança
              criamos. E o sabor que isso nos trouxe. Seguimos olhando para a
              frente e decididos a transformar o futuro. Mantendo um olhar
              gentil para todos que fazem parte da nossa vida e inspirando essa
              atitude em cada um.
            </Typography>
          </>
        ),
        sx: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          minHeight: { xs: 700, sm: 600, md: 800 },
          p: 2,
          pl: 0,
        },
      }}
      right={{
        element: !isBig && (
          <SvgThing style={{ position: 'absolute', bottom: 0 }} />
        ),
        sx: {
          backgroundImage: `url(${image4})`,
          backgroundSize: 'cover',
          borderBottomLeftRadius: {
            xs: 240,
            sm: 240,
            md: 440,
          },
          borderTopLeftRadius: {
            xs: 0,
            sm: 0,
            md: 440,
          },
        },
      }}
    />
  )
}
