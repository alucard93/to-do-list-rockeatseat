import * as yup from 'yup'

export const validationTextTask = yup.object().shape({
  title: yup.string().min(1, "No minímo 1 caracter").required('Digite ao menos 3 palavras'),
})
