import { Box } from '@mui/material'
import { Button } from 'gatsby-material-ui-components'
import * as React from 'react'

export function BrandsComponent(props: { brands: Brand[] }) {
  return (
    <Box>
      {props.brands.map((s) => (
        <Box key={s.slug}>
          <Button to={s?.slug || ''}>{s.name}</Button>
        </Box>
      ))}
    </Box>
  )
}
