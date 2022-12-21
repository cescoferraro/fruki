import { Typography } from '@mui/material'
import image9 from 'assets/planetas-e-pessoas/img.png'
import { defaultPl } from 'components/defaultPl'
import { NewGeneric } from 'components/newGeneric'
import { useIsBigScreen } from 'components/useIsBigScreen'
import * as React from 'react'

export function FrukiRespect() {
  const isBig = useIsBigScreen()
  return (
    <NewGeneric
      height={{ xs: 500, sm: 500, md: 800 }}
      sx={{
        background: 'white',
        flexDirection: {
          xs: 'column',
          sm: 'column',
          md: 'row',
        },
      }}
      right={{
        element: (
          <>
            <Typography
              variant={isBig ? 'h1' : 'h5'}
              sx={{ pl: defaultPl, fontWeight: 700, zIndex: 2 }}
              color="secondary"
            >
              Pensar nas pessoas é ser gentil{' '}
            </Typography>
            <Typography
              // color="secondary.contrastText"
              sx={{ pl: defaultPl, zIndex: 2 }}
              variant="body1"
              fontSize={20}
            >
              A Fruki Bebidas é a soma das suas pessoas e o resultado de uma
              cultura interna focada no desenvolvimento e na valorização de cada
              um dos profissionais. Incentivamos o engajamento da equipe e a
              satisfação com o ambiente de trabalho. A gente acredita que a
              maneira mais eficaz de despertar a gentileza no dia a dia é sendo
              gentil. Nos importamos com cada necessidade, individual e
              coletiva, de mais de 900 colaboradores e seus familiares. Para
              isso, temos diversas iniciativas voltadas às pessoas e à
              governança.{' '}
            </Typography>
          </>
        ),
        sx: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          p: 2,
          pl: 0,
        },
      }}
      left={{
        sx: {
          backgroundImage: `url(${image9})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderWidth: 2,
          borderBottomRightRadius: {
            xs: 240,
            sm: 240,
            md: 440,
          },
        },
      }}
    />
  )
}
