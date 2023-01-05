import { useMediaQuery, useTheme } from '@mui/material'

export function useIsBigScreen(): boolean {
  const theme = useTheme()
  return useMediaQuery(theme.breakpoints.up('md'))
}
