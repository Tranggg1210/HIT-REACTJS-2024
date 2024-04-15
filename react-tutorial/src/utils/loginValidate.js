import * as Yup from 'yup'
export const loginValidate = () =>
  Yup.object({
    email: Yup.string()
      .required('Username không được để trống')
      .min(5, 'Username phải có ít nhất 5 ký tự'),
    password: Yup.string()
      .required('Password không được để trống')
      .min(8, 'Password phải lớn hơn 8 ký tự'),
  })
