import { Box } from '@mui/material'
import { FrukiSlider } from 'components/Banners/FrukiSlider'
import { SliderCard } from 'components/Banners/SliderCard'
import React from 'react'

import './banners.css'

export const LocationsSlider = ({
  locations,
}: {
  locations: GatsbyTypes.LocationPageListQueryQuery['locations']['edges'][number]['node']['frontmatter'][]
}) => {
  return (
    <>
      <Box sx={{ height: 430, background: '#5F99AF' }}></Box>
      <FrukiSlider translate={272}>
        {locations.map((p, idx) => (
          <SliderCard
            key={p?.title}
            itemId={p?.title || `${idx}`}
            title={p?.title || ''}
            description={p?.description || ''}
            image={p?.image || ''}
          />
        ))}
      </FrukiSlider>
    </>
  )
}
