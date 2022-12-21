import { Box, useMediaQuery, useTheme } from '@mui/material'
import * as React from 'react'
import homeImg from '../../static/assets/home/img.png'
import smallHomeImg from '../../static/assets/home/img_2.png'

interface IProps {
  home: GatsbyTypes.HomeFragmentFragment | null
}

function useMainHeight() {
  return { height: '100%' }
}

export const FrukiMainGrid: React.FC<IProps> = ({}) => {
  var items = [
    {
      name: 'Random Name #1',
      description: 'Probably the most random thing you have ever seen!',
      background: homeImg,
      mobile: smallHomeImg,
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
      background: homeImg,
      mobile: smallHomeImg,
    },
  ]
  return <Item item={items[0]} />
}

function Item(props: any) {
  const isSmall = useMediaQuery(useTheme().breakpoints.down('sm'))
  const src = isSmall ? props.item.mobile : props.item.background
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        // backgroundImage: {
        //   xs: `url(${src})`,
        //   sm: 'unset',
        // },
        // backgroundSize: 'cover',
        // height: {
        //   xs: '716px',
        //   sm: 'unset',
        // },
      }}
    >
      {/*{!isSmall && (*/}
      <img
        src={src}
        alt=""
        style={{ objectFit: 'contain', width: '100%', height: '100%' }}
      />
      {/*)}*/}
    </Box>
  )
}
