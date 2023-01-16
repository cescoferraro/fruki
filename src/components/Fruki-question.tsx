import { Box, Button, Container, Typography, useTheme } from '@mui/material'
import { center } from 'components/center'
import { navigate } from 'gatsby'
import * as React from 'react'
import { useBoletoForm } from '../layouts'

export function FrukiQuestion() {
  const theme = useTheme()
  const [, setState] = useBoletoForm()
  return (
    <Box sx={{ backgroundColor: theme.palette.secondary.main }}>
      <Container sx={{ py: 8 }}>
        <Typography
          variant="h4"
          fontWeight={700}
          align="center"
          color="primary.contrastText"
        >
          Vamos deixar o mundo mais gentil?
        </Typography>
        <Typography
          component={'p'}
          sx={{ pt: 4, pb: 5 }}
          variant="bodyLarge"
          align="center"
          color="primary.contrastText"
        >
          Acesse o Relatório de Sustentabilidade 2022 da Fruki Bebidas.
        </Typography>
        <Box sx={{ ...center }}>
          <Button
            color="primary"
            variant="contained"
            size="large"
            endIcon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.1894 10.75L7.71967 15.2197C7.42678 15.5126 7.42678 15.9874 7.71967 16.2803C8.01256 16.5732 8.48744 16.5732 8.78033 16.2803L13.25 11.8106L15.2197 13.7803C15.4342 13.9948 15.7568 14.059 16.037 13.9429C16.3173 13.8268 16.5 13.5533 16.5 13.25V8.25C16.5 8.13858 16.4757 8.03284 16.4321 7.93778C16.4024 7.87285 16.363 7.81128 16.3137 7.7553C16.2927 7.73139 16.2703 7.70882 16.2464 7.68775C16.1859 7.63419 16.1187 7.59209 16.0478 7.56145C15.9565 7.52191 15.8558 7.5 15.75 7.5H10.75C10.4467 7.5 10.1732 7.68273 10.0571 7.96299C9.94103 8.24324 10.0052 8.56583 10.2197 8.78033L12.1894 10.75Z"
                  fill="#41B02A"
                />
              </svg>
            }
            startIcon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.0031 16.7488C18.0037 18.2681 16.7723 19.5 15.2531 19.5H8.75C7.23121 19.5 6 18.2688 6 16.75V7.25C6 5.73122 7.23122 4.5 8.75 4.5H12.1716C12.9009 4.5 13.6004 4.78973 14.1161 5.30546L17.1949 8.38423C17.7104 8.89967 18.0001 9.59867 18.0004 10.3276L18.0031 16.7488ZM8.75 8.5C8.33579 8.5 8 8.83579 8 9.25C8 9.66421 8.33579 10 8.75 10H13.25C13.6642 10 14 9.66421 14 9.25C14 8.83579 13.6642 8.5 13.25 8.5H8.75ZM8 12.5C8 12.0858 8.33579 11.75 8.75 11.75H15.25C15.6642 11.75 16 12.0858 16 12.5C16 12.9142 15.6642 13.25 15.25 13.25H8.75C8.33579 13.25 8 12.9142 8 12.5ZM8.75 15.25C8.33579 15.25 8 15.5858 8 16C8 16.4142 8.33579 16.75 8.75 16.75H12.25C12.6642 16.75 13 16.4142 13 16C13 15.5858 12.6642 15.25 12.25 15.25H8.75Z"
                  fill="white"
                />
              </svg>
            }
            onClick={() => {
              setState((st) => ({ ...st, isLegal: !st.isLegal }))
            }}
          >
            Relatório de Sustentabilidade Socioambiental
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
