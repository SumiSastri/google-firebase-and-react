import { useState } from "react";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import { motion } from "framer-motion";
const UploadFiles = () => {
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const submitUploadedFile = (e) => {
    e.preventDefault();

    let selected = e.target[0].files[0];

    if (selected) {
      setFile(selected);
      setErrorMessage("Upload complete");
    } else {
      setFile(null);
      setErrorMessage("Please select a file");
    }
  };

  return (
    <div>
      <form onSubmit={submitUploadedFile}>
        <Link to='/'>Home</Link>
        {errorMessage && <h5 className='danger'>{errorMessage}</h5>}
        {file && (
          <motion.div
            animate={{ x: 1 }}
            transition={{ ease: "easeOut", duration: 2 }}
            className='image-wrapper'
          >
            <h6>Uploading:{file.name}</h6>
          </motion.div>
        )}
        {file && (
          <h5>
            Upload progress:
            <ProgressBar file={file} setFile={setFile} />
          </h5>
        )}
        <input type='file' className='input' />
        <button type='submit'>Upload</button>
      </form>
    </div>
  );
};

export default UploadFiles;
