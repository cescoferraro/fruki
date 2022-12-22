import { Box, Typography } from '@mui/material'
import { FrukiSlider } from 'components/Banners/FrukiSlider'
import { SliderCard } from 'components/Banners/SliderCard'
import { navigate } from 'gatsby'
import * as React from 'react'

export const FrukiIniciativas = ({
  initiatives,
  title,
}: {
  title?: string
  initiatives: GatsbyTypes.PlanetasPessoasPageListQueryQuery['initiatives']['edges']
}) => {
  return (
    <>
      <Box sx={{ height: 430, background: 'white', pt: 8 }}>
        <Typography color="primary" variant="h4" textAlign="center">
          {title || 'Nossas Iniciativas'}
        </Typography>
      </Box>
      <FrukiSlider translate={230}>
        {initiatives
          .map((e) => e.node.frontmatter)
          .map((p, idx) => (
            <SliderCard
              onClick={() => {
                navigate(`/iniciativas${p?.path}`)
              }}
              key={p?.title}
              itemId={p?.title || `${idx}`}
              title={p?.title || ''}
              description={
                <Typography color="primary.contrastText">
                  {p?.description || ''}
                </Typography>
              }
              image={p?.image || ''}
            />
          ))}
      </FrukiSlider>
    </>
  )
}
