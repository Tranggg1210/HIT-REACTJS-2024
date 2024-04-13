# Form toàn tập (Formik, Yup, React Hook Form)

## Formik 
https://formik.org/docs/tutorial

```
npm i formik
```

Ví dụ cơ bản: 

```ruby
import React from 'react';
import { useFormik } from 'formik';

const validate = values => {
   const errors = {};
  
   if (!values.email) {
     errors.email = 'Required';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = 'Invalid email address';
   }
 
   return errors;
 };

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate,
    onSubmit: values => {
      console.log(values);
    },
  });

  //console.log(formik);

  return (
    <form onSubmit={formik.handleSubmit}>

    <div>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        //có thể viết gọn bỏ trường name, onChange, value, onBlur, ... bằng
        // {...formik.getFieldProps('email')}
      />
    </div>
    {
      formik.touched.email && formik.errors.email 
      ? 
      <div>{formik.errors.email}</div>
      : 
      null
    }  
      <button type="submit">Submit</button>

    </form>
  );
};
```

## Yup
```
npm install yup

yarn add yup
```

```ruby
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
         .max(15, 'Must be 15 characters or less')
         .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: values => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>

      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        type="text"
        name="firstName"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
        // {...formik.getFieldProps('firstName')}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email"
        {...formik.getFieldProps('email')}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <button type="submit">Submit</button>

    </form>
  );
};
```

## Dùng components của Formik

```ruby
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
  return (
    <Formik
      initialValues={{ firstName: '', email: '' }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" type="text" />
        <ErrorMessage name="firstName" />

        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" type="text" />
        <ErrorMessage name="lastName" />

        <label htmlFor="email">Email Address</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
```

## React Hook Form 
https://react-hook-form.com/docs/useform

```
npm install react-hook-form yup @hookform/resolvers
```
```ruby
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email().required("Phai dien email"),
  password: yup.string().min(8),
});

const App = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // throw new Error();
      console.log(data);
    } catch (error) {
      setError("root", {
        message: "This email is already taken",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email: </label>
        <input {...register("email")} type="text" placeholder="Email" />
      </div>
      {errors.email && (
        <div>{errors.email.message}</div>
      )}
      <div>
        <label>Password: </label>
        <input {...register("password")} type="password" placeholder="Password" />
      </div>
      {errors.password && (
        <div>{errors.password.message}</div>
      )}
      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Loading..." : "Submit"}
      </button>
      {errors.root && <div>{errors.root.message}</div>}
    </form>
  );
};

export default App;
```
