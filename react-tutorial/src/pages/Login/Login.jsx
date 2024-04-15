import React from 'react'
import {Formik, Form, Field } from 'formik'
import axios from 'axios';

import './Login.scss'
import { loginValidate } from '../../utils/loginValidate'

function Login() {
  return (
    <div className='login'>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginValidate}
        onSubmit={async(data) => {
          try {
            const res = await axios.post("http://103.195.236.162:3000/api/v1/auth/login", data);
            console.log(res);
          } catch (error) {
            console.log(error);
          }
        }}>
        {({ errors, touched }) => (
          <Form className='login-form'>
            <Field type='text' name='email' placeholder='email'></Field>
            {errors.email && touched.email && <p className='error'>{errors.email}</p>}
            <Field type='password' name='password' placeholder='password' ></Field>
            {errors.password && touched.password && <p className='error'>{errors.password}</p>}
            <button className='btn-login' type="submit">
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
