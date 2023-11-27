import { ErrorMessage, Field, Form, Formik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React, { useState } from 'react';
import * as Yup from 'yup';
import userApi from '../api/userApi';

const validationSchema = Yup.object().shape({
  oldPassword: Yup.string().required('Old password is required'),
  newPassword: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 digits'),
});

const ChangePassword = () => {
  const [focused, setFocused] = useState(null);
  const user = JSON.parse(localStorage.getItem('user'));


  const [initialFormValues] = useState({
    oldPassword: '',
    newPassword: '',
  });
  const handleFormSubmit = async (values, { setSubmitting }) => {
    try {
      await userApi.changePassword({
        email: user?.email,
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
      });
      enqueueSnackbar('Password changed successfully', { variant: 'success' });
      // Additional logic on success
    } catch (error) {
      enqueueSnackbar('Old password does not match', { variant: 'error' });
      // Error handling logic
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="grid m-8 grid-cols-3 gap-8">
      <div className="col-span-5 xl:col-span-3">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Change Password
            </h3>
          </div>

          <div className="p-7">
            <Formik
              initialValues={initialFormValues}
              validationSchema={validationSchema}
              onSubmit={handleFormSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="my-5 mr-5 relative overflow-hidden">
                    <label
                      htmlFor="oldPassword"
                      className={`bg-gradient-to-r bg-clip-text text-xs text-transparent font-semibold uppercase transition-all duration-300 ${
                        focused === 3
                          ? 'from-gray-800 to-red-400'
                          : 'from-gray-600 to-gray-600'
                      }`}
                    >
                      Old Password
                    </label>
                    <div className="relative">
                      <span className="absolute left-4.5 top-4"></span>
                      <Field
                        type="password"
                        name="oldPassword"
                        className="form-input w-full border-0 border-b-2 border-gray-300 bg-white bg-opacity-80 placeholder-gray-400 focus:border-gray-300 focus:ring-0"
                        onFocus={() => setFocused(3)}
                        onBlur={() => setFocused(null)}
                      />
                      <ErrorMessage name="oldPassword" component="div" />
                    </div>
                  </div>
                  <div className="my-5 mr-5 relative overflow-hidden">
                    <label
                      htmlFor="newPassword"
                      className={`bg-gradient-to-r bg-clip-text text-xs text-transparent font-semibold uppercase transition-all duration-300 ${
                        focused === 3
                          ? 'from-gray-800 to-red-400'
                          : 'from-gray-600 to-gray-600'
                      }`}
                    >
                      New Password
                    </label>
                    <div className="relative">
                      <span className="absolute left-4.5 top-4"></span>
                      <Field
                        type="password"
                        name="newPassword"
                        className="form-input w-full border-0 border-b-2 border-gray-300 bg-white bg-opacity-80 placeholder-gray-400 focus:border-gray-300 focus:ring-0"
                        onFocus={() => setFocused(3)}
                        onBlur={() => setFocused(null)}
                      />
                      <ErrorMessage name="newPassword" component="div" />
                    </div>
                  </div>

                  <div className="flex justify-end gap-4.5">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-outline btn-primary"
                    >
                      Save
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

export default ChangePassword;
