import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import SocialMediaLink from "./ui/SocialMediaLink";
import MagicButton from "./ui/MagicButton";
import Nav from "./ui/Nav";

const Profile = () => {
  return (
    <section id="profile" className="h-screen py-20 flex flex-col justify-between sticky top-0 bottom-0">
      <header>
        <h1 className="font-bold text-5xl">Riyan Darmawan</h1>
        <h5 className="font-medium text-xl text-primary-200 mt-2">
          Full-Stack Web Developer
        </h5>
        <p className="text-base text-primary-300 mt-3">
            I <span className="highlight">create websites</span> that are{" "}
            <span className="highlight">easy to use</span> and{" "}
            <span className="highlight">work well on all devices</span>.
        </p>
      </header>
      <Nav />
      <footer>
        <div className="flex items-center gap-4">
          <SocialMediaLink
            href="https://github.com/riyandarmawan"
            icon={<FaGithub />}
          />
          <SocialMediaLink
            href="https://linkedin.com/in/riyandarmawan"
            icon={<FaLinkedin />}
          />
          <SocialMediaLink
            href="https://instagram.com/riyandarmawan"
            icon={<FaInstagram />}
          />
          <SocialMediaLink
            href="https://youtube.com/@riyandarmawan"
            icon={<FaYoutube />}
          />
        </div>
        <div className="flex items-center gap-4 mt-6">
          <MagicButton href="">
            Resume
            <IoIosSend className="text-lg" />
          </MagicButton>
        </div>
      </footer>{" "}
    </section>
  );
};

export default Profile;
