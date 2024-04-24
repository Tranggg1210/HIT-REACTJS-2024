import React from 'react'
import { useFormik, Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import { registerValidate } from '../../utils/registerValidate'

function Register() {
  return (
    <div>
      <Formik
        initialValues={{
          fullname: '',
          email: '',
          password: '',
        }}
        validationSchema={registerValidate}
        onSubmit={(data) => {
          console.log(data)
        }}>
        {({ errors, touched }) => (
          <Form>
            <h1>Register</h1> <br />
            <label htmlFor='fullname'>Fullname: </label>
            <Field type='text' name='fullname' id='fullname' />
            {errors.fullname && touched.fullname && (
              <p style={{ color: 'red' }}>{errors.fullname}</p>
            )}
            <br />
            <br />
            <label htmlFor='email'>Email: </label>
            <Field type='text' name='email' id='email' />
            {errors.email && touched.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            <br />
            <br />
            <label htmlFor='password'>Password: </label>
            <Field type='password' name='password' id='password' />
            {errors.password && touched.password && (
              <p style={{ color: 'red' }}>{errors.password}</p>
            )}
            <br />
            <br />
            <button type='submit'>Register</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Register
