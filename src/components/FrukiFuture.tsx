import { Box, SxProps, Typography, useTheme } from '@mui/material'
import { ResponsiveStyleValue } from '@mui/system/styleFunctionSx/styleFunctionSx'
import image6 from 'assets/home/img_6.png'
import { GridContainer, GridItem } from 'components/FrukiContainer'
import { useIsBigScreen } from 'components/useIsBigScreen'
import { Button } from 'gatsby-material-ui-components'
import * as React from 'react'
import { SVGProps } from 'react'

export const WhiteDesktopLeaf = (props: SVGProps<SVGSVGElement>) => (
  <svg width="134" height="175" viewBox="0 0 134 175" fill="none" {...props}>
    <path
      d="M0 120C0 53.7258 53.7258 0 120 0H134V55C134 121.274 80.2742 175 14 175H0V120Z"
      fill="white"
    />
  </svg>
)
export const WhiteMobileLeaf = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={63}
    height={83}
    viewBox="0 0 63 83"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 63C0 28.2061 28.2061 0 63 0V20C63 54.7939 34.7939 83 0 83V63Z"
      fill="white"
    />
  </svg>
)

export const DarkGreenMobileLeaf = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={59}
    height={118}
    viewBox="0 0 59 118"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M-31 90C-31 40.2944 9.29437 0 59 0V28C59 77.7056 18.7056 118 -31 118V90Z"
      fill="#034638"
    />
  </svg>
)

export function FrukiFuture({
  title = 'Um futuro criado por todos nós ',
  text,
  action,
  height,
  leftSX,
}: {
  title?: string
  text?: string | React.ReactNode
  leftSX?: SxProps
  height?: ResponsiveStyleValue<number>
  action: string
}) {
  const isBig = useIsBigScreen()
  const { palette } = useTheme()
  const background = palette.secondary.main
  return (
    <GridContainer sx={{ background }}>
      <GridItem height={height} sx={{ background, ...leftSX }}>
        <Typography
          variant={isBig ? 'h1' : 'h5'}
          fontWeight={700}
          sx={{ zIndex: 3 }}
          color="secondary.contrastText"
        >
          {title}
        </Typography>
        <Typography
          sx={{ py: 2, zIndex: 3 }}
          color="secondary.contrastText"
          variant="body1"
          fontSize={20}
        >
          {text}
        </Typography>
        {action && (
          <Box>
            <Button
              to="/planetas-e-pessoas"
              variant="contained"
              color="primary"
              size="large"
            >
              {action}
            </Button>
          </Box>
        )}

        <DarkgreenLeaf
          style={{
            display: isBig ? 'block' : 'none',
            position: 'absolute',
            bottom: 200,
            left: 0,
          }}
        />
      </GridItem>
      <GridItem
        height={height}
        sx={{
          background,
          backgroundImage: `url(${image6})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderWidth: 2,
          borderBottomLeftRadius: {
            xs: 240,
            sm: 240,
            md: 440,
          },
        }}
      >
        <DarkGreenMobileLeaf
          style={{
            display: isBig ? 'none' : 'block',
            position: 'absolute',
            bottom: 0,
            left: 0,
            // zIndex: -1,
          }}
        />

        <WhiteMobileLeaf
          style={{
            display: isBig ? 'none' : 'block',
            position: 'absolute',
            top: 10,
            right: 40,
          }}
        />
        <WhiteDesktopLeaf
          style={{
            display: isBig ? 'block' : 'none',
            position: 'absolute',
            top: 105,
            left: -50,
          }}
        />

        <BlueMobileLeaf
          style={{
            display: isBig ? 'none' : 'block',
            position: 'absolute',
            bottom: -70,
            right: 0,
          }}
        />
        <BlueDesktopLeaf
          style={{
            display: isBig ? 'block' : 'none',
            position: 'absolute',
            bottom: 70,
            right: 0,
          }}
        />
      </GridItem>
    </GridContainer>
  )
}

export const BlueDesktopLeaf = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={159}
    height={261}
    viewBox="0 0 159 261"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 199C0 86.3339 91.3339 -5 204 -5V57C204 169.666 112.666 261 0 261V199Z"
      fill="#5F99AF"
    />
  </svg>
)
export const BlueMobileLeaf = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={42}
    height={105}
    viewBox="0 0 42 105"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 77C0 27.2944 40.2944 -13 90 -13V15C90 64.7056 49.7056 105 0 105V77Z"
      fill="#5F99AF"
    />
  </svg>
)
export const DarkgreenLeaf = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={156}
    height={316}
    viewBox="0 0 156 316"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M-44 200C-44 89.5431 45.5431 0 156 0V120C156 230.457 66.4569 320 -44 320V200Z"
      fill="#034638"
    />
  </svg>
)
