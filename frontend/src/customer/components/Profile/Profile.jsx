import { ErrorMessage, Field, Form, Formik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import useUserInfoData from '../../../hooks/useUserInfoData';

const validationSchema = Yup.object().shape({
  fullname: Yup.string()
    .required('Full name is required')
    .matches(/^[A-Za-z\u00C0-\u1EF9\s]+$/, 'Invalid characters'),
  phone: Yup.string()
    .required('Phone Number is required')
    .matches(/^0[0-9]+$/, 'Phone Number must start with 0 and be only digits')
    .min(10, 'Phone Number must be at least 10 digits'),
  address: Yup.string()
    .required('Address is required')
    .max(255, 'Address too long'),
});

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user?.userId;
  const { userData, updateUserInfo } = useUserInfoData(userId);

  const [focused, setFocused] = useState(null);

  const [initialFormValues, setInitialFormValues] = useState({
    fullname: '',
    phone: '',
    address: '',
    email: '',
  });

  useEffect(() => {
    if (userData) {
      // Once userData is available, set it as initialFormValues
      setInitialFormValues({
        fullname: userData.fullname || '',
        phone: userData.phone || '',
        address: userData.address || '',
        email: user?.email || '',
      });
    }
  }, [userData]);

  const handleFormSubmit = async (values) => {
    await updateUserInfo(values);
    enqueueSnackbar('Profile updated', {
      variant: 'success',
    });
  };
  return (
    <div className="grid m-8 grid-cols-3 gap-8">
      <div className="col-span-5 xl:col-span-3">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Personal Information
            </h3>
          </div>

          <div className="p-7">
            <Formik
              initialValues={initialFormValues}
              validationSchema={validationSchema}
              onSubmit={handleFormSubmit}
              enableReinitialize // This will reset the form when initialFormValues changes
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <div className="my-5 mr-5 relative overflow-hidden">
                        <label
                          htmlFor="fullname"
                          className={`bg-gradient-to-r bg-clip-text text-xs text-transparent font-semibold uppercase transition-all duration-300 ${
                            focused === 3
                              ? 'from-gray-800 to-gray-400'
                              : 'from-gray-600 to-gray-600'
                          }`}
                        >
                          Full Name
                        </label>
                        <Field
                          type="text"
                          name="fullname"
                          className="form-input w-full border-0 border-b-2 border-gray-300 bg-white bg-opacity-80 placeholder-gray-400 focus:border-gray-300 focus:ring-0"
                          onFocus={() => setFocused(3)}
                          onBlur={() => setFocused(null)}
                        />

                        <ErrorMessage
                          name="fullname"
                          component="div"
                          className="bg-gradient-to-r bg-clip-text text-xs text-red-600 font-semibold uppercase transition-all duration-300"
                        />
                        {/* right side */}
                      </div>
                    </div>

                    <div className="my-5 mr-5 relative overflow-hidden">
                      <label
                        htmlFor="phone"
                        className={`bg-gradient-to-r bg-clip-text text-xs text-transparent font-semibold uppercase transition-all duration-300 ${
                          focused === 3
                            ? 'from-gray-800 to-gray-400'
                            : 'from-gray-600 to-gray-600'
                        }`}
                      >
                        Phone Number
                      </label>
                      <Field
                        type="text"
                        name="phone"
                        className="form-input w-full border-0 border-b-2 border-gray-300 bg-white bg-opacity-80 placeholder-gray-400 focus:border-gray-300 focus:ring-0"
                        onFocus={() => setFocused(3)}
                        onBlur={() => setFocused(null)}
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="bg-gradient-to-r bg-clip-text text-xs text-red-600 font-semibold uppercase transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div className="my-5 mr-5 relative overflow-hidden">
                    <label
                      htmlFor="address"
                      className={`bg-gradient-to-r bg-clip-text text-xs text-transparent font-semibold uppercase transition-all duration-300 ${
                        focused === 3
                          ? 'from-gray-800 to-gray-400'
                          : 'from-gray-600 to-gray-600'
                      }`}
                    >
                      Address
                    </label>
                    <div className="relative">
                      <span className="absolute left-4.5 top-4"></span>
                      <Field
                        type="text"
                        name="address"
                        className="form-input w-full border-0 border-b-2 border-gray-300 bg-white bg-opacity-80 placeholder-gray-400 focus:border-gray-300 focus:ring-0"
                        onFocus={() => setFocused(3)}
                        onBlur={() => setFocused(null)}
                      />
                      <ErrorMessage
                        name="address"
                        component="div"
                        className="bg-gradient-to-r bg-clip-text text-xs text-red-600 font-semibold uppercase transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div className="my-5 mr-5 relative overflow-hidden">
                    <label
                      htmlFor="email"
                      className="bg-gradient-to-r bg-clip-text text-xs text-gray-400 font-semibold uppercase transition-all duration-300"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <span className="absolute left-4.5 top-4"></span>
                      <Field
                        type="text"
                        name="email"
                        disabled
                        className="form-input w-full border-0 border-b-2 text-gray-400 border-gray-300 bg-white bg-opacity-80 placeholder-gray-400 focus:border-gray-300 focus:ring-0"
                        onFocus={() => setFocused(3)}
                        onBlur={() => setFocused(null)}
                      />
                      <ErrorMessage name="email" component="div" />
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

export default Profile;
