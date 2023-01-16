import { Button } from '@mui/material'
import React from 'react'

export function SejaClient(props: { onClick: () => void; big: boolean }) {
  return (
    <Button
      onClick={props.onClick}
      sx={{
        whiteSpace: 'nowrap',
        minWidth: 'auto',

        borderRadius: 20,
        textTransform: 'none',
        fontWeight: 700,
      }}
      size="medium"
      variant="contained"
      color="secondary"
    >
      {props.big ? 'Quero ser Cliente' : 'Seja Cliente'}
    </Button>
  )
}
