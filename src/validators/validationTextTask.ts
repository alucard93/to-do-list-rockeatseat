import * as yup from 'yup'

export const validationTextTask = yup.object().shape({
  title: yup.string().min(30, "No minímo 30 caracteres").required('Digite ao menos 3 palavras'),
})
