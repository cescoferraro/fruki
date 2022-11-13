import { graphql, PageProps } from 'gatsby'
import * as React from 'react'
import { FrukiBlogSection } from '../components/FrukiBlogSection'
import { usePostMemo } from '../components/usePostMemo'

const BlogsPage: React.FC<PageProps<GatsbyTypes.BlogPageListQueryQuery>> = (
  props
) => {
  const allPosts = usePostMemo(props.data.posts)
  return <FrukiBlogSection posts={allPosts} />
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
