import React from 'react'
import { Formik, Form, Field } from 'formik'
import './Login.scss'
import { loginValidate } from '../../utils/loginValidate'
import { login } from '../../api/auth.api'
import { useDispatch } from 'react-redux'
import { save } from '../../store/auth.store'

function Login() {
  const dispatch = useDispatch()
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
            dispatch(
              save({
                token: 'dhsajk',
              }),
            )
            const result = await login({
              username: values.username,
              password: values.password,
            })
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
