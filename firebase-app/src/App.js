import "./App.css";
import { Route, Routes } from "react-router-dom";

// components for routing
import SignIn from "./auth/components/SignIn";
import Register from "./auth/components/Register";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
