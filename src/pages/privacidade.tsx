import { Box, Container, Typography } from '@mui/material'
import image4 from 'assets/img_13.png'
import { center } from 'components/center'
import { FrukiContainer } from 'components/FrukiContainer'
import { FrukiFooter } from 'components/FrukiFooter'
import { useBrandsMemo } from 'components/useBrandsMemo'
import { graphql, PageProps } from 'gatsby'
import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import { FrukiAppBar } from '../components/FrukiAppBar'

const PrivacyPage: React.FC<PageProps<GatsbyTypes.PrivacyQueryQuery>> = ({
  data,
  ...props
}) => {
  console.log(props)
  const brands = useBrandsMemo(data.brands)

  return (
    <>
      <FrukiAppBar />
      <FrukiContainer>
        <Box
          height={200}
          sx={{
            backgroundImage: `url(${image4})`,
            ...center,
          }}
        >
          <Typography color="primary.contrastText" variant="h2" align="center">
            Política de Privacidade
          </Typography>
        </Box>
        <Container sx={{}}>
          <ReactMarkdown>{data.privacy?.nodes[0]?.body || ''}</ReactMarkdown>
        </Container>
        <FrukiFooter brands={brands} />
      </FrukiContainer>
    </>
  )
}

export default PrivacyPage

export const pageQuery = graphql`
  fragment Privacy on ContentYaml {
    title
    caption
  }
  fragment PrivacyQueryFragment on Query {
    privacy: allMdx(
      filter: { internal: { contentFilePath: { regex: "/privacy/" } } }
    ) {
      nodes {
        body
        frontmatter {
          title
        }
      }
    }
  }
  query PrivacyQuery {
    ...PrivacyQueryFragment
    ...BrandsFragmentQuery
  }
`
