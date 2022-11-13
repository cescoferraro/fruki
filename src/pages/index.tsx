import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import * as React from 'react'
import { BrandsComponent } from '../components/brandsComponent'
import { FrukiBlogSection } from '../components/FrukiBlogSection'
import { FrukiFooter } from '../components/FrukiFooter'
import { FrukiHelpSection } from '../components/FrukiHelpSection'
import { FrukiMainGrid } from '../components/FrukiMainGrid'
import { FrukiTimelineSection } from '../components/FrukiTimelineSection'
import { useBrandsMemo } from '../components/useBrandsMemo'
import { usePostMemo } from '../components/usePostMemo'

const center: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const IndexPage: React.FC<PageProps<GatsbyTypes.HomeQueryQuery>> = ({
  data: { brands, home, posts },
}) => {
  const allBrands = useBrandsMemo(brands)
  const allPosts = usePostMemo(posts)
  return (
    <>
      <FrukiMainGrid home={home} />
      <FrukiTimelineSection home={home} />
      <BrandsComponent brands={allBrands} />
      <FrukiHelpSection />
      <FrukiBlogSection posts={allPosts} />
      <FrukiHelpSection />
      <FrukiFooter brands={allBrands} />
    </>
  )
}

export default IndexPage

export const ref = graphql`
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
`

export const pageQuery = graphql`
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
