import { Box, Container, Typography, useTheme } from '@mui/material'
import img66 from 'assets/home/img_8.png'
import { FrukiSlider } from 'components/Banners/FrukiSlider'
import { useIsBigScreen } from 'components/useIsBigScreen'
import { Button } from 'gatsby-material-ui-components'
import * as React from 'react'

export function BrandsComponent(props: { brands: any[] }) {
  const theme = useTheme()
  let margin = { xs: 0, sm: 0, md: 13 }
  const isBig = useIsBigScreen()
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${img66})`,
          height: { xs: 400, sm: 400, md: 600 },
          backgroundSize: 'cover',
          backgroundPositino: 'center',
          display: 'flex',
        }}
      >
        <Box
          sx={{
            flexBasis: {
              xs: '100%',
              sm: '100%',
              md: '50%',
            },
            mt: margin,
            ml: margin,
            m: {
              xs: 4,
              sm: 4,
            },
            maxWidth: {
              sm: 'unset',
              md: 710,
            },

            height: 'min-content',
            background: '#5F99AF',
            p: {
              xs: 4,
              sm: 6,
              md: 10,
            },
            borderTopLeftRadius: { xs: 70, sm: 120 },
            borderBottomRightRadius: { xs: 70, sm: 120 },
            transform: {
              xs: 'translateY(250px)',
              sm: 'translateY(250px)',
              md: 'translateY(0px)',
            },
          }}
        >
          <Typography
            align="center"
            sx={{ mb: 3 }}
            variant={isBig ? 'h4' : 'h5'}
            color="primary.contrastText"
          >
            Nossas Marcas
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="primary.contrastText"
          >
            Sua rotina com mais sabor. Conheça as marcas que fazem parte da
            Fruki Bebidas.
          </Typography>
        </Box>
      </Box>
      <Container sx={{ py: 0 }}>
        <FrukiSlider translate={isBig ? -232 / 2 : 232 / 2}>
          {props.brands.map((s, index) => (
            <Box
              key={s.slug}
              sx={{
                zIndex: 100,
                background: 'white',
                borderRadius: 100,
                backgroundRepeat: 'no-repeat',
                boxShadow: `${theme.shadows[4]}`,
                ':hover': {
                  backgroundPosition: 'center',
                  backgroundImage: `url(${s?.logo || ''})`,
                  backgroundSize: 'contain',
                },
                m: index === 0 ? 2 : 2,
                backgroundImage: `url(${s?.logo || ''})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                width: 200,
                height: 200,
              }}
            ></Box>
          ))}
        </FrukiSlider>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pt: 2,
            pb: 8,
          }}
        >
          <Button
            to="/assets/portfolio-bebidas-2022.pdf"
            // @ts-ignore
            target="_blank"
            color="secondary"
            variant="contained"
          >
            Ver todas as marcas
          </Button>
        </Box>
      </Container>
    </>
  )
}
