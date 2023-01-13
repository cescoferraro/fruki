import { BrandPageComponent } from 'components/brandPageComponent'
import { useBrandsMemo } from 'components/useBrandsMemo'
import { graphql, PageProps } from 'gatsby'
import React, { useMemo } from 'react'

const BrandPage: React.FC<PageProps<GatsbyTypes.BrandPageQueryQuery>> = ({
  data: { brand, products, brands, ...props },
}): React.ReactElement => {
  console.log(props)
  return (
    <BrandPageComponent
      brands={useBrandsMemo(brands)}
      brand={useMemo(
        () => ({
          ...(brand?.fields as GatsbyTypes.FieldsFragment),
          ...(brand?.frontmatter as GatsbyTypes.BrandsFrontMatterFragment),
        }),
        [brand]
      )}
      products={useMemo(
        () =>
          products.nodes.map((a) => ({
            ...(a?.fields as GatsbyTypes.FieldsFragment),
            ...(a?.frontmatter as GatsbyTypes.ProductFrontMatterFragment),
          })),
        [products]
      ).map((s) => s)}
    />
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
          ...ProductFrontMatter
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
        ...BrandsFrontMatter
      }
    }
    sdf: markdownRemark(frontmatter: { path: { eq: $brand } }) {
      frontmatter {
        background
      }
    }
    ...ProductsByBrandQueryFragment
    ...BrandsFragmentQuery
  }
`
