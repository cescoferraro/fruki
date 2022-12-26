import { Box, Container, Paper, Typography, useTheme } from '@mui/material'
import { center } from 'components/center'
import * as React from 'react'

export function FrukiPourpose() {
  const palette = useTheme().palette
  return (
    <Container sx={{ p: 8 }}>
      <Paper
        sx={{
          p: 5,
          mb: 2,
          backgroundColor: palette.primary.main,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          borderRadius: '24px',
        }}
      >
        <Box sx={{ ...center }}>
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="80" height="80" rx="40" fill="#41B02A" />
            <path
              d="M50.5048 21.1396H41.4004V32.2541H50.5048C53.5396 32.2541 56.0011 29.7576 56.0011 26.6798C56.0011 23.6361 53.5396 21.1396 50.5048 21.1396Z"
              fill="white"
            />
            <path
              d="M50.5048 38.8886H41.4004V50.0031H50.5048C53.5396 50.0031 56.0011 47.5066 56.0011 44.4287C56.0011 41.3851 53.5396 38.8886 50.5048 38.8886Z"
              fill="white"
            />
            <path
              d="M24 31.5359V58.8604H24.7418C30.4068 58.8604 34.959 54.2094 34.959 48.4983V21.1738H34.2171C28.5859 21.1396 24 25.7906 24 31.5359Z"
              fill="white"
            />
          </svg>
        </Box>

        <Typography
          variant="h5"
          sx={{ py: 4 }}
          align="center"
          fontWeight={700}
          color="secondary.contrastText"
        >
          Propósito
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          color="secondary.contrastText"
        >
          Paixão por oferecer o melhor sabor, construindo conexões verdadeiras e
          fazendo a diferença na vida das pessoas e do planeta.
        </Typography>
      </Paper>
      <Box
        sx={{
          py: 4,
          display: 'flex',
          gap: 4,
          justifyContent: 'space-between',
          flexDirection: {
            xs: 'column',
            sm: 'column',
            md: 'row',
          },
        }}
      >
        <Paper sx={{ borderRadius: 24 / 8, width: '100%', p: 5 }}>
          <Box sx={{ ...center, pb: 2 }}>
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="80" height="80" rx="40" fill="#41B02A" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M40 28C32.6428 28 27.111 32.4098 22.639 38.1304C21.787 39.2204 21.787 40.7796 22.639 41.8696C27.111 47.5902 32.6428 52 40 52C47.3572 52 52.889 47.5902 57.361 41.8696C58.213 40.7796 58.213 39.2204 57.361 38.1304C52.889 32.4098 47.3572 28 40 28ZM36.8963 39.9999C36.8963 38.2194 38.2859 36.776 40.0001 36.776C41.7144 36.776 43.104 38.2194 43.104 39.9999C43.104 41.7804 41.7144 43.2238 40.0001 43.2238C38.2859 43.2238 36.8963 41.7804 36.8963 39.9999ZM40.0001 34.2686C36.9526 34.2686 34.4821 36.8346 34.4821 39.9999C34.4821 43.1652 36.9526 45.7313 40.0001 45.7313C43.0477 45.7313 45.5182 43.1652 45.5182 39.9999C45.5182 36.8346 43.0477 34.2686 40.0001 34.2686Z"
                fill="white"
              />
            </svg>
          </Box>
          <Typography variant="h5" align="center" fontWeight={700}>
            Visão
          </Typography>
          <Box sx={{ my: 4 }}>
            <Typography align="center" component="p">
              Queremos fazer parte da sua vida em todos os momentos.
            </Typography>
          </Box>
        </Paper>
        <Paper sx={{ borderRadius: 24 / 8, width: '100%', p: 5 }}>
          <Box sx={{ ...center, pb: 2 }}>
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="80" height="80" rx="40" fill="#5F99AF" />
              <path
                d="M28 41.9926L28 28.5C28 26.567 29.567 25 31.5 25H52.5858C54.813 25 55.9284 27.6929 54.3535 29.2678L48.1213 35.5L54.3536 41.7322C55.9285 43.3071 54.8131 46 52.5858 46L31.5 46C31.3303 46 31.1633 45.9879 31 45.9645V53.4999C31 54.3284 30.3284 54.9999 29.5 54.9999C28.6716 54.9999 28 54.3284 28 53.4999V41.9999L28 41.9926Z"
                fill="white"
              />
            </svg>
          </Box>
          <Typography variant="h5" align="center" fontWeight={700}>
            Missão
          </Typography>
          <Box sx={{ my: 4 }}>
            <Typography align="center" component="p">
              Oferecer o melhor sabor à sua vida.
            </Typography>
          </Box>
        </Paper>
        <Paper sx={{ borderRadius: 24 / 8, width: '100%', p: 5 }}>
          <Box sx={{ ...center, pb: 2 }}>
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="80" height="80" rx="40" fill="#034638" />
              <path
                d="M41.4457 33.1292C40.9907 31.7229 39.0095 31.7229 38.5545 33.1292L36.4407 39.6625H29.6001C28.1276 39.6625 27.5154 41.5547 28.7066 42.4239L34.2408 46.4617L32.1269 52.995C31.6719 54.4013 33.2747 55.5707 34.466 54.7016L40.0001 50.6638L45.5343 54.7016C46.7255 55.5707 48.3284 54.4013 47.8733 52.995L45.7595 46.4617L51.2936 42.4239C52.4849 41.5547 51.8727 39.6625 50.4002 39.6625H43.5596L41.4457 33.1292Z"
                fill="#F8FAFC"
              />
              <path
                d="M29.5 25C30.3284 25 31 25.6744 31 26.5063L31 35.0423C31 35.8742 30.3284 36.5486 29.5 36.5486C28.6716 36.5486 28 35.8742 28 35.0423V26.5063C28 25.6744 28.6716 25 29.5 25Z"
                fill="#F8FAFC"
              />
              <path
                d="M50.5 25C51.3284 25 52 25.6744 52 26.5063V35.0423C52 35.8742 51.3284 36.5486 50.5 36.5486C49.6716 36.5486 49 35.8742 49 35.0423V26.5063C49 25.6744 49.6716 25 50.5 25Z"
                fill="#F8FAFC"
              />
              <path
                d="M41.5 26.5063C41.5 25.6744 40.8284 25 40 25C39.1716 25 38.5 25.6744 38.5 26.5063V27.5106C38.5 28.3425 39.1716 29.0169 40 29.0169C40.8284 29.0169 41.5 28.3425 41.5 27.5106V26.5063Z"
                fill="#F8FAFC"
              />
            </svg>
          </Box>
          <Typography variant="h5" align="center" fontWeight={700}>
            Valores
          </Typography>
          <Box sx={{ my: 4 }}>
            <Typography align="center" component="p">
              Responsabilidade socioambiental, inovação, paixão, diversidade e
              reconhecimento.{' '}
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  )
}
