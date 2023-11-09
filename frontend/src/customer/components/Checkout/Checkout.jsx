import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string()
    .email('Please enter a valid email address.')
    .required('Required'),
  address: Yup.string().required('Required'),
  phone: Yup.string().required('Required'),
});

const Checkout = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phone: '',
  };

  const handleSubmit = (values) => {
    // Handle form submission (e.g., sending data to the server)
    console.log('Form values:', values);
  };

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">1. Shipping & Delivery</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-4">
            <label htmlFor="firstName" className="label">
              <span className="label-text">First Name*</span>
            </label>
            <Field
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Type here"
              className="input input-bordered w-full max-w-full"
            />
            <ErrorMessage
              name="firstName"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="lastName" className="label">
              <span className="label-text">Last Name*</span>
            </label>
            <Field
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Type here"
              className="input input-bordered w-full max-w-full"
            />
            <ErrorMessage
              name="lastName"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="label">
              <span className="label-text">Email*</span>
            </label>
            <Field
              type="text"
              id="email"
              name="email"
              placeholder="Type here"
              className="input input-bordered w-full max-w-full"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="label">
              <span className="label-text">Address*</span>
            </label>
            <Field
              type="text"
              id="address"
              name="address"
              placeholder="Type here"
              className="input input-bordered w-full max-w-full"
            />
            <ErrorMessage
              name="address"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="label">
              <span className="label-text">Phone*</span>
            </label>
            <Field
              type="text"
              id="phone"
              name="phone"
              placeholder="Type here"
              className="input input-bordered w-full max-w-full"
            />
            <ErrorMessage
              name="phone"
              component="div"
              className="text-red-500"
            />
          </div>

          <button type="submit" className="w-full btn btn-circle btn-neutral">
            Save and Continue
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Checkout;
