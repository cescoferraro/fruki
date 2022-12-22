import { Box, Typography, useTheme } from '@mui/material'
import image7 from 'assets/about/img_2.png'
import { useIsBigScreen } from 'components/useIsBigScreen'
import { NewGeneric } from 'components/newGeneric'
import * as React from 'react'

export function FrukiWorkForceHistory() {
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
              Nossa História{' '}
            </Typography>
            <Typography
              color="secondary.contrastText"
              variant="body1"
              component={'p'}
              fontSize={20}
            >
              Em 1924, quando entrou oficialmente em funcionamento a fábrica de
              Bebidas Kirst & Cia, em Arroio do Meio, Emílio Kirst não poderia
              imaginar o tamanho do legado que deixaria às gerações seguintes da
              família. Naquele ano, o bisavô da atual geração sob o comando da
              Fruki obteve conhecimento técnico para criar uma cervejaria. A
              pequena fábrica cervejeira produzia apenas 200 garrafas por dia.
              Hoje, nosso parque industrial possui capacidade de 420 milhões de
              litros/ano com um amplo portfólio de bebidas. Já são quase 100
              anos de história em que construímos relações de confiança com
              clientes e consumidores.{' '}
            </Typography>
            {isBig && (
              <svg
                style={{ position: 'absolute', left: 0, bottom: 0 }}
                width="397"
                height="97"
                viewBox="0 0 397 97"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M224.08 0.762695H-61V348.783H224.08C319.107 348.783 396.184 270.613 396.184 174.238C396.184 78.9336 319.107 0.762695 224.08 0.762695Z"
                  fill="#41B02A"
                />
              </svg>
            )}
          </>
        ),
        sx: {
          flexBasis: '55%',
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
          minHeight: { xs: 700, sm: 500, md: 800 },
        },
      }}
      right={{
        sx: {
          flexBasis: '45%',
          display: 'flex',
          background: useTheme().palette.primary.main,
        },
        element: (
          <>
            <Box
              sx={{
                width: !isBig ? '95%' : '60%',
                backgroundImage: `url(${image7})`,
                backgroundSize: 'cover',
                backgroundPosition: !isBig ? 'top' : 'center',
                borderTopLeftRadius: 300,
                marginTop: !isBig ? 3 : 5,
                marginLeft: '5%',
              }}
            />
            {isBig && (
              <svg
                style={{ position: 'absolute', top: 40, right: 0 }}
                width="143"
                height="349"
                viewBox="0 0 143 349"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M285.897 0H0.816406V348.021H285.897C380.923 348.021 458 269.85 458 173.475C458 78.1709 380.923 0 285.897 0Z"
                  fill="#41B02A"
                />
              </svg>
            )}
            {isBig && (
              <svg
                style={{ position: 'absolute', bottom: 0, right: 0 }}
                width="143"
                height="97"
                viewBox="0 0 143 97"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M285.897 0.762695H0.816406V348.783H285.897C380.923 348.783 458 270.613 458 174.238C458 78.9336 380.923 0.762695 285.897 0.762695Z"
                  fill="#5F99AF"
                />
              </svg>
            )}
          </>
        ),
      }}
    />
  )
}
