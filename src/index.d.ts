declare module '*.png'
declare module '*.mp4'
declare module '*.jpg'
declare module '*.yml'

interface Brand
  extends GatsbyTypes.BrandsFrontMatterFragment,
    GatsbyTypes.FieldsFragment {}

interface Post
  extends GatsbyTypes.BlogsFrontMatterFragment,
    GatsbyTypes.FieldsFragment {}
