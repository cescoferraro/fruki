import { FrukiAppBar } from 'components/FrukiAppBar'
import { FrukiContainer } from 'components/FrukiContainer'
import { graphql, PageProps } from 'gatsby'
import { Button } from 'gatsby-material-ui-components'
import React from 'react'

const ProdutoPage: React.FC<
  PageProps<GatsbyTypes.ProductByBrandPageQueryQuery>
> = (props): React.ReactElement => {
  console.log(props)
  return (
    <>
      <FrukiAppBar />
      <FrukiContainer>
        <h2>Produto {props.data.product?.frontmatter?.name}</h2>
        <Button to={props.data.brand?.fields?.slug || ''}>
          {`Marca ${props.data.brand?.frontmatter?.name || ''}`}
        </Button>
      </FrukiContainer>
    </>
  )
}

export default ProdutoPage

export const pageQuery = graphql`
  fragment ProductFrontMatter on MdxFrontmatter {
    name
    brand
  }
  query ProductByBrandPageQuery($productName: String, $brand: String) {
    brand: mdx(frontmatter: { path: { eq: $brand } }) {
      fields {
        slug
      }
      frontmatter {
        ...ProductFrontMatter
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
