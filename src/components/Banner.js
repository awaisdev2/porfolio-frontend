/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import Image from "../assets/avatar.svg";
import { FaGithub, FaStackOverflow, FaTwitter } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <motion.section
      className="section"
      id="home"
      initial="initial"
      animate="animate"
      variants={fadeIn}
    >
      <div className="container mx-auto">
        <motion.div
          className="flex flex-col gap-y-8 lg:flex-row items-center"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <div className="flex-1 text-center lg:text-left">
            <div className="text-4xl mb-3">
              <h1 className="text-6xl font-bold">
                Muhammad <span>Awais</span>
              </h1>
              <div>
                <span className="mr-2">I Learned</span>
                <TypeAnimation
                  sequence={[
                    "HTML",
                    2000,
                    "CSS",
                    2000,
                    "JavaScript",
                    2000,
                  ]}
                  speed={50}
                  className="text-accent"
                  wrapper="span"
                  repeat={Infinity}
                />
              </div>
            </div>
            <div className="mb-3">
              <p>
              I learn HTML, CSS, Bootstrap, Tailwind CSS, Javascript, Angular. I am currently learning React, Node.js, Express.js, and MongoDB.
              </p>
              <div className="my-5">
                <Link smooth={true} to="contact" className="btn cursor-pointer px-5 py-4 btn-sm mr-3">Contact me</Link>
              </div>
              <div className="flex justify-center md:justify-center lg:justify-normal my-3">
                <a href="https://twitter.com/AwaisDev2" target="_blank">
                  <FaTwitter className="mx-1 cursor-pointer" />
                </a>
                <a href="https://stackoverflow.com/users/20907098/awais-dev?tab=profile" target="_blank">
                <FaStackOverflow className="mx-1 cursor-pointer" />
                </a>
                <a href="https://github.com/awaisdev2" target="_blank">
                <FaGithub className="mx-1 cursor-pointer" />
                </a>
                
               
              </div>
            </div>
          </div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <img src={Image} alt="avatar" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Banner;
