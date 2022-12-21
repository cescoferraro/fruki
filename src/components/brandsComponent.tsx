import {
  Box,
  Container,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import img66 from 'assets/home/img_8.png'
import { navigate } from 'gatsby'
import { Button } from 'gatsby-material-ui-components'
import * as React from 'react'
import { Stacked } from './Stacked'

export function BrandsComponent(props: { brands: any[] }) {
  const theme = useTheme()
  let margin = { xs: 0, sm: 0, md: 13 }
  const isSmall = useMediaQuery(useTheme().breakpoints.down('md'))
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${img66})`,
          height: { xs: 400, sm: 400, md: 700 },
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
              md: '60%',
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
            borderTopLeftRadius: 120,
            borderBottomRightRadius: 120,
            transform: {
              xs: 'translateY(170px)',
              sm: 'translateY(250px)',
              md: 'translateY(0px)',
            },
          }}
        >
          <Typography
            align="center"
            sx={{ mb: 3 }}
            variant={isSmall ? 'h5' : 'h4'}
            color="primary.contrastText"
          >
            Conheça todos os produtos Fruki
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="primary.contrastText"
          >
            Queremos fazer parte da sua vida em todos os momentos. Conheça as
            marcas que fazem parte da Fruki Bebidas e descubra o sabor de estar
            junto!
          </Typography>
        </Box>
      </Box>
      <Container
        sx={{
          transform: {
            md: 'translateY(-120px)',
          },
          mb: {
            md: -120 / 8,
          },
          pr: '0px !important',
          position: {
            md: 'relative',
          },
          // minWidth: {
          //   md: '100%',
          // },
          mt: {
            xs: 20,
            sm: 20,
            md: 0,
          },
        }}
      >
        <Stacked
          gap={4}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            overflowX: 'scroll',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {props.brands.map((s, index) => (
            <IconButton
              key={s.slug}
              sx={{
                zIndex: 100,
                background: 'white',
                boxShadow: `${theme.shadows[12]}`,
                ':hover': {
                  background: 'white',
                },
                p: 5,
                m: index === 0 ? 2 : 2,
              }}
              onClick={() => navigate(s?.slug || '')}
            >
              <Box
                style={{
                  width: 150,
                  height: 150,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img alt="logo" style={{ maxWidth: 150 }} src={s?.logo || ''} />
              </Box>
            </IconButton>
          ))}
        </Stacked>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pt: 2,
            pb: 8,
          }}
        >
          <Button to="/marcas" color="secondary" variant="contained">
            Ver todas as marcas
          </Button>
        </Box>
      </Container>
    </>
  )
}
