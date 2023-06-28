import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import BlogDataQuery from "../../firestore/BlogDataQuery";
import BlogDataMutations from "../../firestore/BlogDataMutations";
import SignOut from "../users/SignOut";

const BlogsAdmin = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogId, setBlogId] = useState("");

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const data = await BlogDataQuery.getAllBlogs();
    setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const fetchBlogId = async (id) => {
    const data = await BlogDataQuery.getBlogById(id);
    console.log(data);
    setBlogId(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const handleDelete = async (id) => {
    await BlogDataMutations.deleteBlog(id).then(
      console.log(handleDelete, "blog deleted")
    );

    fetchBlogs();
  };

  const handleUpdate = async (id) => {
    await BlogDataMutations.updateBlog(id);
    // refreshes the list by refetching data
    fetchBlogId(id);
  };

  return (
    <div className='App'>
      <SignOut />

      <h2>Blogs Admin Panel</h2>
      <Link to='/add-blog'>Create content</Link>
      <Link to='/upload-images'>Upload images</Link>
      <Link to='/upload-files'>Upload files</Link>

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
                  <button id={blogId} onClick={(e) => handleUpdate(doc.id)}>
                    <Link to={`/update-blog/${doc.id}/${doc.id}`}>Update</Link>
                  </button>
                </td>
                <td>
                  <button
                    className='danger'
                    onClick={(e) => handleDelete(doc.id)}
                  >
                    Delete
                  </button>
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
