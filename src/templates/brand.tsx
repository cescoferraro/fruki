import { graphql, PageProps } from 'gatsby'
import { Button } from 'gatsby-theme-material-ui'
import React from 'react'

const BrandPage: React.FC<PageProps<GatsbyTypes.BrandPageQueryQuery>> = (
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
  fragment ProductsByBrandQueryFragment on Query {
    products: allMdx(
      filter: {
        internal: { contentFilePath: { regex: "/content/produto/" } }
        frontmatter: { brand: { eq: $brand } }
      }
      sort: { frontmatter: { date: ASC } }
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
  query BrandPageQuery($brand: String) {
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
    ...ProductsByBrandQueryFragment
  }
`
