import { Box, Button, Typography, useTheme } from '@mui/material'
import image9 from 'assets/home/img_hey.png'
import { center } from 'components/center'
import { GridContainer, GridItem } from 'components/FrukiContainer'
import { useIsBigScreen } from 'components/useIsBigScreen'
import * as React from 'react'
import { SVGProps, useState } from 'react'
import Carousel from 'react-material-ui-carousel'

interface IProps {
  home: GatsbyTypes.HomeFragmentFragment | null
}

function NewComponent() {
  const borderTopLeftRadius = { xs: 240, sm: 240, md: 400 }
  const isBig = useIsBigScreen()
  const theme = useTheme()
  const left = 60
  return (
    <GridContainer
      sx={{
        background: theme.palette.primary.main,
        flexDirection: {
          xs: 'column',
          sm: 'column',
          md: 'row',
        },
      }}
    >
      <GridItem
        padding="none"
        sx={{
          position: 'relative',
          flexBasis: `${left}%`,
          py: 0,
          maxWidth: '60vw',
          // backgroundImage: `url(${image9})`,
          // backgroundSize: 'cover',
          // backgroundPosition: 'right',
          // borderWidth: 2,
          // borderTopLeftRadius: borderTopLeftRadius,
          // borderTopRightRadius: borderTopLeftRadius,
          // borderBottomRightRadius: borderTopLeftRadius,
          // display: 'flex',
          // p: '0px !important',
          // pr: '0px !important',
          // pl: '0px !important',
          // pt: '0px !important',
          // pb: '0px !important',
        }}
      >
        <svg
          style={{
            position: 'absolute',
            bottom: 0,
            right: 179,
            zIndex: 1,
            stroke: 'transparent',
            strokeWidth: 0,
          }}
          width={150}
          height={150}
          viewBox="0 0 150 150"
          fill="none"
        >
          <rect width={150} height={150} fill="#5F99AF" />
        </svg>
        <svg
          style={{
            stroke: 'transparent',
            strokeWidth: 0,
            position: 'absolute',
            top: 0,
            right: 0,
            zIndex: 1,
          }}
          width="179"
          height="720"
          viewBox="0 0 179 720"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 179C0 80.141 80.141 0 179 0V720H0V179Z" fill="#5F99AF" />
        </svg>

        <img src={image9} alt="" style={{ height: '100%', zIndex: 2 }} />
      </GridItem>
      <GridItem
        padding="none"
        sx={{
          flexBasis: `${100 - left}%`,
          background: '#5F99AF',
          px: {
            xs: 4,
            sm: 4,
            md: 4,
            lg: 8,
          },
          // pl: 4,
        }}
      >
        <Typography
          variant={isBig ? 'h1' : 'h5'}
          sx={{ fontWeight: 700, zIndex: 2 }}
          color="primary.contrastText"
        >
          Paixão por oferecer o melhor sabor
        </Typography>
        <Typography
          color="primary.contrastText"
          sx={{ zIndex: 2 }}
          fontWeight={700}
          variant="h6"
        >
          Quer ser um cliente Fruki Bebidas?
        </Typography>
        <Typography
          color="primary.contrastText"
          sx={{ zIndex: 2 }}
          variant="body1"
          fontSize={20}
        >
          Faça o pré-cadastro! Em breve vamos entrar em contato com você.
        </Typography>
        <Box sx={{ ...center, justifyContent: 'flex-start', py: 2 }}>
          <Button color="primary" variant="contained">
            Quero ser Cliente
          </Button>
        </Box>
        <SVGComponent style={{ position: 'absolute', bottom: 0, right: 0 }} />
      </GridItem>
    </GridContainer>
  )
}

const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={185}
    height={360}
    viewBox="0 0 185 360"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_1138_2051)">
      <rect
        x={258.862}
        y={-74}
        width={366.086}
        height={366.086}
        transform="rotate(45 258.862 -74)"
        fill="#41B02A"
      />
    </g>
    <defs>
      <clipPath id="clip0_1138_2051">
        <rect width={185} height={360} fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export const FrukiMainGrid: React.FC<IProps> = ({}) => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Box
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {/*<Carousel*/}
        {/*  swipe={false}*/}
        {/*  autoPlay={false}*/}
        {/*  animation={undefined}*/}
        {/*  duration={0}*/}
        {/*  cycleNavigation={false}*/}
        {/*  navButtonsAlwaysInvisible={false}*/}
        {/*  navButtonsAlwaysVisible={visible}*/}
        {/*  indicators={visible}*/}
        {/*  indicatorIconButtonProps={{ style: { color: 'white', padding: '4px' } }}*/}
        {/*  activeIndicatorIconButtonProps={{ style: { color: 'black' } }}*/}
        {/*  indicatorContainerProps={{*/}
        {/*    style: { marginTop: '-34px', position: 'absolute', zIndex: 2 },*/}
        {/*  }}*/}
        {/*>*/}
        <NewComponent />
        {/*</Carousel>*/}
      </Box>
    </>
  )
}
