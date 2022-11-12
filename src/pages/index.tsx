import { Box, Button, Grid, Typography } from '@mui/material'
import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import * as React from 'react'
import { FrukiTimelineSection } from '../components/FrukiTimelineSection'
import { FrukiHelpSection } from '../components/FrukiHelpSection'
import { BrandsComponent } from '../components/brandsComponent'

const IndexPage: React.FC<PageProps<Queries.HomeQueryQuery>> = (props) => {
  return (
    <>
      <Grid
        container
        sx={{
          background: 'red',
          height: 800,
        }}
      >
        <Grid item xs={12} sm={12} md={8}>
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              pl: 3,
            }}
          >
            <Box>
              <Typography variant="h1" color="primary.contrastText">
                Nossa paixão é oferecer o melhor sabor
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              pr: 3,
            }}
          >
            <Box>
              <Typography
                display="flex"
                variant="bodyRegular"
                color="primary.contrastText"
                sx={{ textAlign: 'center' }}
              >
                Cadastre-se para ser um revendedor dos produtos Fruki. Vem
                compartilhar com a gente essa paixão por oferecer o melhor
                sabor!
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Button variant="contained" color="secondary" sx={{ mt: 4 }}>
                  Quero Revender Fruki
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <FrukiTimelineSection />
      <BrandsComponent
        brands={props.data.brands.edges.map((d) => ({
          ...d.node.fields,
          ...d.node.frontmatter,
        }))}
      />

      <FrukiHelpSection />
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    posts: allMdx(
      filter: { internal: { contentFilePath: { regex: "/content/blog/" } } }
      sort: [{ fields: { slug: ASC } }]
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            image
            name
            logo
          }
        }
      }
    }
    brands: allMdx(
      filter: { internal: { contentFilePath: { regex: "/content/marca/" } } }
      sort: [{ fields: { slug: ASC } }]
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            image
            name
            logo
          }
        }
      }
    }
  }
`
