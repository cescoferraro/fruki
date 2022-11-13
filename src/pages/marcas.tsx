import { graphql, PageProps } from 'gatsby'
import * as React from 'react'
import { useBrandsMemo } from '../components/useBrandsMemo'
import { BrandsComponent } from '../components/brandsComponent'

const BrandsPage: React.FC<PageProps<GatsbyTypes.BrandsPageListQueryQuery>> = (
  props
) => {
  const brands = useBrandsMemo(props.data.brands)
  return <BrandsComponent brands={brands} />
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
      sort: [{ fields: { slug: ASC } }]
    ) {
      ...BrandsFragment
    }
  }
  query BrandsPageListQuery {
    ...BrandsFragmentQuery
  }
`
