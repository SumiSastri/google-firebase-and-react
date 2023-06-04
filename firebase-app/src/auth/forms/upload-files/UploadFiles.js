import { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../../../configs/firebase";
import { v4 } from "uuid";
import { Link } from "react-router-dom";

const UploadImages = () => {
  // state management
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const imagesListRef = ref(storage, "images/");

  const submitFileUpload = () => {
    if (imageUpload == null) return;

    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
        const resetImageUpload = () => {
          setImageUrls("");
        };
        resetImageUpload();
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <>
      {console.log(imageUrls, "image urls")}
      <form onSubmit={submitFileUpload}>
        <input
          type='file'
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}
        />
        <button type='submit'>Upload image</button>
        <Link to='/blogs-admin'>Cancel</Link>
      </form>
      <section className='image-gallery'>
        {imageUrls.map((imageUrl, index) => {
          return (
            <p key={index + 1}>
              {index + 1}
              <img src={imageUrl} alt='uploaded file' />
            </p>
          );
        })}
      </section>
    </>
  );
};

export default UploadImages;
