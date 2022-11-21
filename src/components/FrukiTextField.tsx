import {
  Box,
  TextField,
  TextFieldProps,
  Typography,
  useTheme,
} from '@mui/material'
import { InputProps as StandardInputProps } from '@mui/material/Input/Input'
import React from 'react'
import { PatternFormat } from 'react-number-format'

export function FrukiTextField({
  error,
  format,
  placeholder,
  title,
  value,
  onChange,
  mask,
  onBlur,
}: {
  title: string
  value: string
  error?: string

  placeholder: string

  onBlur?: (e: React.FocusEvent<any>) => void
  format?: string
  mask?: string
  onChange?: StandardInputProps['onChange']
}) {
  const theme = useTheme()
  const props = {
    placeholder: placeholder,
    value,
    onChange,
    sx: {
      pt: 1,
      borderRadius: 10,
      borderColor: theme.palette.grey.A200,
      '& fieldset': {
        borderRadius: 50,
      },
    },
    fullWidth: true,
    variant: 'outlined' as TextFieldProps['variant'],
    error: Boolean(error),
    helperText: error || ' ',
    onBlur,
  }
  return (
    <Box sx={{ pt: 2 }}>
      <Typography color="grey.700">{title}</Typography>
      {format ? (
        <PatternFormat
          format={format}
          mask={mask}
          customInput={TextField}
          {...props}
        />
      ) : (
        <TextField {...props} />
      )}
    </Box>
  )
}
