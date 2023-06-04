import { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../../../configs/firebase";
import { v4 } from "uuid";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const UploadImages = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const submitFileUpload = () => {
    if (imageUpload == null) return;
    // uuid - attached to name of file to give a unique upload and download experience
    const fileExtension = imageUpload.name.split(".").pop();
    const uniqueId = v4();
    const imageName = `${imageUpload.name}_${uniqueId}.${fileExtension}`;

    const imageRef = ref(storage, `images/${imageName}`);
    uploadBytes(imageRef, imageUpload)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            setImageUrls((prev) => [...prev, url]);
          })
          .catch((error) => {
            console.log(error, "fail - download image from file storage");
          });
      })
      .catch((error) => {
        console.log(error, "fail upload image to file storage");
      });

    // Reset the file input
    setImageUpload(null);
  };

  useEffect(() => {
    const imagesListRef = ref(storage, "images/");

    listAll(imagesListRef)
      .then((response) => {
        // create a promise to prevent 2 sets of data
        const promises = response.items.map((item) =>
          getDownloadURL(item).catch((error) => {
            // console.log(response.items.length, "check length of response");
            // console.log("Full Path:", item.fullPath);
            // console.log("File Name:", item.name);
            console.log(error, "check response mapping errors");
            return null;
          })
        );

        Promise.all(promises)
          .then((urls) => {
            const filteredUrls = urls.filter((url) => url !== null);
            console.log(filteredUrls, "check filtering works");
            setImageUrls(filteredUrls);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
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
        {imageUrls.map((imageUrl) => (
          <motion.div
            animate={{ x: 100 }}
            transition={{ ease: "easeOut", duration: 2 }}
            className='image-wrapper'
          >
            <motion.img src={imageUrl} alt='uploaded file' />
          </motion.div>
        ))}
      </section>
    </>
  );
};

export default UploadImages;
