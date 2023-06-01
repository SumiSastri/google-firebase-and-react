import { db } from "../configs/firebase";
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

  updateBlog = (id, updatedBlogPayload) => {
    const blogDoc = doc(db, "blogs", id);
    return updateDoc(blogDoc, updatedBlogPayload);
  };

  deleteBlog = (id) => {
    const blogDoc = doc(db, "blogs", id);
    return deleteDoc(blogDoc);
  };
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new BlogDataMutations();
