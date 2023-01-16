import { Button, SxProps } from '@mui/material'
import React from 'react'

export function OndeEncontrar({
  background,
  onClick,
  sx,
}: {
  background: boolean
  onClick: () => void
  sx?: SxProps
}) {
  return (
    <Button
      sx={{
        display: {
          xs: 'none',
          sm: 'none',
          md: 'none',
          lg: 'inline-flex',
        },
        mr: 1,
        color: background ? 'white' : 'unset',
        fontSize: 16,
        ...sx,
      }}
      onClick={onClick}
      startIcon={
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.16699 8.33333C4.16699 12.7083 10.0003 17.5 10.0003 17.5C10.0003 17.5 15.8337 12.7083 15.8337 8.33333C15.8337 5.11167 13.222 2.5 10.0003 2.5C6.77866 2.5 4.16699 5.11167 4.16699 8.33333ZM7.50033 8.33333C7.50033 9.71417 8.61949 10.8333 10.0003 10.8333C11.3812 10.8333 12.5003 9.71417 12.5003 8.33333C12.5003 6.9525 11.3812 5.83333 10.0003 5.83333C8.61949 5.83333 7.50033 6.9525 7.50033 8.33333Z"
            fill="#41B02A"
          />
        </svg>
      }
    >
      Onde encontrar
    </Button>
  )
}
