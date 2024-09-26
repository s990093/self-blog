// components/ImageUploader.tsx
import React, { useState } from "react";

const ImageUploader = () => {
  const [imagePreview, setImagePreview] = useState("");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-3/4 max-w-lg bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Upload an Image</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-4"
      />
      {imagePreview && (
        <div className="mb-4">
          <img
            src={imagePreview}
            alt="Preview"
            className="max-w-full max-h-48 object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
