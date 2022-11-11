import { Box, Typography } from '@mui/material'
import type { HeadFC, PageProps } from 'gatsby'
import * as React from 'react'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Box>
      <Typography>akdjfn</Typography>
    </Box>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
