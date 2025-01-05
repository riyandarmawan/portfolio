import About from "./About";
import Blogs from "./Blogs";
import Projects from "./Projects";

const Main = () => {
  return (
    <main id="main" className="col-span-2">
      <About />
      <Projects />
      <Blogs />
    </main>
  );
};

export default Main;
