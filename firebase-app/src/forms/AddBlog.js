import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignOut from "../auth/forms/SignOut";

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

    const resetBlogFields = () => {
      setTitle("");
      setAuthor("");
    };
    resetBlogFields();
    navigate("/blogs");
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
      </form>
    </div>
  );
};

export default AddBlog;
