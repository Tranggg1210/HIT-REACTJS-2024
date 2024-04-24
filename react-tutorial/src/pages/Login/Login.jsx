import React from 'react'
import { Formik, Form, Field } from 'formik'
import axios from 'axios'

import './Login.scss'
import { loginValidate } from '../../utils/loginValidate'

function Login() {
  return (
    <div className='login'>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={loginValidate}
        onSubmit={async (values) => {
          try {
            const { data } = await axios.post('https://dummyjson.com/auth/login', values)
            localStorage.setItem('login', data.token) // lưu giá trị
            sessionStorage.setItem('session-login', data.token)
          } catch (error) {
            console.log(error)
          }
        }}>
        {({ errors, touched }) => (
          <Form className='login-form'>
            <Field type='text' name='username' placeholder='username'></Field>
            {errors.username && touched.username && <p className='error'>{errors.username}</p>}
            <Field type='password' name='password' placeholder='password'></Field>
            {errors.password && touched.password && <p className='error'>{errors.password}</p>}
            <button className='btn-login' type='submit'>
              LOGIN
            </button>
            <p>
              Not registered? <a href='#'>Create an account</a>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Login
