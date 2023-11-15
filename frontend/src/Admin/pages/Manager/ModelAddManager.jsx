import React from 'react';
import ModelForm from '../../components/Models/ModelForm';
import { useState } from 'react';

const ModelAddManager = () => {
  const [setNewModel] = useState(null);
  const onModelAdded = (modelData) => {
    setNewModel(modelData);
  };
  return (
    <div>
      <ModelForm onModelAdded={onModelAdded} />
    </div>
  );
};

export default ModelAddManager;
