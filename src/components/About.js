/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { FaGithub, FaStackOverflow, FaTwitter } from "react-icons/fa";

import "./Component.css";

const About = () => {
  const img = "https://images.wallpaperscraft.com/image/single/boat_mountains_lake_135258_3840x2400.jpg";
  const img2 = "https://o.remove.bg/downloads/a7648752-d9ad-472b-91fe-6460c74bfaf0/z6aeO6kAGsAG-removebg-preview.png"
  return (
    <div className="section" id="about">
      <div>
        <h1 className="text-center text-5xl m-3">About me</h1>
        <div className="flex justify-center">
          <div className="flex max-w-[80%] h-[500px] bg-gray-800">
            <div className="card-img">
              <img className="h-full" src={img} alt="card-image" />
            </div>
            <div className="m-5">
              <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-300">
                Muhammad Awais
              </h5>
              <p className="mb-1 font-normal max-w-4xl text-gray-400">
                My name is Muhammad Awais and I'm 17 years old. I read in class
                12 and doing web development since last 2 years. I learn HTML,
                CSS, Bootstrap, Tailwind CSS, Javascript, Angular.
              </p>
              <p className="mb-1 font-normal max-w-4xl text-gray-400">
                I am currently learning React, Node.js, Express.js, and MongoDB.
              </p>
                <h1 className="text-gray-300 font-semibold">Checkout my accounts on different platforms!</h1>
              <div className="flex justify-center md:justify-center lg:justify-normal my-3">
                <a
                  data-tooltip-target="tooltip-bottom"
                  data-tooltip-placement="bottom"
                  type="button"
                  href="https://twitter.com/AwaisDev2"
                  target="_blank"
                  className="icon-container"
                >
                  <div
                    id="tooltip-bottom"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black bg-gray-100 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    Twitter
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                  <FaTwitter className="mx-1 cursor-pointer" />
                </a>
                <a
                  data-tooltip-target="tooltip-bottom-stackoverflow"
                  data-tooltip-placement="bottom"
                  type="button"
                  href="https://stackoverflow.com/users/20907098/awais-dev?tab=profile"
                  target="_blank"
                  className="icon-container mx-5"
                >
                  <div
                    id="tooltip-bottom-stackoverflow"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block text-center px-3 py-2 text-sm font-medium text-black bg-gray-100 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    Stack Overflow
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                  <FaStackOverflow className="mx-1 cursor-pointer" />
                </a>
                <a
                  data-tooltip-target="tooltip-bottom-github"
                  data-tooltip-placement="bottom"
                  href="https://github.com/awaisdev2"
                  target="_blank"
                  className="icon-container"
                >
                  <div
                    id="tooltip-bottom-github"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black bg-gray-100 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    GitHub
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                  <FaGithub className="mx-1 cursor-pointer" />
                </a>
              </div>
              <div className="flex items-center">
                <h1 className="mr-5">My upwork profile:</h1>
                <a href="https://www.upwork.com/freelancers/~01a8f96b54434d248a" target="_blank">
                <img className="h-6 icon-container" src={img2} alt="upwork logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
