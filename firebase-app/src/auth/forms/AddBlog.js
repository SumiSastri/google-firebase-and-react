import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// protected routes
import SignOut from "../users/SignOut";
import BlogDataMutations from "../../firestore/BlogDataMutations";

const AddBlog = () => {
  const navigate = useNavigate();
  // state management
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const submitBlogPayload = async (event) => {
    event.preventDefault();

    const blogPayload = {
      title,
      author,
    };
    console.log(blogPayload);

    await BlogDataMutations.addBlog(blogPayload);

    const resetBlogFields = () => {
      setTitle("");
      setAuthor("");
    };
    resetBlogFields();
    navigate("/blogs-admin");
  };

  return (
    <div>
      <SignOut />
      <form onSubmit={submitBlogPayload}>
        <h2>Add content to your blog</h2>
        <input
          type='text'
          placeholder='Blog title'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type='text'
          placeholder='Author'
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
        <button type='submit'>Submit blog</button>
        <Link to='/blogs-admin'>Cancel</Link>
      </form>
    </div>
  );
};

export default AddBlog;
