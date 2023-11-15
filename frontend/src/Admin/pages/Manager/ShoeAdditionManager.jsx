import React, { useState } from 'react';
import ShoeForm from '../../components/Shoes/ShoeForm';
import ImageUploadForm from '../../components/Shoes/ImageUploadForm';

function ShoeAdditionManager() {
  const [shoeAdded, setShoeAdded] = useState(false);
  const [newShoe, setNewShoe] = useState(null);

  const onShoeAdded = (shoeData) => {
    setShoeAdded(true);
    setNewShoe(shoeData);
  };

  return (
    <div>
      {!shoeAdded ? (
        <ShoeForm onShoeAdded={onShoeAdded} />
      ) : (
        <>
          <h2>Add Images for the Shoe</h2>
          {[...Array(4)].map((_, index) => (
            <ImageUploadForm key={index} shoeId={newShoe.id} />
          ))}
        </>
      )}
    </div>
  );
}

export default ShoeAdditionManager;
