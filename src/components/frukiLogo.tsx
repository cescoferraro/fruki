import { Button } from '@mui/material'
import { BigFrukiLogo } from 'components/BigFrukiLogo'
import { Desktop, Mobile } from 'components/FrukiContainer'
import { SmallFrukiLogo } from 'components/SmallFrukiLogo'
import { navigate } from 'gatsby'
import * as React from 'react'

export const FrukiLogo: React.FC<{
  trigger?: boolean
}> = ({ trigger }) => {
  return (
    <Button aria-label="home-button" onClick={() => navigate('/')}>
      <Mobile>
        <SmallFrukiLogo trigger={trigger} />
      </Mobile>
      <Desktop>
        <BigFrukiLogo trigger={trigger} />
      </Desktop>
    </Button>
  )
}
