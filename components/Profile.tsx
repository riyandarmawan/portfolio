"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import SocialMediaLink from "./ui/SocialMediaLink";
import MagicButton from "./ui/MagicButton";
import Nav, { NavToggle } from "./ui/Nav";

const Profile = () => {
  const [showNav, setShowNav] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const navToggleRef = useRef<HTMLButtonElement | null>(null);

  const handleClick = () => {
    setShowNav(!showNav);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      navRef.current &&
      !navRef.current.contains(event.target as Node) &&
      navToggleRef.current &&
      !navToggleRef.current.contains(event.target as Node)
    ) {
      setShowNav(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <section id="profile" className="pt-10 md:pb-10 lg:py-20 flex flex-col justify-between md:sticky md:inset-y-0 md:h-screen gap-6">
      <header>
        <h1 className="font-bold text-3xl lg:text-5xl">Riyan Darmawan</h1>
        <h5 className="font-medium text-lg lg:text-2xl text-primary-200 mt-2">
          Full-Stack Web Developer
        </h5>
        <p className="lg:text-lg text-primary-300 mt-3">
          I <span className="highlight">create websites</span> that are{" "}
          <span className="highlight">easy to use</span> and{" "}
          <span className="highlight">work well on all devices</span>.
        </p>
      </header>
      <Nav ref={navRef} show={showNav} />
      <NavToggle ref={navToggleRef} handleClick={handleClick} />
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
            <IoIosSend className="text-lg lg:text-xl" />
          </MagicButton>
        </div>
      </footer>{" "}
    </section>
  );
};

export default Profile;
