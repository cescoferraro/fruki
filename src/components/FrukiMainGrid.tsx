import { Box, Button, Typography } from '@mui/material'
import { useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import image9 from 'assets/home/img_10.png'
import { center } from 'components/center'
import { defaultPl } from 'components/defaultPl'
import { NewGeneric } from 'components/newGeneric'
import { useIsBigScreen } from 'components/useIsBigScreen'
import * as React from 'react'

interface IProps {
  home: GatsbyTypes.HomeFragmentFragment | null
}

function NewComponent() {
  const borderTopLeftRadius = { xs: 240, sm: 240, md: 440 }
  const isBig = useIsBigScreen()
  return (
    <NewGeneric
      height={{ xs: 500, sm: 500, md: 800 }}
      sx={{
        background: '#5F99AF',
        flexDirection: {
          xs: 'column',
          sm: 'column',
          md: 'row',
        },
      }}
      right={{
        element: (
          <Box>
            <Typography
              variant={isBig ? 'h1' : 'h5'}
              sx={{ pr: defaultPl, fontWeight: 700, zIndex: 2 }}
              color="primary.contrastText"
            >
              Tudo o que fazemos juntos, fazemos melhor{' '}
            </Typography>
            <Typography
              color="primary.contrastText"
              sx={{ pr: defaultPl, zIndex: 2, py: 2 }}
              fontWeight={700}
              variant="h6"
            >
              Quer ser um cliente Fruki Bebidas?{' '}
            </Typography>
            <Typography
              color="primary.contrastText"
              sx={{ pr: defaultPl, zIndex: 2 }}
              variant="body1"
              fontSize={20}
            >
              Faça o pré-cadastro! Em breve vamos entrar em contato com você.{' '}
            </Typography>
            <Box sx={{ ...center, justifyContent: 'flex-start', py: 2 }}>
              <Button color="primary" variant="contained">
                Quero Revender Fruki{' '}
              </Button>
            </Box>
          </Box>
        ),
        sx: {
          flexBasis: '45%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          p: 2,
          pl: {
            xs: 0,
            sm: 0,
            md: 4,
          },
        },
      }}
      left={{
        sx: {
          flexBasis: '55%',
          backgroundImage: `url(${image9})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderWidth: 2,
          borderTopLeftRadius: borderTopLeftRadius,
          borderTopRightRadius: borderTopLeftRadius,
          borderBottomRightRadius: borderTopLeftRadius,
        },
      }}
    />
  )
}

export const FrukiMainGrid: React.FC<IProps> = ({}) => {
  const [visible, setVisible] = useState(false)
  return (
    <Box
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <Carousel
        swipe={false}
        autoPlay={false}
        animation={undefined}
        duration={0}
        cycleNavigation={false}
        navButtonsAlwaysInvisible={false}
        navButtonsAlwaysVisible={visible}
        indicators={visible}
        indicatorIconButtonProps={{ style: { color: 'white', padding: '4px' } }}
        activeIndicatorIconButtonProps={{ style: { color: 'black' } }}
        indicatorContainerProps={{
          style: { marginTop: '-34px', position: 'absolute', zIndex: 2 },
        }}
      >
        <NewComponent />
        <NewComponent />
        <NewComponent />
      </Carousel>
    </Box>
  )
}
