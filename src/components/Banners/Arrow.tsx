import { Box, IconButton } from '@mui/material'
import { center } from 'components/center'
import React from 'react'

export function Arrow({
  children,
  disabled,
  onClick,
}: {
  children: React.ReactNode
  disabled: boolean
  onClick: VoidFunction
}) {
  return (
    <Box sx={{ ...center }}>
      <IconButton disabled={disabled} onClick={onClick}>
        {children}
      </IconButton>
    </Box>
  )
}
