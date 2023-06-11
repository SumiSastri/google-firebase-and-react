import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ImageUploadProgress from "./ImageUploadProgress";

const UploadImages = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const submitImageUpload = async (event) => {
    event.preventDefault();

    let selected = event.target[0].files[0];

    if (selected) {
      setImage(selected);
      setErrorMessage("Your image has been successfully uploaded");
      navigate("/blogs-admin");
    } else {
      setImage(null);
      setErrorMessage("Please select an image");
    }
  };

  return (
    <>
      <form onSubmit={submitImageUpload}>
        {errorMessage && <h5 className='danger'>{errorMessage}</h5>}
        <input
          type='file'
          onChange={(event) => {
            setImage(event.target.files[0]);
          }}
        />
        <button type='submit'>Submit Uploaded Image</button>
        {image && <h6>Uploading:{image.name}</h6>}
        {image && (
          <h5>
            <ImageUploadProgress image={image} setImage={setImage} />
          </h5>
        )}
        <button>
          <Link to='/blogs-admin'>Return to Admin Page</Link>
        </button>
      </form>
      <hr />
    </>
  );
};

export default UploadImages;
