import { enqueueSnackbar } from 'notistack';
import React from 'react';
import adminModelApi from '../../../api/adminModelApi';
import Breadcrumb from '../../components/Breadcrumb';
import ModelForm from '../../components/Models/ModelForm';
import AdminBrandData from '../../../hooks/AdminBrandData';

// Component for adding a new model
const ModelAddManager = () => {
  const { brandList } = AdminBrandData();
  const initialValues = {
    brandDto: {
      brandName: '',
    },
    modelname: '',
  };

  // Handles form submission
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await adminModelApi.add(values);
      if (response) {
        enqueueSnackbar('Model added successfully ', {
          variant: 'success',
        });
      }
    } catch (error) {
      console.error('Error adding model:', error);
      enqueueSnackbar('Failed to add model. Please try again.', {
        variant: 'error',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-270">
      <Breadcrumb pageName="Add Shoe Model" />
      <div className="grid gap-8">
        <div className="col-span-5 xl:col-span-3">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Shoe Model Information
              </h3>
            </div>
            <div className="p-7">
              <ModelForm
                initialValues={initialValues}
                onSubmit={handleSubmit}
                brandList={brandList} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelAddManager;
