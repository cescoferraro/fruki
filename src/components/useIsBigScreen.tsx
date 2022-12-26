import { useMediaQuery, useTheme } from '@mui/material'

export function useIsBigScreen(): boolean {
  return useMediaQuery(useTheme().breakpoints.up('md'), {})
}
