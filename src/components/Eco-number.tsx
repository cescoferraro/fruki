import { Box, Typography } from '@mui/material'
import { center } from 'components/center'
import * as React from 'react'

export function EcoNumber({
  number,
  label,
}: {
  label: string
  number: number
}) {
  return (
    <Box display="flex" sx={{ ...center, pt: 2 }}>
      <Box>
        <Typography variant="h1" fontSize={120} color="secondary">
          {number.toLocaleString('pt-BR')}
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column">
        <Typography variant="h1" fontSize={80} sx={{ color: '#5F99AF' }}>
          kg
        </Typography>
        <Typography color="primary.contrastText" fontSize={24} fontWeight={700}>
          {label}
        </Typography>
      </Box>
    </Box>
  )
}
