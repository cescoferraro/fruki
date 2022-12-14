import { Box, Container, Typography, useTheme } from '@mui/material'
import img66 from 'assets/home/img_8.png'
import { FrukiSlider } from 'components/Banners/FrukiSlider'
import { useIsBigScreen } from 'components/useIsBigScreen'
import { Button } from 'gatsby-material-ui-components'
import * as React from 'react'
import { SVGProps } from 'react'

const DDDDSVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={210}
    height={210}
    viewBox="0 0 210 210"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M-138.188 175.117L251.58 564.885L262.161 554.304C342.958 473.506 341.541 342.236 260.075 260.771L-129.693 -128.997L-140.273 -118.417C-221.078 -38.5879 -220.142 93.163 -138.188 175.117Z"
      fill="#034638"
    />
  </svg>
)
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={336}
    height={534}
    viewBox="0 0 336 534"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M39.6224 237.599L503.316 701.293L701.293 503.316L237.599 39.6225C184.249 -13.7273 96.5082 -12.5314 41.6838 42.293C-12.5313 96.5081 -13.7274 184.249 39.6224 237.599Z"
      fill="#41B02A"
    />
  </svg>
)
const CCCCC = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={322}
    height={530}
    viewBox="0 0 322 530"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M-138.188 175.117L251.58 564.885L262.161 554.304C342.958 473.506 341.541 342.236 260.075 260.771L-129.693 -128.997L-140.273 -118.417C-221.078 -38.5879 -220.142 93.163 -138.188 175.117Z"
      fill="#034638"
    />
  </svg>
)

export function BrandsComponent(props: { brands: any[] }) {
  const theme = useTheme()
  let margin = { xs: 0, sm: 0, md: 13 }
  const isBig = useIsBigScreen()
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${img66})`,
          height: { xs: 400, sm: 400, md: 600 },
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexBasis: '60%',
          position: 'relative',
        }}
      >
        <SVGComponent
          style={{
            display: !isBig ? 'none' : 'block',
            position: 'absolute',
            top: 20,
            right: 0,
          }}
        />
        <CCCCC
          style={{
            display: !isBig ? 'none' : 'block',
            position: 'absolute',
            bottom: 0,
            left: 0,
          }}
        />
        <DDDDSVGComponent
          style={{
            display: isBig ? 'none' : 'block',
            position: 'absolute',
            bottom: 0,
            left: 0,
          }}
        />

        <Box
          sx={{
            flexBasis: {
              xs: '100%',
              sm: '100%',
              md: '50%',
            },
            mt: margin,
            ml: margin,
            m: {
              xs: 4,
              sm: 4,
            },
            maxWidth: {
              sm: 'unset',
              md: 710,
            },

            height: 'min-content',
            background: '#5F99AF',
            p: {
              xs: 4,
              sm: 6,
              md: 10,
            },
            borderTopLeftRadius: { xs: 70, sm: 120 },
            borderBottomRightRadius: { xs: 70, sm: 120 },
            transform: {
              xs: 'translateY(250px)',
              sm: 'translateY(250px)',
              md: 'translateY(0px)',
            },
          }}
        >
          <Typography
            align="center"
            sx={{ mb: 3 }}
            variant={isBig ? 'h4' : 'h5'}
            color="primary.contrastText"
          >
            Nossas Marcas
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="primary.contrastText"
          >
            Sua rotina com mais sabor. Conhe??a as marcas que fazem parte da
            Fruki Bebidas.
          </Typography>
        </Box>
      </Box>
      <Container sx={{ py: 0 }}>
        <FrukiSlider translate={isBig ? -232 / 2 : 232 / 2}>
          {props.brands.map((s, index) => (
            <Box
              key={s.slug}
              sx={{
                zIndex: 100,
                background: 'white',
                borderRadius: 100,
                backgroundRepeat: 'no-repeat',
                boxShadow: `${theme.shadows[4]}`,
                ':hover': {
                  backgroundPosition: 'center',
                  backgroundImage: `url(${s?.logo || ''})`,
                  backgroundSize: 'contain',
                },
                m: index === 0 ? 2 : 2,
                backgroundImage: `url(${s?.logo || ''})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                width: 200,
                height: 200,
              }}
            ></Box>
          ))}
        </FrukiSlider>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pt: 2,
            pb: 8,
          }}
        >
          <Button
            to="/assets/portfolio-bebidas-2022.pdf"
            // @ts-ignore
            target="_blank"
            color="secondary"
            variant="contained"
          >
            Ver todas as marcas
          </Button>
        </Box>
      </Container>
    </>
  )
}
