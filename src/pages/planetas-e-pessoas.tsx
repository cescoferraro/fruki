import { Box, Container, Typography, useTheme } from '@mui/material'
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
import { EcoNumber } from 'pages/Eco-number'
import { FrukiQuestion } from 'pages/Fruki-question'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

function FrukiStats() {
  const theme = useTheme()
  const isBig = useIsBigScreen()
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const { ref, inView } = useInView({ threshold: 0 })
  useEffect(() => {
    let interval: NodeJS.Timer
    if (inView) {
      interval = setInterval(() => {
        setLeft((l) => {
          let result = l + 0.1
          let b = result > 2.24
          if (b) clearInterval(interval)
          return b ? 2.24 : result
        })
      }, 500)
    }
    setLeft(0)

    return () => {
      clearInterval(interval)
    }
  }, [inView])
  useEffect(() => {
    let interval: NodeJS.Timer
    if (inView) {
      interval = setInterval(() => {
        setRight((l) => {
          let result = l + 0.1
          let b = result > 3.6
          if (b) clearInterval(interval)
          return b ? 3.6 : result
        })
      }, 500)
    }
    setRight(0)

    return () => {
      clearInterval(interval)
    }
  }, [inView])

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
          ref={ref}
          display="flex"
          flexDirection={isBig ? 'row' : 'column'}
          justifyContent={'space-between'}
          sx={{ py: 4 }}
        >
          <EcoNumber label={'De resíduos industriais'} number={left} />
          <EcoNumber label={'De resíduos compensados'} number={right} />
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
          title={'Gentileza com o planeta'}
          text={
            <>
              Nosso compromisso com o planeta está firmado desde o início, e ele
              se renova cada vez que você acredita e apoia. Ao longo dos anos,
              buscamos melhorar ainda mais nossa relação com o meio ambiente por
              meio de soluções inteligentes e iniciativas sustentáveis. A meta é
              sermos cada vez mais eficientes em toda a operação. Aqui, a gente
              gosta de inspirar mudanças positivas, por isso, somos pioneiros na
              utilização de caminhões elétricos como parte da frota no
              transporte de cargas no RS. Os veículos elétricos têm 0% de
              emissões diretas de CO2eq, além de menor poluição sonora e maior
              eficiência energética, o que contribui para a adoção de uma gestão
              logística sustentável. Ser gentil com o planeta já faz parte do
              nosso dia a dia, mas ainda há muito a se fazer. Nossa meta é
              superar as exigências e contribuir 110% com o desenvolvimento
              sustentável.{' '}
            </>
          }
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
        <FrukiSlider translate={-250 / 2}>
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
