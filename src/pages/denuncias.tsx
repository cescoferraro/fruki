import { FrukiContainer } from 'components/FrukiContainer'
import { FrukiDenuncias } from 'components/frukiDenuncias'
import { FrukiFooter } from 'components/FrukiFooter'
import { useBrandsMemo } from 'components/useBrandsMemo'
import { graphql, PageProps } from 'gatsby'
import * as React from 'react'

const DenunciasPage: React.FC<
  PageProps<GatsbyTypes.DenunciasPageListQueryQuery>
> = ({ data }) => {
  return (
    <>
      <FrukiContainer>
        <FrukiDenuncias />
        <FrukiFooter brands={useBrandsMemo(data?.brands)} />
      </FrukiContainer>
    </>
  )
}

export const pageQuery = graphql`
  query DenunciasPageListQuery {
    ...BrandsFragmentQuery
  }
`
export default DenunciasPage
