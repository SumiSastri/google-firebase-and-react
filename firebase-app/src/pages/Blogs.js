import React, { useEffect, useState } from "react";
// data
import BlogDataQuery from "../firestore/BlogDataQuery";

// pass data from query into props
const Blogs = () => {
  // state management
  const [blogs, setBlogs] = useState([]);

  // make data call - set state to data
  useEffect(() => {
    fetchBlogs();
  }, []);

  // note the name data can not be customised
  const fetchBlogs = async () => {
    const data = await BlogDataQuery.getAllBlogs();
    console.log(data.docs);
    setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  // pass props to render mutated data
  return (
    <div className='App'>
      <h2>Blogs</h2>

      {blogs.map((doc) => {
        return (
          <div className='card-gallery'>
            <div className='card-list' key={doc.id}>
              <p className='card'>
                {doc.title} {doc.author}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Blogs;
