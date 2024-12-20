import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import SocialMediaLink from "./ui/SocialMediaLink";
import MagicButton from "./ui/MagicButton";

const Profile = () => {
  return (
    <div className="h-screen py-20">
      <h1 className="font-bold text-5xl">Riyan Darmawan</h1>
      <h5 className="font-medium text-xl text-primary-200 mt-2">
        Full-Stack Web Developer
      </h5>
      <p className="text-base text-primary-300 mt-3">
        I craft <span className="highlight">responsive</span> and{" "}
        <span className="highlight">user-friendly</span> web experiences that
        deliver results.
      </p>
      <div className="flex items-center gap-4 mt-4">
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
          <IoIosSend className="text-lg"/>
        </MagicButton>
      </div>
    </div>
  );
};

export default Profile;
