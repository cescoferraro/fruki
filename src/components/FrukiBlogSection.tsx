import { Box, Container, Paper, Typography, useTheme } from '@mui/material'
import { navigate } from 'gatsby'
import { Button } from 'gatsby-material-ui-components'
import * as React from 'react'
import { NextIcon } from './NextIcon'
import { Stacked } from './Stacked'

export function FrukiBlogSection({ posts }: { posts: Post[] }) {
  const theme = useTheme()
  return (
    <Container sx={{ pt: 8 }}>
      <Box>
        <Typography color="secondary" variant="h1" align="center">
          Nossa paixão pelo sabor está na mídia
        </Typography>
        <Typography color="grey.600" align="center">
          A Fruki saiu nas manchetes! Acompanhe as nossas últimas notícias:
        </Typography>
      </Box>
      <Stacked
        sx={{ overflowX: 'auto', overflowY: 'hidden', pt: 8 }}
        direction={'row'}
        justifyContent="space-between"
        alignItems="center"
        gap={4}
      >
        {posts.map((p) => {
          return (
            <Paper
              key={p.slug}
              sx={{
                maxHeight: 384,
                height: 384,
                width: 272,
                minWidth: 272,
                background: theme.palette.grey['50'],
                flexBasis: '20%',
                color: 'black',
                padding: 2,
                '&:last-child': { marginRight: 5 },
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}
              >
                <Box display="flex">
                  <Box
                    sx={{
                      display: 'flex',
                      border: '1px solid black',
                      borderRadius: 10,
                      height: 32,
                      px: 1,
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.91667 4.37476C7.91667 4.02958 7.63684 3.74976 7.29167 3.74976C6.94649 3.74976 6.66667 4.02958 6.66667 4.37476V5.62476H6.04167C4.77601 5.62476 3.75 6.65077 3.75 7.91642V13.9581C3.75 14.5671 3.98753 15.1206 4.375 15.531V15.6248H4.46878C4.8792 16.0122 5.43269 16.2498 6.04167 16.2498H13.9583C14.5673 16.2498 15.1208 16.0122 15.5312 15.6248H15.625V15.531C16.0125 15.1206 16.25 14.5671 16.25 13.9581V7.91642C16.25 6.65077 15.224 5.62476 13.9583 5.62476H13.3333V4.37476C13.3333 4.02958 13.0535 3.74976 12.7083 3.74976C12.3632 3.74976 12.0833 4.02958 12.0833 4.37476V5.62476H7.91667V4.37476ZM13.9583 6.87476C14.5336 6.87476 15 7.34113 15 7.91642V8.33309H5V7.91642C5 7.34113 5.46637 6.87476 6.04167 6.87476H13.9583Z"
                          fill="#5F99AF"
                        />
                      </svg>
                    </Box>

                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                      }}
                    >
                      <Typography
                        color="primary"
                        variant="bodySmall"
                        sx={{ pl: 1, fontSize: 14, lineHeight: '14px' }}
                      >
                        {new Date(p?.date || '')?.toLocaleDateString()}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Typography
                  color="primary"
                  variant="bodyLarge"
                  sx={{ marginY: 2, fontWeight: 800 }}
                >
                  {p.title}
                </Typography>
                <Typography
                  color="grey.600"
                  variant="bodySmall"
                  sx={{ marginBottom: 2 }}
                >
                  {p.description}
                </Typography>
              </Box>
              <Box>
                <Button
                  color="secondary"
                  endIcon={<NextIcon />}
                  variant="text"
                  onClick={() => navigate(p?.slug || '')}
                >
                  Ler Mais
                </Button>
              </Box>
            </Paper>
          )
        })}
      </Stacked>
      <Box
        sx={{
          py: 5,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button to="/blog" color="secondary" variant="contained">
          Ver todas as notícias{' '}
        </Button>
      </Box>
    </Container>
  )
}
