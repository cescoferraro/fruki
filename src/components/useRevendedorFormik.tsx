import * as cnpj from '@fnando/cnpj'
import * as cpf from '@fnando/cpf'
import { UseMutationResult } from '@tanstack/react-query'
import { FormikProps, useFormik } from 'formik'
import * as Yup from 'yup'
import { TestContext } from 'yup'

export interface Lead {
  phone: string
  name: string
  type: 'cpf' | 'cnpj'
  document: string
  email: string
  accept: boolean
}

const requiredMsg = 'Campo obrigatório'

export function useRevendedorFormik(
  mutation: UseMutationResult<Lead, Error, Lead>
): FormikProps<Lead> {
  return useFormik<Lead>({
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: Yup.object().shape({
      // accept: Yup.bool().oneOf([true]),
      type: Yup.string().oneOf(['cpf', 'cnpj']),
      name: Yup.string().required(requiredMsg),
      document: Yup.string()
        .test(
          'document',
          'Documento Inválido',
          (value?: string, ctx?: TestContext) => {
            return ctx?.parent.type === 'cnpj'
              ? cnpj.isValid(value || '')
              : cpf.isValid(value || '')
          }
        )
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
    initialValues: {
      type: 'cnpj',
      document: '',
      name: '',
      email: '',
      phone: '',
      accept: false,
    },
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
