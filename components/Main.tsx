import Link from "next/link";
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
      <Contact />
      <footer className="pt-16 pb-10">
        <p className="text-center text-sm">
          <Link href="https://instagram.com/riyandarmawan" className="hover:underline font-medium">Riyan Darmawan</Link> &copy; {new Date().getFullYear()} | All right reserved.
        </p>
      </footer>
    </main>
  );
};

export default Main;
