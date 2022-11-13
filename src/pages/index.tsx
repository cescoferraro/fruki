import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import * as React from 'react'
import { BrandsComponent } from '../components/brandsComponent'
import { FrukiFooter } from '../components/FrukiFooter'
import { FrukiHelpSection } from '../components/FrukiHelpSection'
import { FrukiMainGrid } from '../components/FrukiMainGrid'
import { FrukiTimelineSection } from '../components/FrukiTimelineSection'
import { useBrandsMemo } from '../components/useBrandsMemo'

const IndexPage: React.FC<PageProps<GatsbyTypes.HomeQueryQuery>> = (props) => {
  console.log(props)
  return (
    <>
      <FrukiMainGrid />
      <FrukiTimelineSection />
      <BrandsComponent brands={useBrandsMemo(props.data.brands)} />
      <FrukiHelpSection />
      <FrukiFooter brands={useBrandsMemo(props.data.brands)} />
    </>
  )
}

export default IndexPage

// noinspection JSUnusedGlobalSymbols
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
  query HomeQuery {
    home: mdx(internal: { contentFilePath: { eq: "/content/home.yml" } }) {
      fields {
        ...Fields
      }
      frontmatter {
        title
      }
    }
    ...SiteData
    ...BrandsFragmentQuery
    ...BlogsFragmentQuery
  }
`
