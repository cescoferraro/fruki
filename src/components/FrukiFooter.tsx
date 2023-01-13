import {
  Box,
  Container,
  Grid,
  IconButton,
  styled,
  Typography,
  useTheme,
} from '@mui/material'
import { center } from 'components/center'
import { FrukiCNPJComponent, sx1 } from 'components/FrukiCNPJComponent'
import { Desktop, Mobile } from 'components/FrukiContainer'
import { SeloTop } from 'components/SeloTop'
import { navigate } from 'gatsby'
import { Link as GatsbyLink } from 'gatsby-theme-material-ui'
import * as React from 'react'
import { FacebookIcon } from './FacebookIcon'
import { FrukiLogo } from './frukiLogo'
import { InstagramIcon } from './InstagramIcon'
import { LinkedinIcon } from './LinkedinIcon'
import { TwitterIcon } from './TwitterIcon'

export const Link = styled(GatsbyLink)`
  padding-top: 8px;
`

interface IProps {
  brands: Brand[]
}

export function FrukiFooter({ brands }: IProps) {
  return (
    <Container>
      <Grid
        container
        sx={{
          py: 8,
          '& > div:nth-of-type(n+2):nth-last-of-type(n+2)': {
            pl: {
              md: 4,
            },
          },
        }}
      >
        <Grid item xs={12} sm={6} md={3} lg={3} sx={{ py: 2 }}>
          <FrukiLogo />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography
                variant="bodyRegular"
                fontWeight={700}
                color="primary"
              >
                Telefone
              </Typography>
              <Typography sx={sx1} variant="bodyRegular" color="secondary">
                0800.703.9910
              </Typography>
              <Typography
                sx={{ mt: 2 }}
                variant="bodyRegular"
                fontWeight={700}
                color="primary"
              >
                Atendimento E-mail
              </Typography>
              <Typography sx={sx1} variant="bodyRegular" color="secondary">
                contato@fruki.com.br
              </Typography>
              <Typography
                sx={{ mt: 2 }}
                variant="bodyRegular"
                fontWeight={700}
                color="primary"
              >
                Horário de Atendimento
              </Typography>
              <Typography sx={sx1} variant="bodyRegular" color="secondary">
                Seg a Sex das 10h às 20h
              </Typography>
            </Box>
            <Desktop breakpoint="sm">
              <FrukiCNPJComponent />
            </Desktop>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} sx={{ pt: 2 }}>
          <Typography variant="bodyRegular" fontWeight={700} color="primary">
            Informações
          </Typography>
          <Box sx={{ ...sx1, pt: 2 }}>
            {/*<Link to={'/blog'}>Blog</Link>*/}
            {/*<Link to={'/marcas'}>Nossas Marcas</Link>*/}
            <Link to={'/partner'}>Seja um Parceiro</Link>
            <Link to={'/sobre-nos'}>Sobre a Fruki</Link>
            {/*<Link>Onde Encontrar</Link>*/}
            <Link to={'https://vagasfruki.gupy.io/'}>Trabalhe Conosco</Link>
            {/*<Link>Patrocínio</Link>*/}
            <Link to={'/faq'}>Dúvidas Frequentes</Link>
            {/*<Link>Notícias</Link>*/}
            <Link to={'/privacidade'}>Política de Privacidade</Link>
            <Link to={'/planetas-e-pessoas'}>
              Relatório de Sustentabilidade
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} sx={{ pt: 2 }}>
          <Typography variant="bodyRegular" fontWeight={700} color="primary">
            Marcas
          </Typography>
          <Box sx={{ ...sx1, pt: 2 }}>
            {brands.map((b) => (
              <Link key={b.slug} to={'/marcas'}>
                {b.name}
              </Link>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} sx={{ pt: 2 }}>
          <Typography variant="bodyRegular" fontWeight={700} color="primary">
            Redes Sociais
          </Typography>
          <Box
            sx={{
              pt: 2,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Box sx={{ pr: 2 }}>
              <IconButton
                onClick={() =>
                  navigate('https://www.instagram.com/frukibebidas/')
                }
                sx={{ backgroundColor: 'secondary.main' }}
              >
                <InstagramIcon />
              </IconButton>
            </Box>
            <Box sx={{ pr: 2 }}>
              <IconButton
                onClick={() =>
                  navigate('https://www.linkedin.com/company/fruki-bebidas')
                }
                sx={{ backgroundColor: 'secondary.main' }}
                aria-label="likedin-button"
              >
                <LinkedinIcon />
              </IconButton>
            </Box>
            <Box sx={{ pr: 2 }}>
              <IconButton
                onClick={() => navigate('https://facebook.com/FrukiBebidas')}
                sx={{ backgroundColor: 'secondary.main' }}
                aria-label="facebook-button"
              >
                <FacebookIcon />
              </IconButton>
            </Box>
            <Box sx={{}}>
              <IconButton
                onClick={() => navigate('https://twitter.com/fruki_oficial')}
                sx={{ backgroundColor: 'secondary.main' }}
                aria-label="twitter-button"
              >
                <TwitterIcon />
              </IconButton>
            </Box>
          </Box>
          <Box sx={{ ...center, pt: 4 }}>
            <SeloTop />
          </Box>
        </Grid>
      </Grid>
      <Mobile breakpoint="sm">
        <FrukiCNPJComponent />
      </Mobile>
    </Container>
  )
}
