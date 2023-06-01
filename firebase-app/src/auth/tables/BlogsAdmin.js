import SignOut from "../users/SignOut";
import { Link } from "react-router-dom";

const BlogsAdmin = () => {
  return (
    <div className='App'>
      <SignOut />
      <h2>Blogs Admin Panel</h2>
      <table>
        <thead>
          <th> Id</th>
          <th> Blog Title</th>
          <th> Author </th>
          <th> Admin Options</th>
          <th> Danger Zone</th>
        </thead>
        <tbody>
          <tr>
            <td>Id</td>
            <td>Title</td>
            <td>Author</td>
            <td>
              <Link to='/create-blog'>Create</Link>
              <Link to='/update-blog'>Update</Link>
            </td>
            <td>
              <button onClick={() => alert(`This action can't be reversed`)}>
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td>Id</td>
            <td>Title</td>
            <td>Author</td>
            <td>
              <Link to='/create-blog'>Create</Link>
              <Link to='/update-blog'>Update</Link>
            </td>
            <td>
              <button onClick={() => alert(`This action can't be reversed`)}>
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BlogsAdmin;
