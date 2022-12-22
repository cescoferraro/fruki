import {
  Box,
  SxProps,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import * as React from 'react'

export const sx1: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}

export function FrukiCNPJComponent() {
  const isSmall = useMediaQuery(useTheme().breakpoints.down('sm'))
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        pb: isSmall ? 3 : 0,
        pt: 4,
      }}
    >
      <Typography sx={sx1} variant="bodyRegular" color="grey.700">
        BEBIDAS FRUKI S.A.
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: isSmall ? 'row' : 'column' }}>
        <Typography sx={sx1} variant="bodyRegular" color="grey.400">
          {`CNPJ `}
        </Typography>
        <Typography
          sx={{ ...sx1, ml: isSmall ? 1 : 0 }}
          variant="body1"
          color="primary"
        >
          {`   87.315.099/0001-07`}
        </Typography>
      </Box>
    </Box>
  )
}
