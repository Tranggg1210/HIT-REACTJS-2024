import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

function Form1() {
  return (
    <div style={{ margin: '40px auto', width: '600px' }}>
      <Formik
        initialValues={{
          fullname: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={Yup.object({
          fullname: Yup.string()
            .required('Không được bỏ trống trường fullname')
            .min(5, 'Tên phải lớn hơn 5 ký tự'),
          email: Yup.string()
            .required('Email không được bỏ trống')
            .email('Email bạn nhập không phải email'),
          password: Yup.string()
            .required('password không được bỏ trống')
            .min(8, 'Password ít nhất phải 8 ký tự'),
          confirmPassword: Yup.string()
            .required('Phải nhập comfirm password')
            .oneOf([Yup.ref('password')], 'Xác nhận mật khẩu không giống mật khẩu'),
        })}
        onSubmit={(values) => {
          console.log(values)
        }}>
        {({ errors, touched }) => (
          <Form>
            <h1>Login</h1>
            <br />
            <label htmlFor='fullname'>FullName: </label> <br />
            <Field type='text' name='fullname'></Field>
            {errors.fullname && touched.fullname && <p>{errors.fullname}</p>}
            <br />
            <br />
            <label htmlFor='email'>Email: </label> <br />
            <Field type='text' name='email'></Field>
            {errors.email && touched.email && <p>{errors.email}</p>}
            <br />
            <br />
            <label htmlFor='password'>Password: </label> <br />
            <Field type='password' name='password'></Field>
            {errors.password && touched.password && <p>{errors.password}</p>}
            <br />
            <br />
            <label htmlFor='confirmPassword'>Confirm Password: </label> <br />
            <Field type='password' name='confirmPassword'></Field>
            {errors.confirmPassword && touched.confirmPassword && <p>{errors.confirmPassword}</p>}
            <br />
            <br />
            <button style={{ padding: '4px 16px' }} type='submit'>
              login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Form1
