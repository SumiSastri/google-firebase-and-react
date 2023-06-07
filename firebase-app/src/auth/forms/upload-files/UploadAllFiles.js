import { useState } from "react";
import { Link } from "react-router-dom";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../configs/firebase";

const UploadFiles = () => {
  const [progress, setProgress] = useState(0);

  const submitUploadedFile = (e) => {
    e.preventDefault();

    const file = e.target[0].files[0];
    fileUpload(file);
  };

  const fileUpload = async (file) => {
    //
    if (!file) return;

    const fileStorageReference = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(fileStorageReference, file);

    await uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
        });
      }
    );
  };

  return (
    <div>
      <form onSubmit={submitUploadedFile}>
        <input type='file' className='input' />
        <button type='submit'>Upload</button>
        <Link to='/blogs-admin'>
          <button>Back to admin</button>
        </Link>
        <h2>Upload progress: {progress}%</h2>
      </form>
    </div>
  );
};

export default UploadFiles;
