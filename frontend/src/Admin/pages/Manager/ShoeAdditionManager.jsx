import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import adminShoeApi from '../../../api/adminShoeApi';
import ShoeForm from '../../components/Shoes/ShoeForm';
import ImageForm from '../../components/Shoes/ImageForm';

const ShoeAdditionManager = () => {
  const { modelId } = useParams();
  const [shoeAdded, setShoeAdded] = useState(false);
  const [shoeId, setShoeId] = useState(null);
  const [error, setError] = useState(null);

  const initialShoeValues = {
    description: '',
    price: '',
    imageUrl: '',
  };

  const handleShoeSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await adminShoeApi.add(modelId, values);
      console.log(response);
      setShoeId(response.id); // Assuming response contains shoeId
      setShoeAdded(true);
    } catch (error) {
      console.error('Error adding shoe:', error);
      setError(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-270">
      <Breadcrumb pageName="Add Shoe For Model" />
      {/* Error or Success Messages */}
      {error && <div>Error adding shoe</div>}
      {shoeAdded && <div>Shoe added successfully</div>}
      {/* Shoe Information Form */}
      <div className="grid gap-8">
        <div className="col-span-5 xl:col-span-3">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Shoe Information
              </h3>
            </div>
            <div className="p-7">
              <ShoeForm
                initialValues={initialShoeValues}
                onSubmit={handleShoeSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoeAdditionManager;
