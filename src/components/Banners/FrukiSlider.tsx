import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import { Container } from '@mui/material'
import { Arrow } from 'components/Banners/Arrow'
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
    <Container
      sx={{
        transform: `translateY( ${translate || 0}px)`,
        marginBottom: (translate || 0) / 8,
        px: '0px !important',
      }}
    >
      <ScrollMenu
        scrollContainerClassName={'bannerContainer'}
        LeftArrow={() => {
          const ctx = React.useContext(VisibilityContext)
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
            React.useContext(VisibilityContext)
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
    </Container>
  )
}
