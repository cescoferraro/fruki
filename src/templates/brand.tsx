import { graphql, PageProps } from 'gatsby'
import { Button } from 'gatsby-theme-material-ui'
import React from 'react'

const BrandPage: React.FC<PageProps<Queries.BrandsPageQueryQuery>> = (
  props
): React.ReactElement => {
  console.log(props)
  return (
    <React.Fragment>
      {props.data?.products?.nodes
        .map((n) => ({
          ...n.fields,
          ...n.frontmatter,
        }))
        .map((s) => {
          return <Button to={s.slug || ''}>{s.name}</Button>
        })}
    </React.Fragment>
  )
}
export default BrandPage

export const pageQuery = graphql`
  query BrandsPageQuery($brand: String) {
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
    products: allMdx(
      filter: {
        internal: { contentFilePath: { regex: "/content/produto/" } }
        frontmatter: { brand: { eq: $brand } }
      }
      sort: { frontmatter: { date: ASC } }
      limit: 1000
    ) {
      nodes {
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
  }
`
