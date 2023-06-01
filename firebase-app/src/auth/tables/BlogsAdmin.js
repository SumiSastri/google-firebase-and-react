import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
// protected routes
import SignOut from "../users/SignOut";
import BlogDataQuery from "../../firestore/BlogDataQuery";

const BlogsAdmin = ({ getBlogId }) => {
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

  return (
    <div className='App'>
      <SignOut />
      <h2>Blogs Admin Panel</h2>
      <table>
        <thead>
          <tr>
            <th> Id</th>
            <th> Blog Title</th>
            <th> Author </th>
            <th> Admin Options</th>
            <th> Danger Zone</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{doc.id}</td>
                <td> {doc.title} </td>
                <td>{doc.author}</td>
                <td>
                  <Link to='/add-blog'>Create</Link>
                  <Link to='/update-blog'>Update</Link>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BlogsAdmin;
