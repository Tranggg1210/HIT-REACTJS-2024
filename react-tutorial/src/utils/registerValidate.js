import * as Yup from 'yup'

export const registerValidate = () =>
  Yup.object({
    fullname: Yup.string()
      .required('Fullname không được bỏ trống')
      .min(5, 'Fullname tối thiểu 5 kí tự'),
    email: Yup.string()
      .required('Email khong duoc trong')
      .email('Bạn đang nhập sai định dạng email'),
    password: Yup.string()
      .required('Password khong duoc de trong')
      .min(8, 'Password tối thiểu có 8 kí tự')
      .oneOf([Yup.ref('fullname')], 'Password không giống fullname'),
  })
