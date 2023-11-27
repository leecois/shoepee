import { enqueueSnackbar } from 'notistack';
import React from 'react';
import adminShoeApi from '../../../api/adminShoeApi';
import AdminModelData from '../../../hooks/AdminModelData';
import Breadcrumb from '../../components/Breadcrumb';
import ShoeForm from '../../components/Shoes/ShoeForm';

// Component for adding new shoes to a model
const ShoeAdditionManager = () => {
  const { modelList } = AdminModelData();
  const initialShoeValues = {
    shoeModelDto: {
      modelname: '',
    },
    name: '',
    price: '',
    imageUrl: '',
    description: '',
    shoeQuantity: 0,
  };

  // Handles the shoe form submission
  const handleShoeSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await adminShoeApi.add(values);
      if (response) {
        enqueueSnackbar('Shoe added successfully', {
          variant: 'success',
        });
      }
    } catch (error) {
      enqueueSnackbar('Failed to add shoe. Please try again', {
        variant: 'error',
      });
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
                modelList={modelList} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoeAdditionManager;
