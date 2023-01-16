import VLibras from '@djpfs/react-vlibras'
import { Box } from '@mui/material'
import { BrandsComponent } from 'components/brandsComponent'
import { FrukiBlogSection } from 'components/FrukiBlogSection'
import { FrukiContact } from 'components/frukiContact'
import { FrukiFooter } from 'components/FrukiFooter'
import { FrukiFuture } from 'components/FrukiFuture'
import { FrukiHistory } from 'components/FrukiHistory'
import { FrukiWorkForce } from 'components/frukiWorkForce'
import { useBrandsMemo } from 'components/useBrandsMemo'
import { usePostMemo } from 'components/usePostMemo'
import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import * as React from 'react'
import { useMemo } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { BannerComp, Created } from 'components/bannerComp'

const IndexPage: React.FC<PageProps<GatsbyTypes.HomeQueryQuery>> = ({
  data: { brands, home, posts, banners },
}) => {
  console.log(111, banners)
  const allBrands = useBrandsMemo(brands)
  const allPosts = usePostMemo(posts)

  const bs = useMemo<Created[]>(
    () =>
      banners.edges.map((d) => ({
        ...(d.node.fields as GatsbyTypes.FieldsFragment),
        ...(d.node.frontmatter as GatsbyTypes.BannerFrontMatterFragment),
      })),
    [banners]
  )
  console.log(bs)
  return (
    <>
      <VLibras />
      <Carousel showThumbs={false}>
        {bs?.map((a) => (
          <BannerComp key={a?.name} a={a} />
        ))}
      </Carousel>
      <FrukiHistory />
      <BrandsComponent brands={allBrands} />
      <FrukiFuture />
      <FrukiBlogSection posts={allPosts} />
      <FrukiContact />
      <FrukiWorkForce />
      <FrukiFooter brands={allBrands} />
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  fragment SiteData on Query {
    site {
      siteMetadata {
        title
      }
    }
  }
  fragment Fields on MdxFields {
    slug
  }
  fragment HomeFragment on ContentYaml {
    title
    caption
  }
  fragment HomeQueryFragment on Query {
    home: contentYaml(name: { regex: "/home/" }) {
      ...HomeFragment
    }
  }

  fragment BannerFrontMatter on MdxFrontmatter {
    date(formatString: "MMMM DD, YYYY")
    name
    link
    desktop {
      childImageSharp {
        gatsbyImageData
      }
    }
    mobile {
      childImageSharp {
        gatsbyImageData
      }
    }
  }

  fragment BannerFragmentQuery on Query {
    banners: allMdx(
      filter: { internal: { contentFilePath: { regex: "/content/banner/" } } }
      sort: [{ fields: { slug: ASC } }]
    ) {
      edges {
        node {
          excerpt
          fields {
            ...Fields
          }
          frontmatter {
            ...BannerFrontMatter
          }
        }
      }
    }
  }

  query HomeQuery {
    ...HomeQueryFragment
    ...SiteData
    ...BrandsFragmentQuery
    ...BlogsFragmentQuery
    ...BannerFragmentQuery
  }
`
