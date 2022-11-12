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

  const newsTemplate = path.resolve(`./src/templates/brand.tsx`)
  const nodes = result.data?.brands?.nodes || []
  nodes.forEach((resultElement, index) => {
    let slug = resultElement.fields.slug.replace('marca', 'marca')
    createPage({
      path: slug,
      component: newsTemplate,
      context: {
        nodes,
        slug: slug,
        previous: index === nodes.length - 1 ? null : nodes[index + 1].node,
        next: index === 0 ? null : nodes[index - 1].node,
      },
    })
  })
  const products = result.data?.products?.nodes || []
  products.forEach((resultElement, index) => {
    let slug = `${resultElement.fields.slug.replace('product', 'produto')}`
    console.log(slug)
    createPage({
      path: slug,
      component: newsTemplate,
      context: {
        nodes,
        slug: slug,
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
