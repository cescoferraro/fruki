import { Box, LinkProps } from '@mui/material'
import { Link } from 'gatsby-theme-material-ui'
import React from 'react'

interface IProps extends LinkProps {
  to?: string
}

export const FrukiLink = (props: IProps) => {
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Link {...props} sx={{ ml: { md: 4, lg: 6 }, ...props.sx }} to={props.to}>
        {props.children}
      </Link>
    </Box>
  )
}