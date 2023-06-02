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

      {blogs.map((doc, index) => {
        return (
          <ul key={doc.id}>
            <li>
              {doc.title} {doc.author}
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Blogs;
