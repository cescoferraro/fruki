import { CreateNodeArgs, CreatePagesArgs } from 'gatsby'
import { createFilePath } from 'gatsby-source-filesystem'
import path from 'path'

export const createPages = async ({ graphql, actions }: CreatePagesArgs) => {
  const { createPage } = actions
  // language=GraphQL
  const result = await graphql<{
    products: {
      nodes: any[]
    }
    brands: {
      nodes: any[]
    }
  }>(`
    query Brands {
      products: allMdx(
        filter: {
          internal: { contentFilePath: { regex: "/content/produto/" } }
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
      brands: allMdx(
        filter: { internal: { contentFilePath: { regex: "/content/marca/" } } }
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
          }
        }
      }
    }
  `)
  if (result.errors) {
    throw result.errors
  }

  const brands = result.data?.brands?.nodes || []
  brands.forEach((resultElement, index) => {
    let slug = resultElement.fields.slug
    createPage({
      path: slug,
      component: path.resolve(`./src/templates/brand.tsx`),
      context: {
        nodes: brands,
        brand: resultElement.frontmatter.path,
        name: resultElement.frontmatter.name,
        slug: slug,
        previous: index === brands.length - 1 ? null : brands[index + 1].node,
        next: index === 0 ? null : brands[index - 1].node,
      },
    })
  })
  const products = result.data?.products?.nodes || []
  products.forEach((resultElement, index) => {
    const slug = `${resultElement.fields.slug}`
    createPage({
      path: slug,
      component: path.resolve(`./src/templates/produto.tsx`),
      context: {
        nodes: brands,
        slug: slug,
        name: resultElement.frontmatter.name,
        productName: resultElement.frontmatter.path,
        brand: resultElement.frontmatter.brand,
        previous:
          index === products.length - 1 ? null : products[index + 1].node,
        next: index === 0 ? null : products[index - 1].node,
      },
    })
  })

  return null
}

export const onCreateNode = ({
  node,
  actions,
  getNode,
}: CreateNodeArgs<any>) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({ name: `slug`, node, value })
  }
}
