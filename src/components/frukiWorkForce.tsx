import { Box, Typography, useTheme } from '@mui/material'
import { Button } from 'gatsby-material-ui-components'
import image7 from 'assets/home/img_7.png'
import { SeloTopBig } from 'components/SeloTopBig'
import { useIsBigScreen } from 'components/useIsBigScreen'
import { NewGeneric } from 'components/newGeneric'
import * as React from 'react'

export function FrukiWorkForce() {
  const isBig = useIsBigScreen()
  return (
    <NewGeneric
      sx={{
        background: useTheme().palette.primary.main,
      }}
      height={{ xs: 550, sm: 550, md: 800 }}
      left={{
        element: (
          <>
            <Typography
              variant={isBig ? 'h1' : 'h5'}
              sx={{ fontWeight: 700 }}
              color="secondary.contrastText"
            >
              Construa sua história junto com a nossa{' '}
            </Typography>
            <Typography
              color="secondary.contrastText"
              variant="body1"
              fontSize={20}
            >
              A Fruki Bebidas é impulsionada por 900 profissionais apaixonados
              pelo que fazem: oferecer o melhor sabor.{' '}
            </Typography>
            <Box>
              <Button
                to="https://vagasfruki.gupy.io/"
                variant="contained"
                color="secondary"
                size="large"
              >
                Ver Oportunidades{' '}
              </Button>
            </Box>
          </>
        ),
        sx: {
          flexBasis: '40%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          background: useTheme().palette.primary.main,
          p: 2,
          pl: {
            xs: 2,
            sm: 2,
            md: 8,
            lg: 10,
          },
        },
      }}
      right={{
        sx: {
          flexBasis: '60%',
          display: 'flex',
          background: useTheme().palette.primary.main,
        },
        element: (
          <>
            <Box
              sx={{
                width: !isBig ? '95%' : '40%',
                backgroundImage: `url(${image7})`,
                backgroundSize: 'cover',
                backgroundPosition: !isBig ? 'top' : 'center',
                borderTopLeftRadius: 300,
                marginTop: !isBig ? 3 : 5,
                marginLeft: '5%',
              }}
            />
            {isBig && (
              <Box sx={{ width: '60%', height: '100%' }}>
                <Box sx={{ height: 40 }} />
                <Box
                  sx={{
                    height: '100%',
                  }}
                >
                  <SeloTopBig />
                  <svg
                    style={{
                      position: 'absolute',
                      top: 40,
                      right: 0,
                    }}
                    width="224"
                    height="349"
                    viewBox="0 0 224 349"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M285.896 0H0.815918V348.021H285.896C380.923 348.021 458 269.85 458 173.475C458 78.1709 380.923 0 285.896 0Z"
                      fill="#41B02A"
                    />
                  </svg>

                  <svg
                    style={{
                      marginTop: 40,
                      position: 'absolute',
                      bottom: 0,
                      right: 0,
                    }}
                    width="224"
                    height="97"
                    viewBox="0 0 224 97"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M285.896 0.762695H0.815918V348.783H285.896C380.923 348.783 458 270.613 458 174.238C458 78.9336 380.923 0.762695 285.896 0.762695Z"
                      fill="#5F99AF"
                    />
                  </svg>
                </Box>
              </Box>
            )}
          </>
        ),
      }}
    />
  )
}
