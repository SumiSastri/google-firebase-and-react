import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// protected routes
import SignOut from "../users/SignOut";
import BlogDataMutations from "../../firestore/BlogDataMutations";
import BlogDataQuery from "../../firestore/BlogDataQuery";

// pass id of blog as props from the table
const UpdateBlog = ({ id, getBlogId }) => {
  console.log(getBlogId, "getblogid");
  const navigate = useNavigate();
  // state management - initial state is the id of the blog clicked
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateAuthor, setUpdateAuthor] = useState("");

  const fetchBlogId = async () => {
    const data = await BlogDataQuery.getBlogId(id);
    console.log(data.docs);
  };
  console.log(fetchBlogId);

  const submitUpdateBlogPayload = async (event) => {
    event.preventDefault();
    // the updated payload is the call back from the event of pre-filled form with new data
    const updateBlogPayload = {
      updateTitle,
      updateAuthor,
    };
    console.log(updateBlogPayload);
    // mutate and send data
    await BlogDataMutations.updateBlog(id);
    // reset fields
    const resetFields = () => {
      setUpdateTitle("");
      setUpdateAuthor("");
    };
    resetFields();
    navigate("/blogs-admin");
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
        <Link to='/blogs-admin'>Cancel</Link>
      </form>
    </div>
  );
};

export default UpdateBlog;
