declare module '*.png'
declare module '*.mp4'
declare module '*.jpg'
declare module '*.yml'

interface Product
  extends GatsbyTypes.ProductFrontMatterFragment,
    GatsbyTypes.FieldsFragment {}

interface Brand
  extends GatsbyTypes.BrandsFrontMatterFragment,
    GatsbyTypes.FieldsFragment {}

interface Post
  extends GatsbyTypes.BlogsFrontMatterFragment,
    GatsbyTypes.FieldsFragment {}
export { BannerComp } from 'components/bannerComp'
export { Created } from 'components/bannerComp'
