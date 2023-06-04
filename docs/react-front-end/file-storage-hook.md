---
layout: default
title: File storage hook
parent: React front end
nav_order: 5
---

# File storage hook

Custom hooks can be created - the hook is a function - declared in one component. In this particular case the hook takes some specific methods from the Firebase storage system.

Once this hook is declared it can be called in any component and reused.

```JavaScript
import { useState, useEffect } from "react";
import { staticFileStorage } from "../firebase/config";

// param is the file to upload
const useFirebaseStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  // file to be uploaded dependency
  useEffect(() => {
    // references to where the file stored - from Firebase config
    const fileStorageRef = staticFileStorage.ref(file.name);
    // put method to load the file on the queue to store in storage system
    fileStorageRef.put(file).on(
      "state_changed",
      //  snap a method from storage - gives you the bytes transfered
      (snap) => {
        // create formula to show percent of file uploaded
        let percentTransferred =
          (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentTransferred);
        console.log(percentTransferred);
      },
      (err) => {
        setError(err);
      },
      //   separate scope
      async () => {
        const url = await fileStorageRef.getDownloadURL();
        setUrl(url);
      }
    );
  }, [file]);
  // return value of this function declaration
  return { progress, url, error };
};

export default useFirebaseStorage;

```
