import React, { useEffect } from "react";
import useImageStorage from "../../../hooks/useImageStorage";

const ImageUploadProgress = ({ image, setImage }) => {
  const { progress, imageUrl } = useImageStorage(image);

  useEffect(() => {
    if (imageUrl) {
      setImage(null);
    }
  }, [imageUrl, setImage]);

  return (
    <div>
      <h2>Upload progress: {progress}%</h2>
    </div>
  );
};

export default ImageUploadProgress;
