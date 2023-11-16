import React, { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import { useParams } from 'react-router-dom';
import adminModelApi from '../../../api/adminModelApi';
import ModelForm from '../../components/Models/ModelForm';

const ModelAddManager = () => {
  const { brandId } = useParams();
  const [modelAdded, setModelAdded] = useState(false);
  const [error, setError] = useState(null);

  const initialValues = {
    modelname: '',
    price: '',
    imageurl: '',
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await adminModelApi.add(brandId, values);
      console.log(response);
      setModelAdded(true);
      // Optionally, reset form or navigate away
    } catch (error) {
      console.error('Error adding model:', error);
      setError(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-270">
      <Breadcrumb pageName="Add Shoe Model" />
      {/* Error or Success Messages */}
      {error && <div>Error adding model</div>}
      {modelAdded && <div>Model added successfully</div>}
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
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelAddManager;
