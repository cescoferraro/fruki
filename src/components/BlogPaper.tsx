import { Box, Paper, Typography, useTheme } from '@mui/material'
import { useIsBigScreen } from 'components/useIsBigScreen'
import { Button } from 'gatsby-material-ui-components'
import * as React from 'react'

export function BlogPaper({
  onClick,
  post: { date, description, title },
}: {
  post: Post
  onClick: () => Promise<void>
}) {
  const theme = useTheme()
  const isBig = useIsBigScreen()
  return (
    <Paper
      sx={{
        maxHeight: 384,
        height: isBig ? 384 : 332,
        width: 'calc( 100% - 16px )',
        boxShadow: `${theme.shadows[4]}`,
        m: 1,
        minWidth: 272,
        background: theme.palette.grey['50'],
        borderRadius: 5,
        flexBasis: '20%',
        color: 'black',
        padding: 2,
        '&:last-child': { marginRight: 5 },
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box display="flex">
          <Box
            sx={{
              display: 'flex',
              border: '1px solid black',
              borderRadius: 10,
              height: 32,
              px: 1,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.91667 4.37476C7.91667 4.02958 7.63684 3.74976 7.29167 3.74976C6.94649 3.74976 6.66667 4.02958 6.66667 4.37476V5.62476H6.04167C4.77601 5.62476 3.75 6.65077 3.75 7.91642V13.9581C3.75 14.5671 3.98753 15.1206 4.375 15.531V15.6248H4.46878C4.8792 16.0122 5.43269 16.2498 6.04167 16.2498H13.9583C14.5673 16.2498 15.1208 16.0122 15.5312 15.6248H15.625V15.531C16.0125 15.1206 16.25 14.5671 16.25 13.9581V7.91642C16.25 6.65077 15.224 5.62476 13.9583 5.62476H13.3333V4.37476C13.3333 4.02958 13.0535 3.74976 12.7083 3.74976C12.3632 3.74976 12.0833 4.02958 12.0833 4.37476V5.62476H7.91667V4.37476ZM13.9583 6.87476C14.5336 6.87476 15 7.34113 15 7.91642V8.33309H5V7.91642C5 7.34113 5.46637 6.87476 6.04167 6.87476H13.9583Z"
                  fill="#5F99AF"
                />
              </svg>
            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <Typography
                color="primary"
                variant="bodySmall"
                sx={{ pl: 1, fontSize: 14, lineHeight: '14px' }}
              >
                {new Date(date || '')?.toLocaleDateString()}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Typography
          color="primary"
          variant="bodyLarge"
          sx={{ marginY: 2, fontWeight: 800 }}
        >
          {title}
        </Typography>
        <Typography
          color="grey.600"
          variant="bodySmall"
          sx={{ marginBottom: 2 }}
        >
          {description}
        </Typography>
      </Box>
      <Box>
        <Button
          color="secondary"
          endIcon={
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.2753 6.22482C11.0965 6.04608 10.8277 5.9926 10.5942 6.08934C10.3606 6.18608 10.2083 6.41398 10.2083 6.66677V9.37509H5.625C5.27982 9.37509 5 9.65492 5 10.0001C5 10.3453 5.27982 10.6251 5.625 10.6251H10.2083V13.3334C10.2083 13.5862 10.3606 13.8141 10.5942 13.9109C10.8277 14.0076 11.0965 13.9541 11.2753 13.7754L14.6086 10.442C14.6163 10.4344 14.6237 10.4266 14.6309 10.4186C14.7308 10.3078 14.7917 10.161 14.7917 10.0001C14.7917 9.82672 14.7211 9.66984 14.6071 9.55662M14.6071 9.55662L11.2753 6.22482L14.6071 9.55662Z"
                fill="#41B02A"
              />
            </svg>
          }
          sx={{
            fontSize: isBig ? 18 : 16,
          }}
          variant="text"
          onClick={onClick}
        >
          Ler Mais
        </Button>
      </Box>
    </Paper>
  )
}
