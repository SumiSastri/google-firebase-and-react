import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FileUploadProgress from "./FileUploadProgress";

const UploadFiles = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const submitUploadedFile = (e) => {
    e.preventDefault();

    let selected = e.target[0].files[0];

    if (selected) {
      setFile(selected);
      setErrorMessage("You have successfully completed uploading your file ");
      navigate("/blogs-admin");
    } else {
      setFile(null);
      setErrorMessage("Please select a file");
    }
  };

  return (
    <div>
      <form onSubmit={submitUploadedFile}>
        {errorMessage && <h5 className='danger'>{errorMessage}</h5>}
        {file && <h6>Uploading{file.name}</h6>}
        <input type='file' className='input' />
        <button type='submit'>Submit uploaded file</button>
        {file && (
          <h5>
            <FileUploadProgress file={file} setFile={setFile} />
          </h5>
        )}
        <button>
          <Link to='/blogs-admin'>Return to Admin Page</Link>
        </button>
      </form>
    </div>
  );
};

export default UploadFiles;
