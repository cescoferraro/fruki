import { Box, IconButton, useTheme } from '@mui/material'
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
  const theme = useTheme()
  return (
    <Box sx={{ ...center }}>
      <IconButton
        disabled={disabled}
        onClick={onClick}
        sx={{
          background: theme.palette.secondary.main,
          color: 'white',
          ':hover': {
            background: theme.palette.secondary.main,
            opacity: 0.7,
          },
        }}
      >
        {children}
      </IconButton>
    </Box>
  )
}
