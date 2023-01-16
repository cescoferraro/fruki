import { Typography } from '@mui/material'
import { GridContainer, GridItem } from 'components/FrukiContainer'
import { useIsBigScreen } from 'components/useIsBigScreen'
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { SVGProps } from 'react'
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={163}
    height={212}
    viewBox="0 0 163 212"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 163C0 72.9776 72.9776 0 163 0V49C163 139.022 90.0224 212 0 212V163Z"
      fill="#5F99AF"
    />
  </svg>
)

export function FrukiRespect() {
  const isBig = useIsBigScreen()
  const height = { xs: 500, sm: 500, md: 920 }
  const rheight = { xs: 800, sm: 500, md: 920 }
  return (
    <GridContainer
      sx={{
        background: 'white',
        flexDirection: {
          xs: 'column',
          sm: 'column',
          md: 'row',
        },
      }}
    >
      <GridItem
        sx={{
          borderWidth: 2,
          borderBottomRightRadius: {
            xs: 240,
            sm: 240,
            md: 440,
          },
          height,
          minHeight: height,
          maxHeight: height,
        }}
        padding="none"
      >
        <StaticImage
          src={'../../static/assets/planetas-e-pessoas/img_15.png'}
          alt={''}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        />
        <SVGComponent
          style={{ position: 'absolute', right: 0, bottom: isBig ? 100 : 0 }}
        />
      </GridItem>
      <GridItem
        sx={{
          height: rheight,
          minHeight: rheight,
          maxHeight: rheight,
        }}
      >
        <Typography
          variant={isBig ? 'h2' : 'h5'}
          sx={{ fontWeight: 700, zIndex: 2 }}
          color="secondary"
        >
          Pensar nas pessoas é ser gentil
        </Typography>
        <Typography sx={{ zIndex: 2 }} variant="body1" fontSize={20}>
          A Fruki Bebidas é a soma das suas pessoas e o resultado de uma cultura
          interna focada no desenvolvimento e na valorização de cada um dos
          profissionais. Incentivamos o engajamento da equipe e a satisfação com
          o ambiente de trabalho.
          <br />
          <br />A gente acredita que a maneira mais eficaz de despertar a
          gentileza no dia a dia é sendo gentil. Nos importamos com cada
          necessidade, individual e coletiva, de mais de 900 colaboradores e
          seus familiares. Para isso, temos diversas iniciativas voltadas às
          pessoas e à governança.
        </Typography>
      </GridItem>
    </GridContainer>
    // <NewGeneric
    //   // height={{ xs: 500, sm: 500, md: 800 }}
    //   sx={}
    //   right={{
    //     element: ,
    //     sx: ,
    //   }}
    //   left={{
    //     sx: ,
    //   }}
    // />
  )
}
