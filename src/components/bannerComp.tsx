import { Box } from '@mui/material'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

type Created1 = GatsbyTypes.HomeQueryQuery['banners']['edges'][number]['node']
export type Created = Created1['frontmatter'] & Created1['fields']

export function BannerComp(props: { a: Created }) {
  return (
    <Box>
      <img src={props.a?.desktop || ''} />
    </Box>
  )
}
