import { Box, Button, Theme, Typography, useTheme } from '@mui/material'
import type { HeadFC, PageProps } from 'gatsby'
import * as React from 'react'

function fillColor(theme: Theme, color: 'primary' | 'secondary' | 'text') {
  switch (color) {
    case 'primary':
      return theme.palette.primary.main
    case 'secondary':
      return theme.palette.secondary.main
    default:
      return theme.palette.primary.contrastText
  }
}

const ButtonIcon = ({
  color = 'text',
}: {
  color?: 'primary' | 'secondary' | 'text'
}) => {
  const theme = useTheme()
  return (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.57793 0.732902C6.45238 0.204592 7.54762 0.204593 8.42207 0.732902L12.4221 3.14957C13.2463 3.64754 13.75 4.54036 13.75 5.50334V10.4966C13.75 11.4596 13.2463 12.3524 12.4221 12.8504L8.42207 15.2671C7.54762 15.7954 6.45238 15.7954 5.57793 15.2671L1.57793 12.8504C0.753706 12.3524 0.25 11.4596 0.25 10.4966V5.50334C0.25 4.54036 0.753706 3.64754 1.57793 3.14957L5.57793 0.732902ZM5.12794 8.70385C5.03551 8.45801 4.99241 8.19637 5.00109 7.93387C5.00978 7.67137 5.07008 7.41315 5.17856 7.17396C5.28703 6.93476 5.44156 6.71927 5.63332 6.5398C5.82508 6.36032 6.0503 6.22038 6.29615 6.12794C6.54199 6.03551 6.80363 5.99241 7.06613 6.00109C7.32863 6.00978 7.58685 6.07008 7.82604 6.17856C8.06524 6.28703 8.28073 6.44156 8.4602 6.63332C8.63968 6.82508 8.77962 7.0503 8.87206 7.29615C8.96449 7.54199 9.00759 7.80363 8.99891 8.06613C8.99022 8.32863 8.92992 8.58685 8.82144 8.82604C8.71297 9.06524 8.55844 9.28073 8.36668 9.4602C8.17492 9.63968 7.9497 9.77962 7.70385 9.87206C7.45801 9.96449 7.19637 10.0076 6.93387 9.99891C6.67137 9.99022 6.41315 9.92992 6.17396 9.82144C5.93476 9.71297 5.71927 9.55844 5.5398 9.36668C5.36032 9.17492 5.22038 8.9497 5.12794 8.70385Z"
        fill={fillColor(theme, color)}
      />
    </svg>
  )
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Box
      display="flex"
      sx={{ flexDirection: 'column', justifyContent: 'space-between' }}
    >
      <Box sx={{ p: 3 }}>
        <Typography variant="h1">
          Almost before we knew it, we had left the ground.
        </Typography>
        <Typography variant="h2">
          Almost before we knew it, we had left the ground.
        </Typography>
        <Typography variant="h3">
          Almost before we knew it, we had left the ground.
        </Typography>
        <Typography variant="h4">
          Almost before we knew it, we had left the ground.
        </Typography>
        <Typography variant="h5">
          Almost before we knew it, we had left the ground.
        </Typography>
        <Typography variant="h6">
          Almost before we knew it, we had left the ground.
        </Typography>
      </Box>
      <Box sx={{ p: 3, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="bodyExtraLarge">Cesco</Typography>
        <Typography variant="bodyLarge">Cesco</Typography>
        <Typography variant="bodyRegular">Cesco</Typography>
        <Typography variant="bodySmall">Cesco</Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 3 }}>
        <Button endIcon={<ButtonIcon />} variant="contained" color="primary">
          Button
        </Button>
        <Button endIcon={<ButtonIcon />} variant="contained" color="secondary">
          Button
        </Button>
        <Button
          endIcon={<ButtonIcon color="primary" />}
          variant="outlined"
          color="primary"
        >
          Button
        </Button>
        <Button
          endIcon={<ButtonIcon color="secondary" />}
          variant="outlined"
          color="secondary"
        >
          Button
        </Button>
        <Button
          endIcon={<ButtonIcon color="primary" />}
          size="large"
          color="primary"
        >
          Button
        </Button>
        <Button
          endIcon={<ButtonIcon color="secondary" />}
          size="large"
          color="secondary"
        >
          Button
        </Button>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 3 }}>
        <Button startIcon={<ButtonIcon />} variant="contained" color="primary">
          Button
        </Button>
        <Button
          startIcon={<ButtonIcon />}
          variant="contained"
          color="secondary"
        >
          Button
        </Button>
        <Button
          startIcon={<ButtonIcon color="primary" />}
          variant="outlined"
          color="primary"
        >
          Button
        </Button>
        <Button
          startIcon={<ButtonIcon color="secondary" />}
          variant="outlined"
          color="secondary"
        >
          Button
        </Button>
        <Button
          startIcon={<ButtonIcon color="primary" />}
          size="large"
          color="primary"
        >
          Button
        </Button>
        <Button
          startIcon={<ButtonIcon color="secondary" />}
          size="large"
          color="secondary"
        >
          Button
        </Button>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 3 }}>
        <Button variant="contained" color="primary">
          Button
        </Button>
        <Button variant="contained" color="secondary">
          Button
        </Button>
        <Button variant="outlined" color="primary">
          Button
        </Button>
        <Button variant="outlined" color="secondary">
          Button
        </Button>
        <Button size="large" color="primary">
          Button
        </Button>
        <Button size="large" color="secondary">
          Button
        </Button>
      </Box>
    </Box>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
