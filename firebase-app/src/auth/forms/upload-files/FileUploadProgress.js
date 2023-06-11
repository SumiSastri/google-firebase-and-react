import React, { useEffect } from "react";
import useFileStorage from "../../../hooks/useFileStorage";

// Call function (hook) here
const FileUploadProgress = ({ file, setFile }) => {
  const { progress, fileUrl } = useFileStorage(file);

  useEffect(() => {
    if (fileUrl) {
      setFile(null);
    }
  }, [fileUrl, setFile]);

  return (
    <div>
      <h2>Upload progress: {progress}%</h2>
    </div>
  );
};

export default FileUploadProgress;
