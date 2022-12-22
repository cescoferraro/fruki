import { FrukiAppBar } from 'components/FrukiAppBar'
import { FrukiContainer } from 'components/FrukiContainer'
import { FrukiFooter } from 'components/FrukiFooter'
import { graphql, PageProps } from 'gatsby'
import * as React from 'react'
import { BrandsComponent } from '../components/brandsComponent'
import { useBrandsMemo } from '../components/useBrandsMemo'

const BrandsPage: React.FC<PageProps<GatsbyTypes.BrandsPageListQueryQuery>> = (
  props
) => {
  const brands = useBrandsMemo(props.data.brands)
  return (
    <>
      <FrukiAppBar />
      <FrukiContainer>
        <BrandsComponent brands={brands} />
        <FrukiFooter brands={brands} />
      </FrukiContainer>
    </>
  )
}

export default BrandsPage

export const pageQuery = graphql`
  fragment BrandsFrontMatter on MdxFrontmatter {
    date(formatString: "MMMM DD, YYYY")
    title
    description
    image
    name
    logo
  }
  fragment Fields on MdxFields {
    slug
  }
  fragment BrandsFragment on MdxConnection {
    edges {
      node {
        excerpt
        fields {
          ...Fields
        }
        frontmatter {
          ...BrandsFrontMatter
        }
      }
    }
  }

  fragment BrandsFragmentQuery on Query {
    brands: allMdx(
      filter: { internal: { contentFilePath: { regex: "/content/marca/" } } }
      sort: [{ frontmatter: { date: ASC } }]
    ) {
      ...BrandsFragment
    }
  }
  query BrandsPageListQuery {
    ...BrandsFragmentQuery
  }
`
