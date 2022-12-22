import { Box, Typography } from '@mui/material'
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
      <Box sx={{ height: 430, background: '#5F99AF', pt: 7 }}>
        <Typography color="primary.contrastText" align={'center'} variant="h2">
          Nossas Instalações
        </Typography>
      </Box>
      <FrukiSlider translate={272}>
        {locations.map((p, idx) => (
          <SliderCard
            key={p?.title}
            itemId={p?.title || `${idx}`}
            title={p?.title || ''}
            description={
              <Box sx={{ py: 2, display: 'flex', flexDirection: 'row' }}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.66699 13.3333C6.66699 20.3333 16.0003 28 16.0003 28C16.0003 28 25.3337 20.3333 25.3337 13.3333C25.3337 8.17867 21.155 4 16.0003 4C10.8457 4 6.66699 8.17867 6.66699 13.3333ZM12.0003 13.3333C12.0003 15.5427 13.791 17.3333 16.0003 17.3333C18.2097 17.3333 20.0003 15.5427 20.0003 13.3333C20.0003 11.124 18.2097 9.33333 16.0003 9.33333C13.791 9.33333 12.0003 11.124 12.0003 13.3333Z"
                    fill="#5F99AF"
                  />
                </svg>
                <Box sx={{ pl: 1 }}>
                  <Typography color="primary.contrastText">
                    {p?.description || ''}
                  </Typography>
                </Box>
              </Box>
            }
            image={p?.image || ''}
            action={'Ver Localização'}
          />
        ))}
      </FrukiSlider>
    </>
  )
}
