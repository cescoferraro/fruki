import { ButtonBase } from '@mui/material'
import { Desktop, Mobile } from 'components/FrukiContainer'
import { navigate } from 'gatsby'
import React from 'react'

type Created1 = GatsbyTypes.HomeQueryQuery['banners']['edges'][number]['node']
export type Created = Created1['frontmatter'] & Created1['fields']

export function BannerComp(props: { a: Created }) {
  return (
    <>
      <Desktop breakpoint="sm">
        <ButtonBase onClick={() => navigate(props.a?.link)}>
          <img src={props.a?.desktop || ''} />
        </ButtonBase>
      </Desktop>
      <Mobile breakpoint="sm">
        <ButtonBase onClick={() => navigate(props.a?.link)}>
          <img src={props.a?.mobile || ''} />
        </ButtonBase>
      </Mobile>
    </>
  )
}
