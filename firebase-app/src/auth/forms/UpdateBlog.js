import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// protected routes
import BlogDataMutations from "../../firestore/BlogDataMutations";
import BlogDataQuery from "../../firestore/BlogDataQuery";

const UpdateBlog = ({ id, blogId }) => {
  console.log(id, "log id");
  console.log(blogId, "log blogid");
  const navigate = useNavigate();
  const [updateTitle, setUpdateTitle] = useState(blogId);
  const [updateAuthor, setUpdateAuthor] = useState(blogId);

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
