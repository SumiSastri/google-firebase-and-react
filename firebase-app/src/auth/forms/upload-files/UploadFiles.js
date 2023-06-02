import React, { useState } from "react";
import { Link } from "react-router-dom";

const UploadFiles = () => {
  // const navigate = useNavigate();
  // state management
  const [uploadImage, setUploadImage] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);

  // types is a key from firestore
  const types = ["image/png", "image/jpeg"];

  const handleImageUpload = (e) => {
    let selected = e.target.files[0];
    // check right file extensions uploaded
    if (selected && types.includes(selected.type)) {
      setUploadImage(selected);
      setImageUploadError("");
    } else {
      setUploadImage(null);
      setImageUploadError("Please select an image file (png or jpg)");
    }
  };

  return (
    <div>
      <h2>Upload photos and files</h2>
      <label>
        <input type='file' onChange={handleImageUpload} />
        <button>Upload photos</button>
      </label>
      <Link to='/blogs-admin'>Cancel</Link>
      {/* if there is an error output error */}
      <section>
        {imageUploadError && <div className='danger'>{imageUploadError}</div>}
        {uploadImage && (
          <div className='uploads'>
            <h4>File to upload: {uploadImage.name}</h4>
          </div>
        )}
      </section>
    </div>
  );
};

export default UploadFiles;
