import {
  Box,
  BoxProps,
  Breakpoint,
  Container,
  styled,
  SxProps,
} from '@mui/material'
import { ResponsiveStyleValue } from '@mui/system/styleFunctionSx/styleFunctionSx'
import { ReactElement } from 'react'
import * as React from 'react'

export const FrukiContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container
      sx={{
        padding: '0px !important',
        maxWidth: {
          xs: '100%',
          sm: '100%',
          md: '100%',
          lg: '100%',
          // xl: 1440,
          xl: '100%',
        },
        overflowX: 'hidden',
      }}
    >
      {children}
    </Container>
  )
}

export const GridContainer = ({
  children,
  additional,
  sx,
}: {
  additional?: React.ReactNode
  children?: React.ReactNode
  sx?: SxProps
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column-reverse',
          sm: 'column-reverse',
          md: 'row',
        },
        ...sx,
      }}
    >
      {children}
      {additional}
    </Box>
  )
}
export const GridItem = ({
  children,
  sx,
  height = { xs: 400, sm: 400, md: 720 },
  padding = 'left',
}: {
  height?: ResponsiveStyleValue<number>
  sx?: SxProps
  children?: React.ReactNode
  padding?: 'only-left' | 'left' | 'right' | 'only-right' | 'none'
}) => {
  const paddings = {
    [padding.includes('left') ? 'pl' : 'pr']:
      padding === 'none' || padding === 'only-right'
        ? {}
        : {
            xs: 2,
            sm: 2,
            md: 8,
            lg: 22,
          },
    [padding.includes('left') ? 'pr' : 'pl']:
      padding === 'none' || padding === 'only-left'
        ? {}
        : {
            xs: 2,
            sm: 2,
            md: 8,
            lg: 13,
          },
  }
  return (
    <Box
      sx={{
        // background: theme.breakpoints.down('md') ? 'red' : 'blue',
        flexBasis: '50%',
        position: 'relative',
        height: height,
        minHeight: height,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        py: padding === 'none' ? 0 : 2,
        ...paddings,
        ...sx,
      }}
    >
      {children}
    </Box>
  )
}
export interface ShowerProps extends BoxProps {
  breakpoint?: Breakpoint
}
export const Mobile = (props: ShowerProps): ReactElement => {
  return <DisplayController mode={'mobile'} {...props} />
}
export const Desktop = (props: ShowerProps): ReactElement => {
  return <DisplayController mode={'desktop'} {...props} />
}

export const DisplayController = styled(Box)<{
  breakpoint?: Breakpoint
  mode: 'mobile' | 'desktop'
}>(({ theme, mode = 'desktop', breakpoint = 'md' }) => {
  return {
    [theme.breakpoints.down(breakpoint)]: {
      display: mode === 'mobile' ? 'block' : 'none',
    },
    [theme.breakpoints.up(breakpoint)]: {
      display: mode === 'desktop' ? 'block' : 'none',
    },
  }
})
