import { Stack, styled } from '@mui/material'

export const Stacked = styled(Stack)`
  padding-bottom: 10px;
  scrollbar-width: none; /* Firefox */

  && {
    ::-webkit-scrollbar {
      display: none;
    }
  }
`
