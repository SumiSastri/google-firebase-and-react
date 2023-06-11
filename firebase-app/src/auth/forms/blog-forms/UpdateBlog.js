import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

// protected routes
import BlogDataMutations from "../../../firestore/BlogDataMutations";
import BlogDataQuery from "../../../firestore/BlogDataQuery";

const UpdateBlog = ({ id }) => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateAuthor, setUpdateAuthor] = useState("");
  const [errorMessage, setErrorMessage] = useState({ error: false, msg: "" });

  // edit doc by id
  const editAndUpdateBlogById = async () => {
    setErrorMessage("");
    try {
      const editInfo = await BlogDataQuery.getBlogById(blogId);
      console.log("the record is :", editInfo[0].data());
      setUpdateTitle(editInfo.data().title);
      setUpdateAuthor(editInfo.data().author);
      setErrorMessage({ error: false, msg: "Blog Updated" });
    } catch (err) {
      setErrorMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The blogId here is : ", blogId);
    if (blogId !== undefined && blogId !== "") {
      editAndUpdateBlogById();
    }
  }, [blogId]);

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
        {errorMessage?.msg && <h5 className='danger'>{errorMessage?.msg}</h5>}
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
