import * as cnpj from '@fnando/cnpj'
import { UseMutationResult } from '@tanstack/react-query'
import { FormikProps, useFormik } from 'formik'
import * as Yup from 'yup'

export interface Lead {
  phone: string
  name: string
  cnpj: string
  email: string
}

const requiredMsg = 'Campo obrigatório'

export function useRevendedorFormik(
  mutation: UseMutationResult<Lead, Error, Lead>
): FormikProps<Lead> {
  return useFormik<Lead>({
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: Yup.object().shape({
      name: Yup.string().required(requiredMsg),
      cnpj: Yup.string()
        .test('cnpj', 'CNPJ Inválido', (value: any) => {
          console.log(value)
          return cnpj.isValid(value)
        })
        .required(requiredMsg),
      email: Yup.string().email().required(requiredMsg),
      phone: Yup.string().test(
        'is-jimmy',
        'Telefone está fora do padrão',
        (value) =>
          stripMaskFromValue(value).length >= 10 &&
          stripMaskFromValue(value).length <= 11
      ),
    }),
    initialValues: { cnpj: '', name: '', email: '', phone: '' },
    onSubmit: async (s) => {
      await mutation.mutate(s)
    },
  })
}

export function stripMaskFromValue(str?: string): string {
  return (str || '')
    .replaceAll(' ', '')
    .replaceAll('_', '')
    .replaceAll(')', '')
    .replaceAll('(', '')
    .replaceAll('-', '')
}
