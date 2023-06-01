import Nav from "../components/Nav";
import Blogs from "./Blogs";

const Home = () => {
  return (
    <div className='App'>
      <header>
        <Nav />
        <Blogs />
      </header>
    </div>
  );
};

export default Home;
