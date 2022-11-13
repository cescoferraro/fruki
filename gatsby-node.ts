import { CreateNodeArgs, CreatePagesArgs } from 'gatsby'
import { createFilePath } from 'gatsby-source-filesystem'
import path from 'path'

interface BlogPostPages {
  errors?: any
  data?: Result
}

interface Result {
  products: { nodes: any[] }
  brands: { nodes: any[] }
  blogs: { nodes: any[] }
}

function createBlogPostPages(result: BlogPostPages, createPage: any) {
  const blogs = result.data?.blogs?.nodes || []
  blogs.forEach((blog, index) => {
    const slug = `${blog.fields.slug}`
    console.log(slug)
    createPage({
      path: slug,
      component: path.resolve(`./src/templates/post.tsx`),
      context: {
        nodes: blogs,
        slug: slug,
        title: blog.frontmatter.title,
        brand: blog.frontmatter.brand,
        postPath: blog.frontmatter.path,
        previous: index === blogs.length - 1 ? null : blogs[index + 1].node,
        next: index === 0 ? null : blogs[index - 1].node,
      },
    })
  })
}

function createProductPages(result: BlogPostPages, createPage: any) {
  const products = result.data?.products?.nodes || []
  products.forEach((product, index) => {
    const slug = `${product.fields.slug}`
    createPage({
      path: slug,
      component: path.resolve(`./src/templates/produto.tsx`),
      context: {
        nodes: products,
        slug: slug,
        name: product.frontmatter.name,
        productName: product.frontmatter.path,
        brand: product.frontmatter.brand,
        previous:
          index === products.length - 1 ? null : products[index + 1].node,
        next: index === 0 ? null : products[index - 1].node,
      },
    })
  })
}

function createBrandPages(result: BlogPostPages, createPage: any) {
  const brands = result.data?.brands?.nodes || []
  brands.forEach((brand, index) => {
    const slug = brand.fields.slug
    createPage({
      path: slug,
      component: path.resolve(`./src/templates/brand.tsx`),
      context: {
        nodes: brands,
        brand: brand.frontmatter.path,
        name: brand.frontmatter.name,
        slug: slug,
        previous: index === brands.length - 1 ? null : brands[index + 1].node,
        next: index === 0 ? null : brands[index - 1].node,
      },
    })
  })
}

// noinspection JSUnusedGlobalSymbols
export const createPages = async ({ graphql, actions }: CreatePagesArgs) => {
  const { createPage } = actions
  // language=GraphQL
  const result = await graphql<Result>(`
    query GatsbyNode {
      blogs: allMdx(
        filter: { internal: { contentFilePath: { regex: "/content/blog/" } } }
        sort: { frontmatter: { date: ASC } }
        limit: 1000
      ) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            path
            title
          }
        }
      }
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
  createBrandPages(result, createPage)
  createProductPages(result, createPage)
  createBlogPostPages(result, createPage)

  return null
}

// noinspection JSUnusedGlobalSymbols
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
