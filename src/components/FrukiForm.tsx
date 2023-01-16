import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  MenuItem,
} from '@mui/material'
import React from 'react'
import { UseMutationResult } from '@tanstack/react-query'
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
  const sx = { flexBasis: '100%', flexDirection: 'column' }
  const container = {
    flexDirection: {
      xs: 'column',
      sm: 'column',
      md: 'row',
    },
    justifyContent: 'space-between',
  }
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box sx={container} display="flex">
        <Box sx={sx} display="flex">
          <FrukiTextField
            value={formik.values.name}
            errorText={formik.errors.name}
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
            errorText={formik.errors.email}
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
            select
            name="type"
            value={formik.values.type}
            errorText={formik.errors.type}
            title="Tipo"
            // mask={''}
            // format={'##.###.###/####-##'}
            placeholder="Tipo"
            onBlur={() => formik.validateField('type')}
            onChange={(event) => {
              formik.setFieldValue('type', event.target.value)
              formik.setFieldTouched('type', true, false)
              formik.validateForm()
            }}
          >
            <MenuItem value={'cpf'}>Cpf</MenuItem>
            <MenuItem value={'cnpj'}>CnPJ</MenuItem>
          </FrukiTextField>
          <FrukiTextField
            value={formik.values.document}
            errorText={formik.errors.document}
            title="CNPJ"
            mask={''}
            format={'##.###.###/####-##'}
            placeholder="88.000.888/8080-88"
            onBlur={() => formik.validateField('document')}
            onChange={(event) => {
              formik.setFieldValue('document', event.target.value)
              formik.setFieldTouched('document', true, false)
              setTimeout(() => formik.validateField('document'), 1000)
            }}
          />
          <FrukiTextField
            value={formik.values.phone}
            errorText={formik.errors.phone}
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
            onBlur={() => formik.validateField('phone')}
            onChange={(event) => {
              formik.setFieldValue('phone', event.target.value)
              formik.validateField('phone')
            }}
          />
        </Box>
      </Box>
      <FormGroup sx={{ pt: 3 }}>
        <FormControlLabel
          name="accept"
          onChange={formik.handleChange}
          control={<Checkbox checked={formik.values.accept} name="accept" />}
          label="Li e entendi os termos da Política de Privacidade da Fruki Bebidas."
        />
      </FormGroup>
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
