import { db } from "../firebase-config";
import {
  addDoc,
  updateDoc,
  deleteDoc,
  collection,
  doc,
} from "firebase/firestore";

const blogCollectionRef = collection(db, "blogs");

class BlogDataMutations {
  addBlog = (newBlog) => {
    return addDoc(blogCollectionRef, newBlog);
  };

  updateBlog = (id, updatedBlog) => {
    const blogDoc = doc(db, "blogs", id);
    return updateDoc(blogDoc, updatedBlog);
  };

  deleteBlog = (id) => {
    const blogDoc = doc(db, "blogs", id);
    return deleteDoc(blogDoc);
  };
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new BlogDataMutations();
