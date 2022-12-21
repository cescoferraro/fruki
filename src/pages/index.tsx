import { Box, Button, Typography } from '@mui/material'
import image9 from 'assets/home/img_10.png'
import { BrandsComponent } from 'components/brandsComponent'
import { center } from 'components/center'
import { defaultPl } from 'components/defaultPl'
import { FrukiAppBar } from 'components/FrukiAppBar'
import { FrukiBlogSection } from 'components/FrukiBlogSection'
import { FrukiContact } from 'components/frukiContact'
import { FrukiContainer } from 'components/FrukiContainer'
import { FrukiFooter } from 'components/FrukiFooter'
import { FrukiFuture } from 'components/FrukiFuture'
import { FrukiHistory } from 'components/FrukiHistory'
import { FrukiMainGrid } from 'components/FrukiMainGrid'
import { FrukiWorkForce } from 'components/frukiWorkForce'
import { NewGeneric } from 'components/newGeneric'
import { useBrandsMemo } from 'components/useBrandsMemo'
import { useIsBigScreen } from 'components/useIsBigScreen'
import { usePostMemo } from 'components/usePostMemo'
import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import * as React from 'react'

const IndexPage: React.FC<PageProps<GatsbyTypes.HomeQueryQuery>> = ({
  data: { brands, home, posts },
}) => {
  const allBrands = useBrandsMemo(brands)
  const allPosts = usePostMemo(posts)
  return (
    <>
      <FrukiAppBar />
      <FrukiContainer>
        <FrukiMainGrid home={home} />
        <FrukiHistory />
        <BrandsComponent brands={allBrands} />
        <FrukiFuture action={'Saiba mais'} />
        <FrukiBlogSection posts={allPosts} />
        <FrukiContact />
        <FrukiWorkForce />
        <FrukiFooter brands={allBrands} />
      </FrukiContainer>
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  fragment SiteData on Query {
    site {
      siteMetadata {
        title
      }
    }
  }
  fragment Fields on MdxFields {
    slug
  }
  fragment HomeFragment on ContentYaml {
    title
    caption
  }
  fragment HomeQueryFragment on Query {
    home: contentYaml(name: { regex: "/home/" }) {
      ...HomeFragment
    }
  }
  query HomeQuery {
    ...HomeQueryFragment
    ...SiteData
    ...BrandsFragmentQuery
    ...BlogsFragmentQuery
  }
`
