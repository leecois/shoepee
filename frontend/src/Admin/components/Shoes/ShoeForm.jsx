import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const shoeScheme = Yup.object().shape({
  shoeModelDto: Yup.object().shape({
    modelname: Yup.string().required('Please select a model'),
  }),
  name: Yup.string().required('Please enter name'),
  price: Yup.number()
    .min(1000, 'Price must be greater than 1000')
    .required('Please enter price'),
  description: Yup.string().required('Please enter description'),
  imageUrl: Yup.string()
    .url('Must be a valid URL')
    .required('Please enter image url'),
  shoeQuantity: Yup.number()
    .min(0, 'Quantity cannot be negative')
    .required('Please enter quantity'),
});

const ShoeForm = ({ initialValues, onSubmit, modelList }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={shoeScheme}
    onSubmit={onSubmit}
  >
    {({ isSubmitting, values }) => (
      <Form>
        <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
          <div className="w-full sm:w-1/2">
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Name
            </label>
            <div className="relative">
              <span className="absolute left-4.5 top-4"></span>
              <Field
                className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus-border-primary"
                type="text"
                name="name"
                placeholder=""
              />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Price (VND)
            </label>
            <Field
              className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus-border-primary"
              type="number"
              name="price"
              min="1000"
              placeholder="0"
            />
            <ErrorMessage name="price" component="div" className="error" />
          </div>
          <div className="w-full sm:w-1/2">
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Quantity
            </label>
            <Field
              className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus-border-primary"
              type="number"
              name="shoeQuantity"
              min="0"
              placeholder="0"
            />
            <ErrorMessage
              name="shoeQuantity"
              component="div"
              className="error"
            />
          </div>
        </div>
        {/* Model Name Field */}
        <div className="mb-5.5">
        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
          Select Model
        </label>
        <Field as="select" name="shoeModelDto.modelname" className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary">
          <option value="">Select a Model</option>
          {modelList.map((model) => (
            <option key={model.id} value={model.modelname}>
              {model.modelname}
            </option>
          ))}
        </Field>
        <ErrorMessage name="shoeModelDto.modelname" component="div" className="error" />
      </div>
        <div className="mb-5.5">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Description
          </label>
          <Field
            className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
            type="text"
            as="textarea"
            name="description"
          />
          <ErrorMessage name="description" component="div" className="error" />
        </div>
        {/* Image URL Field */}
        <div className="mb-5.5">
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Img Thumbnail Url
          </label>
          <Field
            className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
            type="text"
            name="imageUrl"
          />
          <ErrorMessage name="imageUrl" component="div" className="error" />
        </div>

        {/* Image Preview */}
        {values.imageUrl && (
          <div className="relative mb-5.5 block w-full rounded border-2 border-dashed bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5">
            <img
              src={values.imageUrl}
              alt="Preview"
              className="max-w-full w-full h-auto"
            />
          </div>
        )}

        <div className="flex justify-end gap-4.5">
          <button
            className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
            type="reset"
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

export default ShoeForm;
