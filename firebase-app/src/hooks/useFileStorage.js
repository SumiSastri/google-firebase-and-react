import { useState, useEffect } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../configs/firebase";

const useFileStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [fileUrl, setFileUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fileStorageReference = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(fileStorageReference, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progressPercentage = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercentage);
      },
      (error) => {
        setError(error);
      },
      async () => {
        let fileUrl = await getDownloadURL(uploadTask.snapshot.ref);
        setFileUrl(fileUrl);
      }
    );
  }, [file]);

  return { progress, fileUrl, error };
};

export default useFileStorage;
