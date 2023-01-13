import { Box, Button, Typography, useTheme } from '@mui/material'
import { center } from 'components/center'
import {
  Desktop,
  GridContainer,
  GridItem,
  Mobile,
} from 'components/FrukiContainer'
import { GreenArrowLeft } from 'components/GreenArrowLeft'
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { SVGProps } from 'react'

interface IProps {
  home: GatsbyTypes.HomeFragmentFragment | null
}

const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={375}
    height={596}
    viewBox="0 0 375 596"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M-165 479.999C-165 214.903 49.9033 -0.000732422 315 -0.000732422H375V595.999H-165V479.999Z"
      fill="#5F99AF"
    />
  </svg>
)

function DesktopGrid(props: { left: number }) {
  return (
    <GridItem
      padding="none"
      sx={{
        position: 'relative',
        flexBasis: `${props.left}%`,
        py: 0,
        // maxWidth: isBig ? '60vw' : '100vw',
        justifyContent: 'flex-end',
      }}
    >
      <Desktop>
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
        <StaticImage
          src={`../../static/assets/home/img_hey.png`}
          alt=""
          objectFit={'fill'}
          onLoad={() => {
            console.log('loade')
          }}
          style={{
            height: '680px',
            zIndex: 2,
            objectFit: 'fill',
          }}
        />
      </Desktop>
      <Mobile>
        <SVGComponent
          style={{
            position: 'absolute',
            left: 0,
            bottom: -400,
          }}
        />
        <StaticImage
          src={`../../static/assets/home/img_15.png`}
          alt=""
          style={{
            backgroundColor: 'transparent',
            zIndex: 2,
            // height: 410,
            position: 'absolute',
            top: 0,
            width: '100%',
          }}
        />
      </Mobile>
    </GridItem>
  )
}

export const FrukiMainGrid: React.FC<IProps> = ({}) => {
  // const isBig = useIsBigScreen()
  const theme = useTheme()
  const left = 55
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
      <DesktopGrid left={left} />
      <GridItem
        padding="none"
        sx={{
          flexBasis: `${100 - left}%`,
          justifyContent: 'center',
          background: '#5F99AF',
          px: {
            xs: 4,
            sm: 4,
            md: 4,
            lg: 8,
          },
        }}
      >
        <Typography
          variant={'h1'}
          sx={{ fontWeight: 700, zIndex: 2, py: 2 }}
          color="primary.contrastText"
        >
          Paixão por oferecer o melhor sabor
        </Typography>
        <Typography
          color="primary.contrastText"
          sx={{ zIndex: 2, py: 2 }}
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
        <GreenArrowLeft
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
          }}
        />
      </GridItem>
    </GridContainer>
  )
}
