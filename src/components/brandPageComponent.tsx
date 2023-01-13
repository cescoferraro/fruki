import { MenuItem, TextField } from '@mui/material'
import { FrukiAppBar } from 'components/FrukiAppBar'
import { FrukiContainer } from 'components/FrukiContainer'
import { FrukiFooter } from 'components/FrukiFooter'
import { navigate } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'

export function BrandPageComponent(props: {
  products?: Product[]
  brand?: Brand
  brands: Brand[]
}) {
  console.log(props.brand?.background)
  return (
    <>
      <FrukiAppBar />
      <FrukiContainer>
        <h2>skdfjn</h2>
        {/*<StaticImage src={props.brand?.background || ''} alt={''} />*/}
        <h4> sdkfjn</h4>
        <TextField
          select
          value={props.brand?.slug}
          onChange={(e) => {
            console.log(e?.target)
            navigate(e?.target?.value || '')
          }}
        >
          {props?.brands.map((b) => (
            <MenuItem key={b.slug || ''} value={b.slug || ''}>
              {b?.name}
            </MenuItem>
          ))}
        </TextField>
        {/*<BrandsComponent brands={props.brands} />*/}
        <FrukiFooter brands={props.brands} />
      </FrukiContainer>
    </>
  )
}
