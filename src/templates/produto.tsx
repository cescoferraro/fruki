import { graphql, PageProps } from 'gatsby'
import { Button } from 'gatsby-material-ui-components'
import React from 'react'

const ProdutoPage: React.FC<PageProps<Queries.ProductPageQueryQuery>> = (
  props
): React.ReactElement => {
  console.log(props)
  return (
    <React.Fragment>
      <h2>Produto {props.data.product?.frontmatter?.name}</h2>
      <Button to={props.data.brand?.fields?.slug || ''}>
        {`Marca ${props.data.brand?.frontmatter?.name || ''}`}
      </Button>
    </React.Fragment>
  )
}

export default ProdutoPage

export const pageQuery = graphql`
  query ProductPageQuery($productName: String, $brand: String) {
    brand: mdx(frontmatter: { path: { eq: $brand } }) {
      fields {
        slug
      }
      frontmatter {
        path
        name
        brand
      }
    }
    product: mdx(frontmatter: { path: { eq: $productName } }) {
      fields {
        slug
      }
      frontmatter {
        path
        name
        brand
      }
    }
  }
`
