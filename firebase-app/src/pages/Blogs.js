import React, { useEffect, useState } from "react";
import BlogDataQuery from "../firestore/BlogDataQuery";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  // note the name data can not be customised
  const fetchBlogs = async () => {
    const data = await BlogDataQuery.getAllBlogs();
    console.log(data.docs);
    setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  return (
    <div className='App'>
      <h2>Blogs</h2>

      {blogs.map((doc, index) => {
        return (
          <div className='card-gallery'>
            <div className='card-wrapper' key={doc.id}>
              <div className='card'>
                {doc.title} {doc.author}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Blogs;
