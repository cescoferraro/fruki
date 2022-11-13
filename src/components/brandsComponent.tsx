import {
  Box,
  Container,
  Icon,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material'
import { navigate } from 'gatsby'
import { Button } from 'gatsby-material-ui-components'
import * as React from 'react'
import { Stacked } from './Stacked'

export function BrandsComponent(props: { brands: Brand[] }) {
  const theme = useTheme()
  return (
    <Container sx={{ pt: 8 }}>
      <Box>
        <Box
          sx={{
            borderRadius: '200px 0px 200px 0px',
            background: theme.palette.primary.main,
            height: 420,
            px: 4,
          }}
        >
          <Box
            sx={{
              pt: 8,
              pb: 3,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box sx={{ width: 500 }}>
              <Typography
                color="secondary.contrastText"
                variant="h3"
                align="center"
              >
                Descubra o{' '}
                <span style={{ color: theme.palette.secondary.main }}>
                  sabor{' '}
                </span>{' '}
                de estar junto
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              px: 16,
            }}
          >
            <Typography
              color="secondary.contrastText"
              align="center"
              variant="bodyLarge"
            >
              Queremos fazer parte da sua vida em todos os momentos. Conheça as
              marcas que fazem parte da Fruki Bebidas.{' '}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            overflowX: 'auto',
            overflowY: 'hidden',
            pt: 8,
            position: 'relative',
            marginTop: '-220px',
          }}
        >
          <Stacked
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            gap={4}
            sx={{
              '&::-webkit-scrollbar': { display: 'none' },
            }}
          >
            {props.brands.map((s) => (
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
                  m: 5,
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
                  <img style={{ maxWidth: 150 }} src={s?.logo || ''} />
                </Box>
              </IconButton>
            ))}
          </Stacked>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pt: 0,
            pb: 8,
          }}
        >
          <Button to="/marcas" color="secondary" variant="contained">
            Ver todas as marcas
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
