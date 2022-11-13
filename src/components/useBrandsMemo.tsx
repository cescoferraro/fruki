import { useMemo } from 'react'

export function useBrandsMemo(
  brands: GatsbyTypes.HomeQueryQuery['brands']
): Brand[] {
  return useMemo(
    () =>
      brands.edges.map((d) => ({
        ...(d.node.fields as GatsbyTypes.FieldsFragment),
        ...(d.node.frontmatter as GatsbyTypes.BrandsFrontMatterFragment),
      })),
    [brands]
  )
}
