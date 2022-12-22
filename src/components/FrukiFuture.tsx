import { Box, Typography, useTheme } from '@mui/material'
import { ResponsiveStyleValue } from '@mui/system/styleFunctionSx/styleFunctionSx'
import { Button } from 'gatsby-material-ui-components'
import image6 from 'assets/home/img_6.png'
import { NewGeneric } from 'components/newGeneric'
import { useIsBigScreen } from 'components/useIsBigScreen'
import * as React from 'react'
import { defaultPl } from 'components/defaultPl'

export function FrukiFuture({
  title = 'Um futuro criado por todos nós ',
  text = ` O nosso compromisso com as questões socioambientais se refletem em ações de verdade. Para isso, transformamos nossa maneira de pensar o futuro das pessoas e do planeta.`,
  action,
  height,
}: {
  title?: string
  text?: string | React.ReactNode
  action: string
  height?: ResponsiveStyleValue<number>
}) {
  const isBig = useIsBigScreen()
  return (
    <NewGeneric
      height={height}
      sx={{
        background: useTheme().palette.secondary.main,
      }}
      left={{
        element: (
          <>
            <Typography
              variant={isBig ? 'h1' : 'h5'}
              sx={{ pl: defaultPl, fontWeight: 700 }}
              color="secondary.contrastText"
            >
              {title}
            </Typography>
            <Typography
              color="secondary.contrastText"
              sx={{ pl: defaultPl }}
              variant="body1"
              fontSize={20}
            >
              {text}
            </Typography>
            {action && (
              <Box sx={{ pl: defaultPl }}>
                <Button
                  to="/planetas-e-pessoas"
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  {action}
                </Button>
              </Box>
            )}
          </>
        ),
        sx: {
          background: useTheme().palette.secondary.main,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          p: 2,
          pl: 0,
        },
      }}
      right={{
        sx: {
          minHeight: { xs: 400, sm: 400, md: 800 },
          // maxHeight: { xs: 400, sm: 400, md: 800 },
          height: { xs: 400, sm: 400, md: 800 },
          background: useTheme().palette.secondary.main,
          backgroundImage: `url(${image6})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderColor: useTheme().palette.secondary.main,
          borderWidth: 2,
          borderBottomLeftRadius: {
            xs: 240,
            sm: 240,
            md: 440,
          },
        },
      }}
    />
  )
}
