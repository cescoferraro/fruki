import { Box } from '@mui/material'
import { Desktop, Mobile } from 'components/FrukiContainer'
import React from 'react'

type Created1 = GatsbyTypes.HomeQueryQuery['banners']['edges'][number]['node']
export type Created = Created1['frontmatter'] & Created1['fields']

export function BannerComp(props: { a: Created }) {
  return (
    <>
      <Desktop breakpoint="sm">
        <img src={props.a?.desktop || ''} />
      </Desktop>
      <Mobile breakpoint="sm">
        <img src={props.a?.mobile || ''} />
      </Mobile>
    </>
  )
}
