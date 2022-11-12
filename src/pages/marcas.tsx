import { graphql, PageProps } from 'gatsby'
import * as React from 'react'
import { BrandsComponent } from '../components/brandsComponent'

const BrandsPage: React.FC<PageProps<Queries.BrandsPageListQueryQuery>> = (
  props
) => {
  return (
    <BrandsComponent
      brands={props.data.brands.edges.map((d) => ({
        ...d.node.fields,
        ...d.node.frontmatter,
      }))}
    />
  )
}

export default BrandsPage

export const pageQuery = graphql`
  query BrandsPageListQuery {
    brands: allMdx(
      filter: { internal: { contentFilePath: { regex: "/content/marca/" } } }
      sort: [{ fields: { slug: ASC } }]
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            image
            name
            logo
          }
        }
      }
    }
  }
`
