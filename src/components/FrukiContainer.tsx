import { Box, Container, SxProps } from '@mui/material'
import { ResponsiveStyleValue } from '@mui/system/styleFunctionSx/styleFunctionSx'
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
  height = { xs: 400, sm: 400, md: 800 },
}: {
  height?: ResponsiveStyleValue<number>
  sx?: SxProps
  children?: React.ReactNode
}) => {
  return (
    <Box
      sx={{
        flexBasis: '50%',
        position: 'relative',
        height: height,
        maxHeight: height,
        minHeight: height,
        ...sx,
      }}
    >
      {children}
    </Box>
  )
}
