import { Typography, useTheme } from '@mui/material'
import {
  Desktop,
  GridContainer,
  GridItem,
  Mobile,
} from 'components/FrukiContainer'
import { useIsBigScreen } from 'components/useIsBigScreen'
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'

export function AboutMain() {
  const isBig = useIsBigScreen()
  const theme = useTheme()
  let minHeight = { xs: 420, sm: 600, md: 800 }
  const left = 40
  const right = 100 - left
  return (
    <GridContainer sx={{ background: theme.palette.secondary.main }}>
      <GridItem
        padding={'left'}
        height={{ xs: 400, sm: 500, md: 800 }}
        sx={{
          flexBasis: { xs: '100%', sm: '100%', md: `${left}%` },
        }}
      >
        <Typography
          variant={isBig ? 'h2' : 'h5'}
          sx={{ fontWeight: 700, zIndex: 20 }}
          color="primary.contrastText"
        >
          Somos Fruki Bebidas
        </Typography>
        <Typography
          variant="body1"
          color="primary.contrastText"
          fontSize={isBig ? 18 : 16}
          sx={{ zIndex: 20 }}
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
          flexBasis: { xs: '100%', sm: '100%', md: `${right}%` },
          minHeight,
        }}
        padding="none"
      >
        <Mobile
          sx={{
            minHeight,
            maxHeight: minHeight,
            display: 'contents',
          }}
        >
          <StaticImage
            src={'../../static/assets/about/img_5.png'}
            alt={'sobre-no-mobile'}
            style={{
              zIndex: 2,
              height: '100%',
              maxHeight: '100%',
              position: 'relative',
              right: 0,
            }}
          />
        </Mobile>
        <Desktop
          sx={{
            display: 'contents',
            width: '100%',
            height: 800,
            maxHeight: 800,
          }}
        >
          <StaticImage
            style={{
              maxHeight: 800,
              position: 'absolute',
              bottom: 0,
              right: 0,
              zIndex: 10,
            }}
            objectFit="contain"
            src={'../../static/assets/about/img_3.png'}
            alt={'sdfkj'}
          />
          <svg
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              zIndex: 0,
            }}
            height="500"
            width="500"
          >
            <polygon
              points="0,0 500,500 500,0"
              style={{
                fill: '#034638',
                strokeWidth: 1,
              }}
            />
          </svg>
        </Desktop>
      </GridItem>
    </GridContainer>
  )
}
