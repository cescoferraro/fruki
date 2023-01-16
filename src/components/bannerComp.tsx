import { Box, ButtonBase } from '@mui/material'
import { Desktop, Mobile } from 'components/FrukiContainer'
import { navigate } from 'gatsby'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'

type Created1 = GatsbyTypes.HomeQueryQuery['banners']['edges'][number]['node']
export type Created = Created1['frontmatter'] & Created1['fields']

export function BannerComp(props: { a: Created }) {
  return (
    <>
      <Desktop breakpoint="sm">
        <ButtonBase onClick={() => navigate(props.a?.link || '')}>
          <GatsbyImage
            alt={'desktop'}
            image={
              getImage(props.a?.desktop?.childImageSharp!!) as IGatsbyImageData
            }
          />
        </ButtonBase>
      </Desktop>
      <Mobile breakpoint="sm">
        <ButtonBase onClick={() => navigate(props.a?.link || '')}>
          <GatsbyImage
            alt={'desktop'}
            image={
              getImage(props.a?.mobile?.childImageSharp!!) as IGatsbyImageData
            }
          />
        </ButtonBase>
      </Mobile>
    </>
  )
}
