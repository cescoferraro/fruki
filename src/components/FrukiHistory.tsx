import { Box, Button, Typography } from '@mui/material'
import image4 from 'assets/home/img_4.png'
import { Addition } from 'components/Addition'
import { SvgThing } from 'components/svgThing'
import { NewGeneric } from 'components/newGeneric'
import { defaultPl } from 'components/defaultPl'
import { useIsBigScreen } from 'components/useIsBigScreen'
import * as React from 'react'

export function FrukiHistory() {
  const isBig = useIsBigScreen()
  return (
    <NewGeneric
      left={{
        element: (
          <>
            <Typography
              variant={isBig ? 'h1' : 'h5'}
              sx={{ pl: defaultPl, fontWeight: 700 }}
              color="secondary"
            >
              Temos muita história pra contar
            </Typography>
            <Typography sx={{ pl: defaultPl }} variant="body1" fontSize={20}>
              A inauguração da primeira fábrica ao lançamento dos últimos
              produtos, saiba tudo sobre nosso propósito e nossa história.
            </Typography>
            <Box sx={{ pl: defaultPl }}>
              <Button variant="contained" color="secondary" size="large">
                Conheça nossa história
              </Button>
            </Box>
            {isBig && <Addition />}
          </>
        ),
        sx: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          p: 2,
          pl: 0,
        },
      }}
      right={{
        element: !isBig && <SvgThing />,
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
