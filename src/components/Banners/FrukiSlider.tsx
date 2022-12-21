import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import { Container, styled } from '@mui/material'
import { Arrow } from 'components/Banners/Arrow'
import React from 'react'
import {
  Props,
  ScrollMenu,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu'

const HH = styled(ScrollMenu)`
  .teto {
    transform: translateY(-272px);
  }
  .react-horizontal-scrolling-menu--wrapper {
    transform: translateY(-272px);
  }
`

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
        py: 4,
        transform: `translateY( -${translate || 0}px)`,
        marginBottom: -(translate || 0) / 8,
        px: '0px !important',
      }}
    >
      <HH
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
      </HH>
    </Container>
  )
}
