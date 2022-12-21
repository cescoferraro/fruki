import { Box, Container, Typography } from '@mui/material'
import { BlogPaper } from 'components/BlogPaper'
import { navigate } from 'gatsby'
import { Button } from 'gatsby-material-ui-components'
import * as React from 'react'
import { Stacked } from './Stacked'

export function FrukiBlogSection({ posts }: { posts: Post[] }) {
  return (
    <Box
      sx={{
        pt: 8,
        py: { sm: 4, md: 8 },
        position: 'relative',
        pl: '0px !important',
      }}
    >
      <svg
        style={{ position: 'absolute', top: 80, zIndex: -1 }}
        width="237"
        height="735"
        viewBox="0 0 237 735"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M170.833 321.805L-241.604 734.242L-252.8 723.046C-338.297 637.549 -336.798 498.644 -250.594 412.44L161.844 0.00292794L173.04 11.199C258.544 95.6707 257.553 235.084 170.833 321.805Z"
          fill="#5F99AF"
        />
      </svg>
      <Box sx={{ pl: 2 }}>
        <Typography
          color="secondary"
          variant="h5"
          sx={{ fontWeight: 700 }}
          align="center"
        >
          Novidades sobre a Fruki
        </Typography>
        <Typography color="grey.600" align="center">
          Acompanhe as nossas últimas notícias.
        </Typography>
      </Box>
      <Container>
        <Stacked
          sx={{ overflowX: 'auto', overflowY: 'hidden', pt: 8 }}
          direction={'row'}
          justifyContent="space-between"
          alignItems="center"
          gap={4}
        >
          {posts.map((post) => {
            return (
              <BlogPaper
                key={post.slug}
                post={post}
                onClick={() => navigate(post?.slug || '')}
              />
            )
          })}
        </Stacked>
      </Container>
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
    </Box>
  )
}
