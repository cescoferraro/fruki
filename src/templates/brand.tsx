import React from 'react'

const BrandPage = (props: any): React.ReactElement => {
  console.log(props)
  return (
    <React.Fragment>
      <h2>Brand</h2>
    </React.Fragment>
  )
}

export default BrandPage

// export const pageQuery = graphql`
//   query NewsPostBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         title
//         author
//       }
//     }
//     mdx(fields: { slug: { eq: $slug } }) {
//       id
//       excerpt(pruneLength: 160)
//       fields {
//         slug
//       }
//       body
//       frontmatter {
//         title
//         tags
//         date(formatString: "DD/MM/YYYY")
//         description
//         text_1
//         postType
//         author
//         about
//         author_image
//         text_2
//         image
//       }
//     }
//   }
// `
