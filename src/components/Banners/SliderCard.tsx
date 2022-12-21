import {
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
  description: string
  action?: string
  onClick?: MouseEventHandler<HTMLDivElement>
}

export function SliderCard({
  image,
  title,
  description,
  action = 'Saiba mais',
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
        }}
      >
        <Typography color="primary.contrastText" variant="h6" fontWeight={700}>
          {title}
        </Typography>
        <Typography color="primary.contrastText">{description}</Typography>
        <CardActions>
          <Button>{action}</Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}
