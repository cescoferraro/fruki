import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import * as React from 'react'
import { BrandsComponent } from '../components/brandsComponent'
import { FrukiFooter } from '../components/FrukiFooter'
import { FrukiHelpSection } from '../components/FrukiHelpSection'
import { FrukiMainGrid } from '../components/FrukiMainGrid'
import { FrukiTimelineSection } from '../components/FrukiTimelineSection'
import { useBrandsMemo } from '../components/useBrandsMemo'

const IndexPage: React.FC<PageProps<GatsbyTypes.HomeQueryQuery>> = ({
  data: { brands, home },
}) => {
  const allBrands = useBrandsMemo(brands)
  return (
    <>
      <FrukiMainGrid home={home} />
      <FrukiTimelineSection home={home} />
      <BrandsComponent brands={allBrands} />
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
