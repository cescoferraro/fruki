import { Button, useMediaQuery, useTheme } from '@mui/material'
import { BigFrukiLogo } from 'components/BigFrukiLogo'
import { SmallFrukiLogo } from 'components/SmallFrukiLogo'
import { navigate } from 'gatsby'
import * as React from 'react'

export const FrukiLogo: React.FC<{
  background?: string
}> = ({ background }) => {
  const isSmall = useMediaQuery(useTheme().breakpoints.down('sm'))
  return (
    <Button onClick={() => navigate('/')}>
      {isSmall ? (
        <SmallFrukiLogo background={background} />
      ) : (
        <BigFrukiLogo background={background} />
      )}
    </Button>
  )
}
