import { useMediaQuery, useTheme } from '@mui/material'
import * as React from 'react'

export function Addition() {
  const isMd = useMediaQuery(useTheme().breakpoints.only('md'))
  return (
    <svg
      style={{
        position: 'absolute',
        bottom: 0,
        left: isMd ? -80 : -40,
      }}
      width="147"
      height="400"
      viewBox="0 400 147 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-532.903 336.726L42.2016 911.83L57.8135 896.218C177.031 777.001 174.94 583.312 54.7367 463.108L-520.368 -111.996L-535.98 -96.3842C-655.207 21.4035 -653.826 215.803 -532.903 336.726Z"
        fill="#41B02A"
      />
    </svg>
  )
}
