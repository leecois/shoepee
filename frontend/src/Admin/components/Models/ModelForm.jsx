import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const modelSchema = Yup.object().shape({
  modelname: Yup.string().required('Please enter model name'),
});

const ModelForm = ({ initialValues, onSubmit }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={modelSchema}
    onSubmit={onSubmit}
  >
    {({ isSubmitting, values }) => (
      <Form>
        <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
          <div className="w-full">
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Model Name
            </label>
            <div className="relative">
              <span className="absolute left-4.5 top-4"></span>
              <Field
                className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus-border-primary"
                type="text"
                name="modelname"
                placeholder="Air"
              />
              <ErrorMessage
                name="modelname"
                component="div"
                className="error"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4.5">
          <button
            className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
            type="submit"
          >
            Reset
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

export default ModelForm;
