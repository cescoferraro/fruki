import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from '@mui/material'
import React, { MouseEventHandler } from 'react'

interface IProps {
  itemId: string
  image: any
  title: string
  description: React.ReactNode
  action?: string
  onClick?: MouseEventHandler<HTMLDivElement>
}

export function SliderCard({
  image,
  title,
  description,
  action = 'Ver mais',
  onClick,
}: IProps): React.ReactElement {
  return (
    <Card
      sx={{
        width: 496,
        ml: 0.5,
        mb: 1,
        mr: 1,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
      }}
      tabIndex={0}
      onClick={onClick}
    >
      <CardMedia image={image} sx={{ height: 240 }} />
      <CardContent
        sx={{
          height: '271px',
          background: useTheme().palette.primary.main,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography color="primary.contrastText" variant="h6" fontWeight={700}>
          {title}
        </Typography>
        <Box sx={{ flexGrow: 1 }}>{description}</Box>
        <CardActions>
          <Button
            variant={'text'}
            color={'secondary'}
            endIcon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.1578 8.95832L6.43306 12.6831C6.18898 12.9271 6.18898 13.3229 6.43306 13.5669C6.67714 13.811 7.07286 13.811 7.31694 13.5669L11.0417 9.84221L12.6831 11.4836C12.8618 11.6624 13.1306 11.7158 13.3642 11.6191C13.5977 11.5224 13.75 11.2945 13.75 11.0417V6.875C13.75 6.78215 13.7298 6.69403 13.6935 6.61482C13.6687 6.5607 13.6358 6.5094 13.5948 6.46275C13.5773 6.44282 13.5585 6.42402 13.5387 6.40646C13.4882 6.36183 13.4323 6.32675 13.3732 6.30121C13.2971 6.26826 13.2132 6.25 13.125 6.25H8.95835C8.70556 6.25 8.47766 6.40228 8.38093 6.63582C8.28419 6.86937 8.33766 7.13819 8.51641 7.31694L10.1578 8.95832Z"
                  fill="#41B02A"
                />
              </svg>
            }
          >
            {action}
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}
