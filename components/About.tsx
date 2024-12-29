import React from "react";
import Journey from "./Journey";
import IconCloud from "./ui/icon-cloud";
import { skills } from "@/lib/data";

const About = () => {
  return (
    <section id="about" className="text-primary-300 py-10 lg:py-20">
      <div id="description">
        <h3 className="mb-4 font-bold text-primary-200 text-xl md:hidden">
          About
        </h3>
        <p>
          Hi, I’m <span className="highlight">Riyan Darmawan</span>, a{" "}
          <span className="highlight">Full-Stack Web Developer</span>. I
          specialize in creating websites that are{" "}
          <span className="highlight">easy to use</span> and{" "}
          <span className="highlight">look great on any device</span>. I work on
          both the <span className="highlight">front-end</span> (what users see)
          and <span className="highlight">back-end</span> (the parts that run
          behind the scenes) to make sure everything functions smoothly. My goal
          is to build websites that are not only{" "}
          <span className="highlight">visually appealing</span> but also{" "}
          <span className="highlight">fast and user-friendly</span>.
        </p>
        <p className="mt-4">
          With experience working on a variety of projects, I’ve had the chance
          to build everything from{" "}
          <span className="highlight">simple websites</span> to more{" "}
          <span className="highlight">complex web applications</span>. I focus
          on <span className="highlight">writing clean, efficient code</span>{" "}
          and ensuring that the final product delivers the best experience for
          users. Whether it’s{" "}
          <span className="highlight">designing a responsive layout</span> or
          making sure a website runs without problems, I’m committed to getting
          it right.
        </p>
        <p className="mt-4">
          If you’re looking for someone who can{" "}
          <span className="highlight">
            turn your ideas into a working website
          </span>
          , I’d love to help. I’m always excited to take on new challenges and{" "}
          <span className="highlight">collaborate with clients</span> to create
          the best possible results.{" "}
          <span className="highlight">
            Let’s work together to bring your web project to life!
          </span>
        </p>
      </div>

      <Journey />

      <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden px-20 pb-20 pt-8">
        <IconCloud iconSlugs={skills} />
      </div>
    </section>
  );
};

export default About;
