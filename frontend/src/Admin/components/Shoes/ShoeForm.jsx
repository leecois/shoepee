import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import adminShoeApi from '../../../api/adminShoeApi';
import { useParams } from 'react-router-dom';

// Yup validation schema
const ShoeSchema = Yup.object().shape({
  price: Yup.string().required('Model ID is required'),
  description: Yup.string().required('Description is required'),
  imageUrl: Yup.string().required('Image is required'),
});

function ShoeForm({ onShoeAdded }) {
  const { modelId } = useParams();
  const initialShoeData = {
    price: '',
    description: '',
    imageUrl: '',
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    const shoeData = {
      price: values.price,
      description: values.description,
      imageUrl: values.imageUrl,
    };

    try {
      const response = await adminShoeApi.add(modelId, shoeData);
      onShoeAdded(response);
    } catch (error) {
      console.error('Error adding shoe:', error);
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialShoeData}
      validationSchema={ShoeSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="price" placeholder="Price" />
          <ErrorMessage name="price" component="div" />

          <Field type="text" name="description" placeholder="Description" />
          <ErrorMessage name="description" component="div" />

          <Field type="text" name="imageUrl" placeholder="ImageUrl" />
          <ErrorMessage name="imageUrl" component="div" />

          <button type="submit" disabled={isSubmitting}>
            Add Shoe
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default ShoeForm;
