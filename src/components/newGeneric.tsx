import { SxProps } from '@mui/material'
import { ResponsiveStyleValue } from '@mui/system/styleFunctionSx/styleFunctionSx'
import { GridContainer, GridItem } from 'components/FrukiContainer'
import * as React from 'react'

export function NewGeneric({
  right,
  left,
  sx,
  height,
}: {
  sx?: SxProps
  right: {
    sx?: SxProps
    element?: React.ReactNode
  }
  height?: ResponsiveStyleValue<number>
  left: {
    sx?: SxProps
    element?: React.ReactNode
  }
}) {
  return (
    <GridContainer sx={sx}>
      <GridItem sx={left.sx} height={height}>
        {left.element}
      </GridItem>
      <GridItem sx={right.sx} height={height}>
        {right.element}
      </GridItem>
    </GridContainer>
  )
}
