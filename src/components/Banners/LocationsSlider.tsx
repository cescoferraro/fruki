import { Box, Typography } from '@mui/material'
import { FrukiSlider } from 'components/Banners/FrukiSlider'
import { SliderCard } from 'components/Banners/SliderCard'
import { center } from 'components/center'

import React, { SVGProps } from 'react'

import './banners.css'

const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={486}
    height={410}
    viewBox="0 0 486 410"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M419.833 321.805L7.39585 734.242L-3.80022 723.046C-89.297 637.549 -87.7977 498.644 -1.59369 412.44L410.844 0.00292356L422.04 11.199C507.544 95.6707 506.554 235.084 419.833 321.805Z"
      fill="#41B02A"
    />
  </svg>
)
const SSVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={174}
    height={133}
    viewBox="0 0 174 133"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 29C0 -67.0975 77.9025 -145 174 -145V-41C174 55.0975 96.0975 133 0 133V29Z"
      fill="#034638"
    />
  </svg>
)
export const LocationsSlider = ({
  locations,
}: {
  locations: GatsbyTypes.LocationPageListQueryQuery['locations']['edges'][number]['node']['frontmatter'][]
}) => {
  return (
    <>
      <Box sx={{ height: 430, background: '#5F99AF', position: 'relative' }}>
        <Box sx={{ ...center }}>
          <Typography
            color="primary.contrastText"
            align={'center'}
            variant="h2"
            sx={{ mt: 6 }}
          >
            Nossas Instalações
          </Typography>
        </Box>

        <SSVGComponent style={{ position: 'absolute', top: 0, right: 140 }} />
        <SVGComponent style={{ position: 'absolute', left: 100, top: 20 }} />
      </Box>
      <FrukiSlider translate={-272}>
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
