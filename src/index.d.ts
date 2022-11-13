declare module '*.png'
declare module '*.mp4'
declare module '*.jpg'

interface Brand
  extends GatsbyTypes.BlogsFrontMatterFragment,
    GatsbyTypes.FieldsFragment {}

export { useBrandsMemo } from './components/useBrandsMemo'
