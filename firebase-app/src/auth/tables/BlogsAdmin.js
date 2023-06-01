import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
// protected routes
import SignOut from "../users/SignOut";
import BlogDataQuery from "../../firestore/BlogDataQuery";
import BlogDataMutations from "../../firestore/BlogDataMutations";

// pass props from parent for Id to child components via click handler
const BlogsAdmin = ({ getBlogById }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);
  const fetchBlogs = async () => {
    const data = await BlogDataQuery.getAllBlogs();
    setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const handleDelete = async (id) => {
    await BlogDataMutations.deleteBlog(id);
    fetchBlogs();
  };
  return (
    <div className='App'>
      <SignOut />
      <h2>Blogs Admin Panel</h2>
      <button>
        <Link to='/add-blog'>Create a new blog</Link>
      </button>
      <table>
        <thead>
          <tr>
            <th>Serial No</th>
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
                <td>{index + 1}</td>
                <td>{doc.id}</td>
                <td> {doc.title} </td>
                <td>{doc.author}</td>
                <td>
                  <button onClick={(event) => getBlogById(doc.id)}>
                    <Link to='/update-blog'>Update</Link>
                  </button>
                </td>
                <td>
                  <button onClick={(e) => handleDelete(doc.id)}>Delete</button>
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
