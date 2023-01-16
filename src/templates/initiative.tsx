import { Box, Container, Typography } from '@mui/material'
import { FrukiIniciativas } from 'components/fruki-iniciativas'
import { FrukiContainer } from 'components/FrukiContainer'
import { FrukiFooter } from 'components/FrukiFooter'
import { useBrandsMemo } from 'components/useBrandsMemo'
import { graphql, PageProps } from 'gatsby'
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
} from 'gatsby-plugin-image'
import React from 'react'
import ReactMarkdown from 'react-markdown'

const InitiativePage: React.FC<
  PageProps<GatsbyTypes.InitiativePageCescoQuery>
> = ({ data: { brands, initiative, initiatives } }): React.ReactElement => {
  return (
    <>
      <FrukiContainer>
        {initiative?.frontmatter?.image !== null && (
          <GatsbyImage
            style={{
              background: initiative?.frontmatter?.color || 'white',
              height: 200,
            }}
            alt={'sdfkj'}
            image={
              getImage(
                initiative?.frontmatter?.image as ImageDataLike
              ) as IGatsbyImageData
            }
          />
        )}
        <Container sx={{ py: 8 }}>
          <Typography variant="h5" align="center">
            {initiative?.frontmatter?.title || ''}
          </Typography>
          <ReactMarkdown>{initiative?.body || ''}</ReactMarkdown>
        </Container>
        <FrukiIniciativas
          title={'Conheça Outras Iniciativas'}
          initiatives={initiatives.edges.filter(
            (a) => a.node.frontmatter?.title !== initiative?.frontmatter?.title
          )}
        />
        <FrukiFooter brands={useBrandsMemo(brands)} />
      </FrukiContainer>
    </>
  )
}

export default InitiativePage

export const pageQuery = graphql`
  query InitiativePageCesco($brand: String) {
    ...InitiativesFragmentQuery
    ...BrandsFragmentQuery
    initiative: mdx(frontmatter: { path: { eq: $brand } }) {
      fields {
        slug
      }
      body
      frontmatter {
        path
        title
        image {
          ...Image
        }
        color
      }
    }
  }
`
