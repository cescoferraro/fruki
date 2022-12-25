import { Box, Button, Typography } from '@mui/material'
import image4 from 'assets/home/img_13.png'
import image4Small from 'assets/home/img_4.png'
import { Addition } from 'components/Addition'
import { GridContainer, GridItem } from 'components/FrukiContainer'
import { SvgThing } from 'components/svgThing'
import { useIsBigScreen } from 'components/useIsBigScreen'
import * as React from 'react'

export function FrukiHistory() {
  const isBig = useIsBigScreen()
  return (
    <GridContainer>
      <GridItem>
        <Typography
          variant={isBig ? 'h1' : 'h5'}
          sx={{ fontWeight: 700 }}
          color="secondary"
        >
          Temos muita história pra contar
        </Typography>
        <Typography variant="body1" fontSize={20}>
          A inauguração da primeira fábrica ao lançamento dos últimos produtos,
          saiba tudo sobre nosso propósito e nossa história.
        </Typography>
        <Box sx={{}}>
          <Button variant="contained" color="secondary" size="large">
            Conheça nossa história
          </Button>
        </Box>
        {isBig && <Addition />}
      </GridItem>
      <GridItem
        padding="none"
        sx={{
          backgroundImage: `url(${isBig ? image4 : image4Small})`,
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
        }}
      >
        {!isBig && <SvgThing style={{ position: 'absolute', bottom: 0 }} />}
      </GridItem>
    </GridContainer>
  )
}
