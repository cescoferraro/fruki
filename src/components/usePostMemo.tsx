import { useMemo } from 'react'

export function usePostMemo(posts: GatsbyTypes.HomeQueryQuery['posts']) {
  return useMemo(
    () =>
      (posts.edges || []).map((p) => ({
        ...(p.node.fields as GatsbyTypes.FieldsFragment),
        ...(p.node.frontmatter as GatsbyTypes.BlogsFrontMatterFragment),
      })),
    [posts.edges]
  )
}
