import { Link } from "react-router-dom";

const DeleteBlog = () => {
  return (
    <div>
      <h5>The delete action is irreversible</h5>
      <Link to='/blogs-admin'>Cancel</Link>
      <h5>Blog Name</h5>
      <h5>Blog Author</h5>
      <button>Delete</button>
    </div>
  );
};

export default DeleteBlog;
