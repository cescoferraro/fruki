import { Box, Button, Typography } from '@mui/material'
import { defaultPl } from 'components/defaultPl'
import { Desktop, GridContainer, GridItem } from 'components/FrukiContainer'
import { useIsBigScreen } from 'components/useIsBigScreen'
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'

export function FrukiDenuncias() {
  const isBig = useIsBigScreen()
  return (
    <GridContainer
      sx={{
        background: '#5F99AF',
        flexDirection: {
          xs: 'column',
          sm: 'column',
          md: 'row',
        },
      }}
    >
      <GridItem
        padding="none"
        sx={{
          minHeight: { xs: 500, sm: 700, md: 900 },
        }}
      >
        {
          <StaticImage
            style={{
              borderWidth: 2,
              borderBottomRightRadius: 240,
              width: '100%',
              height: '90%',
              position: 'absolute',
              top: 0,
            }}
            alt="sdfk"
            src="../../static/assets/home/img_9.png"
          />
        }
      </GridItem>
      <GridItem
        sx={{
          minHeight: { xs: 900, sm: 700, md: 900 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          p: 2,
          pl: 0,
        }}
      >
        <Desktop>
          <svg
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              zIndex: 0,
            }}
            width="545"
            height="292"
            viewBox="350 0 545 292"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M845.065 -11.785L252.85 -604L-3.64884e-05 -351.15L592.215 241.065C660.352 309.201 772.412 307.674 842.432 237.654C911.674 168.412 913.201 56.3517 845.065 -11.785Z"
              fill="#034638"
            />
          </svg>
        </Desktop>
        <Typography
          variant={isBig ? 'h1' : 'h5'}
          sx={{ pl: defaultPl, fontWeight: 700, zIndex: 2 }}
          color="secondary.contrastText"
        >
          Canal de Denúncias
        </Typography>
        <Typography
          color="secondary.contrastText"
          sx={{ pl: defaultPl, zIndex: 2 }}
          variant="body1"
          fontSize={isBig ? 18 : 16}
        >
          Em observância ao plano de ações em conformidade, a Fruki Bebidas
          disponibiliza a todos os interessados (profissionais, clientes,
          prestadores, fornecedores, público em geral) um canal específico para
          o recebimento de denúncias de atos de não conformidade com o Código de
          Ética, políticas e regulamentos internos e, ainda, de legislações
          municipais, estaduais ou federais.
          <br />O canal de denúncias é mantido por empresa terceirizada e,
          portanto, externo à estrutura da Fruki Bebidas, o que visa reforçar as
          garantias de anonimato dos denunciantes, se esses assim desejarem.
          <br />
          As denúncias serão recebidas através da WEP Compliance mediante acesso
          ao telefone 0800-222-1234 (das 8h às 11:30h e das 13:30 às 17:30h, em
          dias úteis) ou pelo site.
        </Typography>
        <Box sx={{ pl: defaultPl, '& > div:nth-of-type(n + 2)': { mt: 2 } }}>
          <Box>
            <Button
              variant="contained"
              color="primary"
              sx={{
                whiteSpace: 'nowrap',
                minWidth: 'auto',
              }}
              size="large"
              onClick={() =>
                window.open('https://canaldedenuncias.wepcompliance.com.br/')
              }
            >
              Fazer Denúncia
            </Button>
          </Box>
        </Box>
      </GridItem>
    </GridContainer>
  )
}
