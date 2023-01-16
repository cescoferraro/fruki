import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import { Box, Container } from '@mui/material'
import { Arrow } from 'components/Banners/Arrow'
import { useContext } from 'react'
import React from 'react'
import {
  Props,
  ScrollMenu,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu'

export const FrukiSlider = ({
  children,
  translate,
}: {
  translate?: number
  children: Props['children']
}) => {
  return (
    <Box
      sx={{
        transform: `translateY( ${translate || 0}px)`,
        marginBottom: (translate || 0) / 8,
        px: '0px !important',
        pr: '0 !important',
      }}
    >
      <ScrollMenu
        scrollContainerClassName={'bannerContainer'}
        LeftArrow={() => {
          const ctx = useContext(VisibilityContext)
          return (
            <Arrow
              disabled={ctx.isFirstItemVisible}
              onClick={() => ctx.scrollPrev()}
            >
              <ChevronLeft />
            </Arrow>
          )
        }}
        RightArrow={() => {
          const { isLastItemVisible, scrollNext } =
            useContext(VisibilityContext)
          return (
            <>
              <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
                <ChevronRight />
              </Arrow>
            </>
          )
        }}
      >
        {children}
      </ScrollMenu>
    </Box>
  )
}
