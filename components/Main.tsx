import About from "./About";
import Blogs from "./Blogs";
import Projects from "./Projects";

const Main = () => {
  return (
    <main id="main" className="md:w-2/3">
      <About />
      <Projects />
      <Blogs />
    </main>
  );
};

export default Main;
