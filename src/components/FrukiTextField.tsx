import {
  Box,
  TextField,
  TextFieldProps,
  Typography,
  useTheme,
} from '@mui/material'
import React from 'react'
import { InputProps as StandardInputProps } from '@mui/material/Input/Input'
import { PatternFormat } from 'react-number-format'
import { PatternFormatProps } from 'react-number-format/types/types'

interface Created extends StandardInputProps {
  title: string
  value: string
  errorText?: string
  placeholder: string
  format?: string
  mask?: string
  // onBlur?: StandardInputProps["onBlur"];
  // onChange?: StandardInputProps["onChange"];
}

export function FrukiTextField({
  errorText,
  format,
  placeholder,
  title,
  value,
  onChange,
  mask,
  onBlur,
}: Created) {
  const theme = useTheme()
  const props: PatternFormatProps<Partial<TextFieldProps>> = {
    format: format || '',
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
    error: Boolean(errorText),
    helperText: errorText || ' ',
    onBlur,
  }
  return (
    <Box sx={{ pt: 2 }}>
      <Typography color="grey.700">{title}</Typography>
      {format ? (
        <PatternFormat
          // format={format}
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
