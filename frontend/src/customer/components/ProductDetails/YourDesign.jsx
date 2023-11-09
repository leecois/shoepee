import React, { useState, useRef } from 'react';

const YourDesign = ({ selectedShoeImages = [], handleShoeButtonClick }) => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [showUploadButton, setShowUploadButton] = useState(true);
  const uploadInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const imageUrls = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setUploadedImages((prevImages) => [...prevImages, ...imageUrls]);
      setShowUploadButton(false);
    }
  };

  return (
    <div>
      {/* File input for image upload */}
      <input
        type="file"
        accept="image/*"
        multiple
        ref={uploadInputRef}
        style={{ display: 'none' }}
        onChange={handleImageUpload}
      />

      {showUploadButton && (
        <button
          className="mt-7 py-2 w-32 rounded-md border-2 outline-8 text-base text-red font-semibold tracking-wide hover:text-red-600"
          onClick={() => uploadInputRef.current.click()}
        >
          Upload Image
        </button>
      )}

      {/* Display uploaded images */}
      <div className="mt-2 flex flex-wrap">
        {uploadedImages.map((imageUrl, index) => (
          <button
            key={index}
            className={` inline-flex flex-col items-center mx-2 mt-4 space-y-2 rounded-3xl border-2 ${
              selectedShoeImages === imageUrl
                ? 'border border-red-400'
                : 'border border-gray-200'
            } text-left`}
            onClick={() => handleShoeButtonClick({ imageUrl })}
          >
            <img
              src={imageUrl}
              alt={`Uploaded Images ${index}`}
              className="object-cover p-1 w-22 h-22 rounded-3xl"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default YourDesign;
