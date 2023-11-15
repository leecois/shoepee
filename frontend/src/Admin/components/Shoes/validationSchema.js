import * as Yup from 'yup';

export const shoeInfoSchema = Yup.object().shape({
  modelId: Yup.string().required('Model ID is required'),
  price: Yup.number()
    .typeError('Price must be a number')
    .positive('Price must be positive')
    .required('Price is required'),
  description: Yup.string().required('Description is required'),
  imageUrl: Yup.string().url('Invalid URL').required('Image URL is required'),
});

export const shoeImagesSchema = Yup.array()
  .of(Yup.string().url('Invalid URL'))
  .min(4, 'Please add exactly 4 images')
  .required('Image URLs are required');
