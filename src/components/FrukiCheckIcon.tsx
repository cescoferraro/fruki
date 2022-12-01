import React, { SVGProps } from 'react'

export const FrukiCheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={80}
    height={80}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={80} height={80} rx={40} fill="#5F99AF" />
    <path
      d="m30 40.8 6.207 7.2L50 32"
      stroke="#fff"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
