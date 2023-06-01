import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// protected routes
import SignOut from "../users/SignOut";
import BlogDataMutations from "../../firestore/BlogDataMutations";
import BlogDataQuery from "../../firestore/BlogDataQuery";

const UpdateBlog = ({ id, getBlogById }) => {
  const navigate = useNavigate();
  // set state to data in blogId
  const [updateTitle, setUpdateTitle] = useState(getBlogById);
  const [updateAuthor, setUpdateAuthor] = useState(getBlogById);
  console.log(getBlogById, "blog by Id props");
  // edit doc by id
  const editAndUpdateBlogById = async () => {
    try {
      const editInfo = await BlogDataQuery.getBlogById();
      console.log("the record is :", editInfo.data());
      setUpdateTitle(editInfo.data().title);
      setUpdateAuthor(editInfo.data().author);
    } catch (err) {
      console.log(err, "failed to update data");
    }
  };

  console.log(editAndUpdateBlogById);

  // submit the edited data
  const submitUpdateBlogPayload = async (event) => {
    event.preventDefault();
    // set payload to be updated from the event handler call back
    const updatedBlogPayload = {
      updateTitle,
      updateAuthor,
    };
    //  if the id has come from firebase
    if (id !== undefined && id !== "") {
      // mutate and send updated payload
      await BlogDataMutations.updateBlog(id, updatedBlogPayload);
    }
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
