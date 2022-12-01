import { Box, Button } from '@mui/material'
import { UseMutationResult } from '@tanstack/react-query'
import React from 'react'
import { center } from '../components/center'
import { FrukiTextField } from '../components/FrukiTextField'
import {
  Lead,
  stripMaskFromValue,
  useRevendedorFormik,
} from '../components/useRevendedorFormik'

interface IProps {
  mutation: UseMutationResult<Lead, Error, Lead>
}

export const FrukiForm: React.FC<IProps> = ({ mutation }) => {
  const formik = useRevendedorFormik(mutation)
  const stripped = stripMaskFromValue(formik.values.phone)
  const sx = { flexBasis: '50%', flexDirection: 'column' }
  const container = { flexDirection: 'row', justifyContent: 'space-between' }
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box sx={container} display="flex">
        <Box sx={sx} display="flex">
          <FrukiTextField
            value={formik.values.name}
            error={formik.errors.name}
            title="Razão Social"
            placeholder="Indústrias Ltda"
            onBlur={() => formik.validateField('name')}
            onChange={(event) =>
              formik.setFieldValue('name', event.target.value)
            }
          />
          <FrukiTextField
            value={formik.values.email}
            title="E-mail"
            error={formik.errors.email}
            placeholder="contato@industriasltda.com"
            onBlur={() => formik.validateField('email')}
            onChange={(event) => {
              formik.setFieldValue('email', event.target.value)
              formik.validateField('email')
            }}
          />
        </Box>
        <Box width={20} />
        <Box sx={sx} display="flex">
          <FrukiTextField
            value={formik.values.cnpj}
            error={formik.errors.cnpj}
            title="CNPJ"
            mask={''}
            format={'##.###.###/####-##'}
            placeholder="88.000.888/8080-88"
            onChange={async (event) => {
              formik.setFieldValue('cnpj', event.target.value)
              formik.setFieldTouched('cnpj', true, false)
              setTimeout(() => formik.validateField('cnpj'), 1000)
            }}
          />
          <FrukiTextField
            value={formik.values.phone}
            error={formik.errors.phone}
            format={
              stripped.length === 10
                ? '(##) ####-#####'
                : stripped.length < 11
                ? '(##) ####-####'
                : '(##) #####-####'
            }
            mask={stripped.length === 10 ? '' : stripped.length < 10 ? '_' : ''}
            title="Celular"
            placeholder="(88) 98088-8088"
            onChange={(event) => {
              formik.setFieldValue('phone', event.target.value)
              formik.validateField('phone')
            }}
          />
        </Box>
      </Box>
      <Box sx={{ ...center, py: 4 }}>
        <Button
          disabled={!(formik.isValid && formik.dirty)}
          type="submit"
          variant="contained"
          color="secondary"
        >
          Enviar Pré-Cadastro
        </Button>
      </Box>
    </form>
  )
}
