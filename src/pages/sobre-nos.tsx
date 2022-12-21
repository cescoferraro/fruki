import { AboutMain } from 'components/about-main'
import { LocationsSlider } from 'components/Banners/LocationsSlider'
import { FrukiPourpose } from 'components/fruki-pourpose'
import { FrukiContainer } from 'components/FrukiContainer'
import { FrukiFooter } from 'components/FrukiFooter'
import { FrukiWorkForceHistory } from 'components/frukiWorkForceHistory'
import { useBrandsMemo } from 'components/useBrandsMemo'
import { graphql, PageProps } from 'gatsby'
import * as React from 'react'
import { FrukiAppBar } from '../components/FrukiAppBar'

const AboutUsPage: React.FC<
  PageProps<GatsbyTypes.LocationPageListQueryQuery>
> = ({ data }) => {
  const locations = data.locations.edges.map((e) => e.node.frontmatter)
  const brands = useBrandsMemo(data.brands)
  return (
    <>
      <FrukiAppBar />
      <FrukiContainer>
        <AboutMain />

        <FrukiPourpose />
        <FrukiWorkForceHistory />
        <LocationsSlider locations={locations} />
        <FrukiFooter brands={brands} />
      </FrukiContainer>
    </>
  )
}

export default AboutUsPage
export const pageQuery = graphql`
  fragment LocationFrontMatter on MdxFrontmatter {
    date(formatString: "MMMM DD, YYYY")
    image
    title
    description
  }
  fragment Fields on MdxFields {
    slug
  }
  fragment LocationFragment on MdxConnection {
    edges {
      node {
        excerpt
        fields {
          ...Fields
        }
        frontmatter {
          ...LocationFrontMatter
        }
      }
    }
  }

  fragment LocationFragmentQuery on Query {
    locations: allMdx(
      filter: { internal: { contentFilePath: { regex: "/content/location/" } } }
      sort: [{ fields: { slug: ASC } }]
    ) {
      ...LocationFragment
    }
  }
  query LocationPageListQuery {
    ...LocationFragmentQuery
    ...BrandsFragmentQuery
  }
`
