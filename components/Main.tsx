import About from "./About";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Projects from "./Projects";

const Main = () => {
  return (
    <main id="main" className="md:w-2/3">
      <About />
      <Projects />
      <Blogs />
      <Contact/>
    </main>
  );
};

export default Main;
