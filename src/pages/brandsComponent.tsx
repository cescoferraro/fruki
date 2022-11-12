import { Box } from '@mui/material'
import { Button } from 'gatsby-material-ui-components'
import * as React from 'react'

export function BrandsComponent(props: { brands: any[] }) {
  return (
    <Box>
      {props.brands.map((s) => (
        <Box key={s.slug}>
          <Button to={s?.slug?.replace('brand', 'marca')}>{s.name}</Button>
          <h2>{s.name}</h2>
        </Box>
      ))}
    </Box>
  )
}
