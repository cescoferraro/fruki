declare module '*.png'
declare module '*.mp4'
declare module '*.jpg'
declare module '*.yml'

interface Brand
  extends GatsbyTypes.BlogsFrontMatterFragment,
    GatsbyTypes.FieldsFragment {}
