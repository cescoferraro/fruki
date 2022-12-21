import { Box, Button, Container, Typography, useTheme } from '@mui/material'
import { FrukiSlider } from 'components/Banners/FrukiSlider'
import { center } from 'components/center'
import { FrukiIniciativas } from 'components/fruki-iniciativas'
import { FrukiAppBar } from 'components/FrukiAppBar'
import { FrukiContainer } from 'components/FrukiContainer'
import { FrukiFooter } from 'components/FrukiFooter'
import { FrukiFuture } from 'components/FrukiFuture'
import { FrukiRespect } from 'components/frukiRespect'
import { useBrandsMemo } from 'components/useBrandsMemo'
import { useIsBigScreen } from 'components/useIsBigScreen'
import { graphql, navigate, PageProps } from 'gatsby'
import * as React from 'react'

function NewComponent({ number, label }: { label: string; number: string }) {
  return (
    <Box display="flex" sx={{ ...center, pt: 2 }}>
      <Box>
        <Typography variant="h1" fontSize={120} color="secondary">
          {number}
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column">
        <Typography variant="h1" fontSize={80} sx={{ color: '#5F99AF' }}>
          kg
        </Typography>
        <Typography color="primary.contrastText" fontSize={24} fontWeight={700}>
          {label}
        </Typography>
      </Box>
    </Box>
  )
}

