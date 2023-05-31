import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignOut from "../auth/forms/SignOut";

const UpdateBlog = () => {
  const navigate = useNavigate();
  // state management
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateAuthor, setUpdateAuthor] = useState("");

  const submitUpdateBlogPayload = async (event) => {
    event.preventDefault();

    const updateBlogPayload = {
      updateTitle,
      updateAuthor,
    };
    console.log(updateBlogPayload);

    const resetFields = () => {
      setUpdateTitle("");
      setUpdateAuthor("");
    };
    resetFields();
    navigate("/blogs");
  };

  return (
    <div>
      <SignOut />
      <form onSubmit={submitUpdateBlogPayload}>
        <h2>Edit or Update Blog</h2>
        <input
          type='text'
          value={updateTitle}
          onChange={(event) => setUpdateTitle(event.target.value)}
        />
        <input
          type='text'
          value={updateAuthor}
          onChange={(event) => setUpdateAuthor(event.target.value)}
        />
        <button type='submit'>Update blog</button>
      </form>
    </div>
  );
};

export default UpdateBlog;
