import {
  Box,
  Container,
  Grid,
  IconButton,
  styled,
  SxProps,
  Typography,
} from '@mui/material'
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
const sx1: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}

interface IProps {
  brands: Brand[]
}

export function FrukiFooter({ brands }: IProps) {
  return (
    <Container>
      <Grid container sx={{ py: 8 }} spacing={2}>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <FrukiLogo />
          <Box sx={{ py: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="bodyLarge" color="primary">
              Telefone
            </Typography>
            <Typography sx={sx1} variant="bodyRegular" color="secondary">
              0800.703.9910
            </Typography>
            <Typography sx={{ mt: 2 }} variant="bodyLarge" color="primary">
              Atendimento E-mail
            </Typography>
            <Typography sx={sx1} variant="bodyRegular" color="secondary">
              contato@fruki.com.br
            </Typography>
            <Typography sx={{ mt: 2 }} variant="bodyLarge" color="primary">
              Horário de Atendimento
            </Typography>
            <Typography sx={sx1} variant="bodyRegular" color="secondary">
              Seg a Sex das 10h às 20h
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Typography sx={{ pt: 2 }} variant="bodyLarge" color="primary">
            Informações
          </Typography>
          <Box sx={{ ...sx1, pt: 2 }}>
            <Link to={'/blog'}>Blog</Link>
            <Link to={'/marcas'}>Nossas Marcas</Link>
            <Link>Seja um Parceiro</Link>
            <Link>Sobre a Fruki</Link>
            <Link>Onde Encontrar</Link>
            <Link>Trabalhe Conosco</Link>
            <Link>Patrocínio</Link>
            <Link>Dúvidas Frequentes</Link>
            <Link>Notícias</Link>
            <Link>Política de Privacidade</Link>
            <Link>Relatório de Sustentabilidade</Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Typography sx={{ pt: 2 }} variant="bodyLarge" color="primary">
            Marcas
          </Typography>
          <Box sx={{ ...sx1, pt: 2 }}>
            {brands.map((b) => (
              <Link key={b.slug} to={b.slug || ''}>{b.name}</Link>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Typography sx={{ pt: 2 }} variant="bodyLarge" color="primary">
            Redes Sociais
          </Typography>
          <Box sx={{ pt: 2, display: 'flex', flexDirection: 'row' }}>
            <Box sx={{ pr: 2 }}>
              <IconButton sx={{ backgroundColor: 'secondary.main' }}>
                <InstagramIcon />
              </IconButton>
            </Box>
            <Box sx={{ pr: 2 }}>
              <IconButton sx={{ backgroundColor: 'secondary.main' }}>
                <LinkedinIcon />
              </IconButton>
            </Box>
            <Box sx={{ pr: 2 }}>
              <IconButton sx={{ backgroundColor: 'secondary.main' }}>
                <FacebookIcon />
              </IconButton>
            </Box>
            <Box sx={{ pr: 2 }}>
              <IconButton sx={{ backgroundColor: 'secondary.main' }}>
                <TwitterIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}
