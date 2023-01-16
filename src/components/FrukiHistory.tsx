import { Box, Button, Typography } from '@mui/material'
import { Addition } from 'components/Addition'
import {
  Desktop,
  GridContainer,
  GridItem,
  Mobile,
} from 'components/FrukiContainer'
import { SvgThing } from 'components/svgThing'
import { useIsBigScreen } from 'components/useIsBigScreen'
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'

export function FrukiHistory() {
  const isBig = useIsBigScreen()
  return (
    <GridContainer>
      <GridItem>
        <Typography
          variant={isBig ? 'h2' : 'h5'}
          sx={{ fontWeight: 700 }}
          color="secondary"
        >
          Temos muita história pra contar
        </Typography>
        <Typography fontSize={isBig ? 20 : 18} variant="body1">
          A inauguração da primeira fábrica ao lançamento dos últimos produtos,
          saiba tudo sobre nosso propósito e nossa história.
        </Typography>
        <Box sx={{}}>
          <Button
            sx={{ fontSize: 18 }}
            variant="contained"
            color="secondary"
            size="large"
          >
            Conheça nossa história
          </Button>
        </Box>
        <Desktop>
          <Addition />
        </Desktop>
      </GridItem>
      <GridItem padding="none" flow sx={{ height: { xs: 400, sm: 400 } }}>
        <Desktop>
          <StaticImage
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              height: '100%',
              maxHeight: '100%',
              borderBottomLeftRadius: 300,
            }}
            alt="sdfk"
            src={`../../static/assets/home/img_13.png`}
          />
        </Desktop>
        <Mobile>
          <StaticImage
            objectFit={'cover'}
            objectPosition={'top'}
            style={{
              position: 'absolute',
              top: 0,
              objectFit: 'cover',
              objectPosition: 'top',
              borderBottomLeftRadius: 240,
              borderTopLeftRadius: 240,
              height: '100%',
            }}
            alt="sdfk"
            src={`../../static/assets/home/img_4.png`}
          />
        </Mobile>
        <Mobile sx={{ zIndex: 10 }}>
          <SvgThing style={{ position: 'absolute', bottom: 0 }} />
        </Mobile>
      </GridItem>
    </GridContainer>
  )
}
