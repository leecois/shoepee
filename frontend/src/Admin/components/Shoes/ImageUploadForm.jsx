import React, { useState } from 'react';

const ImageUploadForm = ({ shoeId }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Shoe ID:', shoeId);
    console.log('Image URL:', imageUrl);
  };
  const [imageUrl, setImageUrl] = useState('');

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Image URL"
      />
      <button type="submit">Add Image</button>
    </form>
  );
};

export default ImageUploadForm;
