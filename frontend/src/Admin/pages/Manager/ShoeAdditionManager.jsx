import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import ShoeForm from '../../components/Shoes/ShoeForm';
import adminShoeApi from '../../../api/adminShoeApi';
import { useAlert } from '../../../customer/components/Alert/AlertContext';

// Component for adding new shoes to a model
const ShoeAdditionManager = () => {
  const { modelId } = useParams();
  const { showAlert } = useAlert();

  const initialShoeValues = {
    name: '',
    description: '',
    price: '',
    imageUrl: '',
  };

  // Handles the shoe form submission
  const handleShoeSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await adminShoeApi.add(modelId, values);
      if (response) {
        showAlert('Shoe added successfully', 'success');
      }
    } catch (error) {
      console.error('Error adding shoe:', error);
      showAlert('Failed to add shoe. Please try again.', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-270">
      <Breadcrumb pageName="Add Shoe For Model" />
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
