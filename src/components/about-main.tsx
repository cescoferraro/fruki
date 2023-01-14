import { Typography, useTheme } from '@mui/material'
import { defaultPl } from 'components/defaultPl'
import { GridContainer, GridItem } from 'components/FrukiContainer'
import { useIsBigScreen } from 'components/useIsBigScreen'
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'

export function AboutMain() {
  const isBig = useIsBigScreen()
  const theme = useTheme()
  return (
    <GridContainer sx={{ background: theme.palette.secondary.main }}>
      <GridItem
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          minHeight: { xs: 500, sm: 600, md: 800 },
          p: 2,
          pl: 0,
        }}
      >
        <Typography
          variant={isBig ? 'h2' : 'h5'}
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
          história? Nestes quase 100 anos de trajetória, mais do que produzir
          bebidas, nutrimos conexões verdadeiras. É um orgulho olhar para trás e
          ver quantos relacionamentos de confiança criamos. E o sabor que isso
          nos trouxe. Seguimos olhando para a frente e decididos a transformar o
          futuro. Mantendo um olhar gentil para todos que fazem parte da nossa
          vida e inspirando essa atitude em cada um.
        </Typography>
      </GridItem>
      <GridItem
        sx={{
          minHeight: { xs: 550, sm: 600, md: 800 },
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
        }}
        padding="none"
      >
        <StaticImage
          style={{ width: '100%', position: 'absolute', bottom: 0 }}
          src={'../../static/assets/about/img_3.png'}
          alt={'sdfkj'}
        />
      </GridItem>
    </GridContainer>
  )
}
