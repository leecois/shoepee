import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const shoeScheme = Yup.object().shape({
  imageUrl: Yup.string().url('Must be a valid URL').required('Please enter image url'),
});

const ImageForm = ({ initialValues, onSubmit }) => {
  initialValues.imageUrl = initialValues.imageUrl || '';

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={shoeScheme}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="mb-5.5">
            {/* Image URL Field */}
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Image URL
            </label>
            <Field
              className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
              type="text"
              name="imageUrl"
            />
            <ErrorMessage name="imageUrl" component="div" className="error" />
          </div>

          <div className="flex justify-end gap-4.5">
            <button
              className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
              type="reset"
            >
              Cancel
            </button>
            <button
              className="flex justify-center rounded bg-black-2 dark:bg-white dark:text-black-2 py-2 px-6 font-medium text-white hover:shadow-1"
              type="submit"
              disabled={isSubmitting}
            >
              Save
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ImageForm;
