import React from 'react';
import { Form, useParams } from 'react-router-dom';
import adminModelApi from '../../../api/adminModelApi';
import * as Yup from 'yup';
import { ErrorMessage, Field, Formik } from 'formik';

// Yup validation schema
const ModelSchema = Yup.object().shape({
  price: Yup.string().required('Model ID is required'),
  description: Yup.string().required('Description is required'),
  imageUrl: Yup.string().required('Image is required'),
});

const ModelForm = ({ onModelAdded }) => {
  const { brandId } = useParams();
  const initialModelData = {
    modelname: '',
    imageurl: '',
    price: '',
  };
  const handleSubmit = async (values, { setSubmitting }) => {
    const modelData = {
      modelname: values.modelname,
      imageurl: values.imageurl,
      price: values.price,
    };

    try {
      const response = await adminModelApi.add(brandId, modelData);
      onModelAdded(response);
    } catch (error) {
      console.error('Error adding Model:', error);
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialModelData}
      validationSchema={ModelSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="modelname" placeholder="Modelname" />
          <ErrorMessage name="modelname" component="div" />

          <Field type="text" name="imageurl" placeholder="Imageurl" />
          <ErrorMessage name="imageurl" component="div" />

          <Field type="text" name="price" placeholder="Price" />
          <ErrorMessage name="price" component="div" />

          <button type="submit" disabled={isSubmitting}>
            Add Model
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ModelForm;
