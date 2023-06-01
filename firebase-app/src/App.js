import "./App.css";
import { Route, Routes } from "react-router-dom";

// components for routing
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import SignIn from "./auth/users/SignIn";
import Register from "./auth/users/Register";
import AddBlog from "./auth/forms/AddBlog";
import UpdateBlog from "./auth/forms/UpdateBlog";
import BlogsAdmin from "./auth/tables/BlogsAdmin";

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
        <Route path='/update-blog' element={<UpdateBlog />} />
      </Routes>
    </div>
  );
};

export default App;
