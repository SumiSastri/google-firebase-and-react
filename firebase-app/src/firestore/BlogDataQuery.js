import { db } from "../configs/firebase";
import { getDoc, getDocs, collection, doc } from "firebase/firestore";

const blogCollectionRef = collection(db, "blogs");

class BlogDataQuery {
  getAllBlogs = () => {
    return getDocs(blogCollectionRef);
  };

  getBlogById = (id) => {
    const blogDoc = doc(db, "blogs", id);
    return getDoc(blogDoc);
  };
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new BlogDataQuery();
