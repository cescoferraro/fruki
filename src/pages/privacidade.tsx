import { AboutMain } from 'components/about-main'
import { LocationsSlider } from 'components/Banners/LocationsSlider'
import { FrukiPourpose } from 'components/fruki-pourpose'
import { FrukiContainer } from 'components/FrukiContainer'
import { FrukiFooter } from 'components/FrukiFooter'
import { FrukiWorkForceHistory } from 'components/frukiWorkForceHistory'
import { useBrandsMemo } from 'components/useBrandsMemo'
import { graphql, PageProps } from 'gatsby'
import * as React from 'react'
import { FrukiAppBar } from '../components/FrukiAppBar'

const PrivacyPage: React.FC<
  PageProps<GatsbyTypes.LocationPageListQueryQuery>
> = ({ data }) => {
  const brands = useBrandsMemo(data.brands)
  return (
    <>
      <FrukiAppBar />
      <FrukiContainer>
        <FrukiFooter brands={brands} />
      </FrukiContainer>
    </>
  )
}

export default PrivacyPage

export const pageQuery = graphql`
  query PrivacyPage {
    ...BrandsFragmentQuery
  }
`
