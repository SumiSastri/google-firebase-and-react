import { useState, useEffect } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../configs/firebase";

// function declaration
const useImageStorage = (image) => {
  const [progress, setProgress] = useState(0);
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const imageStorageReference = ref(storage, `images/${image.name}`);
    const uploadTask = uploadBytesResumable(imageStorageReference, image);

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
        let imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
        setImageUrl(imageUrl);
      }
    );
  }, [image]);

  return { progress, imageUrl, error };
};

export default useImageStorage;
