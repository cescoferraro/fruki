import { BrandPageComponent } from 'components/brandPageComponent'
import { graphql, PageProps } from 'gatsby'
import * as React from 'react'
import { useBrandsMemo } from '../components/useBrandsMemo'

const BrandsPage: React.FC<PageProps<GatsbyTypes.BrandsPageListQueryQuery>> = (
  props
) => {
  const brands = useBrandsMemo(props.data.brands)
  return <BrandPageComponent brands={brands} />
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
    background

    #      childImageSharp {
    #        gatsbyImageData(width: 800)
    #      }
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
