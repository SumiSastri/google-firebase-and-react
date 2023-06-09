import "./App.css";
import { Route, Routes } from "react-router-dom";

// components for routing
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import SignIn from "./auth/users/SignIn";
import Register from "./auth/users/Register";
import AddBlog from "./auth/forms/blog-forms/AddBlog";
import UpdateBlog from "./auth/forms/blog-forms/UpdateBlog";
import BlogsAdmin from "./auth/tables/BlogsAdmin";
import UploadImages from "./auth/forms/upload-images/UploadImages";
import UploadFiles from "./auth/forms/upload-files/UploadFiles";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        {/* protected routes */}
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/register' element={<Register />} />
        <Route path='/blogs-admin' element={<BlogsAdmin />} />
        <Route path='/add-blog' element={<AddBlog />} />
        <Route path='/upload-images' element={<UploadImages />} />
        <Route path='/upload-files' element={<UploadFiles />} />
        {/* paths with ids */}
        <Route path='/update-blog/:blogId/' element={<UpdateBlog />} />
      </Routes>
    </div>
  );
};

export default App;
