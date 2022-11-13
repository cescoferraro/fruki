import { Box, Typography } from '@mui/material'
import { graphql, PageProps } from 'gatsby'
import * as React from 'react'
import { Link } from 'gatsby-material-ui-components'

const BlogsPage: React.FC<PageProps<GatsbyTypes.BlogPageListQueryQuery>> = (
  props
) => {
  return (
    <Box>
      {props.data.posts.edges
        .map((e) => ({
          ...e.node.fields,
          ...e.node.frontmatter,
        }))
        .map((blog) => (
          <Link to={blog?.slug || ''}>{blog.title}</Link>
        ))}
    </Box>
  )
}

export default BlogsPage

export const pageQuery = graphql`
  fragment BlogsFrontMatter on MdxFrontmatter {
    date(formatString: "MMMM DD, YYYY")
    title
    description
    image
    name
    logo
  }
  fragment BlogsFragmentQuery on Query {
    posts: allMdx(
      filter: { internal: { contentFilePath: { regex: "/content/blog/" } } }
      sort: [{ fields: { slug: ASC } }]
    ) {
      edges {
        node {
          excerpt
          fields {
            ...Fields
          }
          frontmatter {
            ...BlogsFrontMatter
          }
        }
      }
    }
  }

  query BlogPageListQuery {
    ...BlogsFragmentQuery
  }
`
