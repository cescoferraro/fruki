import { Box, Typography, useTheme } from '@mui/material'
import { BlueSvg } from 'components/blueSvg'
import {
  Desktop,
  GridContainer,
  GridItem,
  Mobile,
} from 'components/FrukiContainer'
import { GreenSvg } from 'components/greenSvg'
import { SeloTopBig } from 'components/SeloTopBig'
import { useIsBigScreen } from 'components/useIsBigScreen'
import { Button } from 'gatsby-material-ui-components'
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'

function DesktopWorkForceRight() {
  return (
    <Desktop>
      <StaticImage
        style={{ width: '100%', height: '100%' }}
        alt="sdfk"
        src="../../static/assets/home/img_7.png"
      />
      <Box sx={{ flexBasis: '60%', height: '100%' }}>
        <BlueSvg />
        <SeloTopBig
          style={{
            position: 'absolute',
            right: 100,
            top: 'calc(50% - 100px)',
          }}
        />
        <GreenSvg />
      </Box>
    </Desktop>
  )
}

export function FrukiWorkForce() {
  const isBig = useIsBigScreen()
  const theme = useTheme()
  const background = theme.palette.primary.main
  return (
    <GridContainer sx={{ background }}>
      <GridItem
        padding="right"
        sx={{
          flexBasis: '50%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          background,
        }}
      >
        <Typography
          variant={isBig ? 'h1' : 'h5'}
          sx={{ fontWeight: 700 }}
          color="secondary.contrastText"
        >
          Construa sua história junto com a nossa
        </Typography>
        <Typography
          color="secondary.contrastText"
          variant="body1"
          fontSize={20}
        >
          A Fruki Bebidas é impulsionada por 900 profissionais apaixonados pelo
          que fazem: oferecer o melhor sabor.{' '}
        </Typography>
        <Box>
          <Button
            to="https://vagasfruki.gupy.io/"
            variant="contained"
            color="secondary"
            size="large"
          >
            Ver Oportunidades{' '}
          </Button>
        </Box>
      </GridItem>
      <GridItem sx={{ flexBasis: '50%', py: 0, background }} padding="none">
        <Box height={40} />
        <Box sx={{ width: '100%', height: '100%' }}>
          <Desktop sx={{ width: '30%', height: '100%' }}>
            <StaticImage
              style={{ width: '100%', height: '100%' }}
              alt="sdfk"
              src="../../static/assets/home/img_14.png"
            />
          </Desktop>
          <Mobile sx={{ width: '95%' }}>
            <StaticImage
              style={{ width: '100%', zIndex: 100 }}
              alt="sdfk"
              src="../../static/assets/home/img_14.png"
            />
          </Mobile>
        </Box>
        {/*<Box*/}
        {/*  sx={{*/}
        {/*    backgroundImage: !isBig ? `url(${image14})` : '',*/}
        {/*    backgroundSize: 'cover',*/}
        {/*    minHeight: isBig ? 'unset' : '550px',*/}
        {/*    ml: !isBig ? 2 : 0,*/}
        {/*    flexGrow: 1,*/}
        {/*    display: 'flex',*/}
        {/*    zIndex: 2,*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <SeloTop*/}
        {/*    id={'test'}*/}
        {/*    style={{*/}
        {/*      display: !isBig ? 'block' : 'none',*/}
        {/*      position: 'absolute',*/}
        {/*      top: 40,*/}
        {/*      zIndex: 10,*/}
        {/*    }}*/}
        {/*  />*/}
        <Desktop>
          <DesktopWorkForceRight />
        </Desktop>
        {/*</Box>*/}
        <Mobile>
          <SVGComponent
            style={{
              position: 'absolute',
              bottom: 0,
              zIndex: 0,
            }}
          />
        </Mobile>
      </GridItem>
    </GridContainer>
  )
}
const SVGComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={375} height={307} viewBox="0 0 375 307" fill="none" {...props}>
    <rect width={375} height={307} fill="#41B02A" />
  </svg>
)
