import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import * as Yup from 'yup';
import userApi from '../../../api/userApi';
import { API_BASE_URL } from '../../../constants';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required')
    .test('is-gmail', 'Email must be a Gmail account', (value) => {
      return value?.endsWith('@gmail.com');
    }),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
});

const RegisterStaff = () => {
  // Initial form values
  const [initialFormValues] = useState({
    username: 'staff',
    email: '',
    password: '',
  });
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(false);

  const checkEmailExists = async (email) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${API_BASE_URL}/auth/existuser/${email}`
      );
      return response.data.email;
    } catch (error) {
      console.log(error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = async (values) => {
    const emailExists = await checkEmailExists(values.email);
    if (emailExists) {
      enqueueSnackbar('Email already exists', { variant: 'error' });
      return;
    }

    try {
      await userApi.createStaff(values);
      enqueueSnackbar('Staff created successfully', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar('Error creating admin', { variant: 'error' });
    }
  };

  return (
    <div className="grid m-8 grid-cols-3 gap-8">
      <div className="col-span-3">
        <div className="rounded-sm border border-stroke bg-white shadow-default">
          <div className="border-b border-stroke py-4 px-7">
            <h3 className="font-medium text-black">Register New Admin</h3>
          </div>
          <div className="p-7">
            <Formik
              initialValues={initialFormValues}
              validationSchema={validationSchema}
              onSubmit={handleFormSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  {/* Email Field */}
                  <div className="mb-5">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <Field
                      name="email"
                      type="email"
                      className="form-input w-full border-0 border-b-2 border-gray-300 bg-white bg-opacity-80 placeholder-gray-400 focus:border-gray-300 focus:ring-0"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="bg-gradient-to-r bg-clip-text text-xs text-red-600 font-semibold uppercase transition-all duration-300"
                    />
                  </div>

                  {/* Password Field */}
                  <div className="mb-5">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <Field
                      name="password"
                      type="password"
                      className="form-input w-full border-0 border-b-2 border-gray-300 bg-white bg-opacity-80 placeholder-gray-400 focus:border-gray-300 focus:ring-0"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="bg-gradient-to-r bg-clip-text text-xs text-red-600 font-semibold uppercase transition-all duration-300"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary"
                    >
                      Register
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterStaff;
