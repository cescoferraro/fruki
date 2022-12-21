import { Box, LinkProps, Link } from '@mui/material'
import { Link as GatsbyLink } from 'gatsby-theme-material-ui'
import React from 'react'

interface IProps extends LinkProps {
  to?: string
}

export const FrukiAppBarLink = (props: IProps) => {
  const url = typeof window !== 'undefined' ? window.location.href : ''
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Link
        variant="button"
        component={GatsbyLink}
        {...(props as LinkProps)}
        sx={{
          whiteSpace: 'nowrap',
          minWidth: 'auto',
          ml: { md: 1.5, lg: 2 },
          textDecoration: 'none',
          fontWeight: url.includes(props?.to || 'kdsjfn') ? 700 : 400,
          ...props.sx,
        }}
        to={props.to}
      >
        {props.children}
      </Link>
    </Box>
  )
}
