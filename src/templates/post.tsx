import { graphql, PageProps } from 'gatsby'
import { Link } from 'gatsby-theme-material-ui'
import React from 'react'

const ProdutoPage: React.FC<PageProps<GatsbyTypes.PostBySlugPageQueryQuery>> = (
  props
): React.ReactElement => {
  console.log(props)
  return (
    <React.Fragment>
      <h2>{props.data.post?.frontmatter?.title}</h2>
      <img
        style={{ width: 200, height: 200 }}
        src={props.data.post?.frontmatter?.image || ''}
        alt="post_image"
      />
      <Link to="/blog">Voltar Blog</Link>
    </React.Fragment>
  )
}

export default ProdutoPage

export const pageQuery = graphql`
  query PostBySlugPageQuery($postPath: String) {
    post: mdx(frontmatter: { path: { eq: $postPath } }) {
      fields {
        slug
      }
      frontmatter {
        path
        title
        image
        tags
        author
        about
      }
    }
  }
`
