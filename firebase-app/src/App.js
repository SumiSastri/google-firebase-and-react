import "./App.css";
import { Route, Routes } from "react-router-dom";

// components for routing
import SignIn from "./auth/forms/SignIn";
import Register from "./auth/forms/Register";
import Home from "./pages/Home";
import AddBlog from "./forms/AddBlog";
import UpdateBlog from "./forms/UpdateBlog";
import Blogs from "./pages/Blogs";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/register' element={<Register />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/add-blog' element={<AddBlog />} />
        <Route path='/update-blog' element={<UpdateBlog />} />
      </Routes>
    </div>
  );
};

export default App;