function FrukiQuestion() {
  const theme = useTheme()
  return (
    <Box sx={{ backgroundColor: theme.palette.secondary.main }}>
      <Container sx={{ py: 8 }}>
        <Typography
          variant="h4"
          fontWeight={700}
          align="center"
          color="primary.contrastText"
        >
          Vamos deixar o mundo mais gentil?
        </Typography>
        <Typography
          component={'p'}
          sx={{ pt: 4, pb: 5 }}
          variant="bodyLarge"
          align="center"
          color="primary.contrastText"
        >
          Acesse o Relatório de Sustentabilidade 2022 da Fruki Bebidas.
        </Typography>
        <Box sx={{ ...center }}>
          <Button
            color="primary"
            variant="contained"
            size="large"
            startIcon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.0031 16.7488C18.0037 18.2681 16.7723 19.5 15.2531 19.5H8.75C7.23121 19.5 6 18.2688 6 16.75V7.25C6 5.73122 7.23122 4.5 8.75 4.5H12.1716C12.9009 4.5 13.6004 4.78973 14.1161 5.30546L17.1949 8.38423C17.7104 8.89967 18.0001 9.59867 18.0004 10.3276L18.0031 16.7488ZM8.75 8.5C8.33579 8.5 8 8.83579 8 9.25C8 9.66421 8.33579 10 8.75 10H13.25C13.6642 10 14 9.66421 14 9.25C14 8.83579 13.6642 8.5 13.25 8.5H8.75ZM8 12.5C8 12.0858 8.33579 11.75 8.75 11.75H15.25C15.6642 11.75 16 12.0858 16 12.5C16 12.9142 15.6642 13.25 15.25 13.25H8.75C8.33579 13.25 8 12.9142 8 12.5ZM8.75 15.25C8.33579 15.25 8 15.5858 8 16C8 16.4142 8.33579 16.75 8.75 16.75H12.25C12.6642 16.75 13 16.4142 13 16C13 15.5858 12.6642 15.25 12.25 15.25H8.75Z"
                  fill="white"
                />
              </svg>
            }
          >
            Relatório de Sustentabilidade Socioambiental
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

function FrukiStats() {
  const theme = useTheme()
  const isBig = useIsBigScreen()
  return (
    <Box sx={{ backgroundColor: theme.palette.primary.main }}>
      <Container sx={{ py: 8 }}>
        <Typography
          variant="h5"
          fontWeight={700}
          align="center"
          color="primary.contrastText"
        >
          A cada minuto que você está aqui, nós já reciclamos
        </Typography>
        <Box
          display="flex"
          flexDirection={isBig ? 'row' : 'column'}
          justifyContent={'space-between'}
          sx={{ py: 4 }}
        >
          <NewComponent label={'De resíduos industriais'} number={'2,26'} />
          <NewComponent label={'De resíduos compensados'} number={'3,36'} />
        </Box>
      </Container>
    </Box>
  )
}

const SustentabilidadePage: React.FC<
  PageProps<GatsbyTypes.PlanetasPessoasPageListQueryQuery>
> = ({ data }) => {
  const theme = useTheme()
  return (
    <>
      <FrukiAppBar />
      <FrukiContainer>
        <FrukiFuture
          height={{ xs: 800, sx: 600, md: 1000 }}
          title={'Gentileza com o planeta'}
          text={`Nosso compromisso com o planeta está firmado desde o início, e ele se renova cada vez que você acredita e apoia. Ao longo dos anos, buscamos melhorar ainda mais nossa relação com o meio ambiente por meio de soluções inteligentes e iniciativas sustentáveis. A meta é sermos cada vez mais eficientes em toda a operação.
Aqui, a gente gosta de inspirar mudanças positivas, por isso, somos pioneiros na utilização de caminhões elétricos como parte da frota no transporte de cargas no RS. Os veículos elétricos têm 0% de emissões diretas de CO2eq, além de menor poluição sonora e maior eficiência energética, o que contribui para a adoção de uma gestão logística sustentável.
Ser gentil com o planeta já faz parte do nosso dia a dia, mas ainda há muito a se fazer. Nossa meta é superar as exigências e contribuir 110% com o desenvolvimento sustentável.`}
          action={``}
        />
        <FrukiStats />
        <FrukiRespect />
        <Box
          sx={{
            height: 326,
            background: theme.palette.primary.main,
            pt: 8,
          }}
        >
          <Typography color="secondary" variant="h2" textAlign="center">
            Certificados
          </Typography>
          <Typography
            color="primary.contrastText"
            variant="h6"
            textAlign="center"
          >
            Conheça os últimos prêmios conquistados pela Fruki Bebidas.{' '}
          </Typography>
        </Box>
        <FrukiSlider translate={342 / 2}>
          {data.certificates.edges
            .map((e) => e.node.frontmatter)
            .map((p, idx) => (
              <Box
                key={`${p?.title}-${idx}`}
                sx={{
                  zIndex: 100,
                  background: 'white',
                  boxShadow: `none`,
                  ':hover': {
                    backgroundImage: `url(${p?.image})`,
                  },
                  backgroundImage: `url(${p?.image})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  // m: 2,
                  borderRadius: 250 / 2,
                }}
                onClick={() => navigate(p?.title || '')}
              >
                <Box
                  style={{
                    width: 250,
                    height: 250,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                />
              </Box>
            ))}
        </FrukiSlider>
        <FrukiIniciativas initiatives={data?.initiatives.edges} />
        <FrukiQuestion />
        <FrukiFooter brands={useBrandsMemo(data?.brands)} />
      </FrukiContainer>
    </>
  )
}

export const pageQuery = graphql`
  fragment CertificatesFrontMatter on MdxFrontmatter {
    date(formatString: "MMMM DD, YYYY")
    title
    description
    image
    name
    logo
  }
  fragment CertificatesFragment on MdxConnection {
    edges {
      node {
        excerpt
        frontmatter {
          ...CertificatesFrontMatter
        }
      }
    }
  }

  fragment CertificatesFragmentQuery on Query {
    certificates: allMdx(
      filter: {
        internal: { contentFilePath: { regex: "/content/certificate/" } }
      }
      sort: [{ fields: { slug: ASC } }]
    ) {
      ...CertificatesFragment
    }
  }
  fragment InitiativesFrontMatter on MdxFrontmatter {
    date(formatString: "MMMM DD, YYYY")
    title
    description
    image
    name
    logo
    path
  }
  fragment InitiativesFragment on MdxConnection {
    edges {
      node {
        excerpt
        frontmatter {
          ...InitiativesFrontMatter
        }
      }
    }
  }

  fragment InitiativesFragmentQuery on Query {
    initiatives: allMdx(
      filter: {
        internal: { contentFilePath: { regex: "/content/iniciativas/" } }
      }
      sort: [{ fields: { slug: ASC } }]
    ) {
      ...InitiativesFragment
    }
  }
  query PlanetasPessoasPageListQuery {
    ...InitiativesFragmentQuery
    ...CertificatesFragmentQuery
    ...BrandsFragmentQuery
  }
`
export default SustentabilidadePage
