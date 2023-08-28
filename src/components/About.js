/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import './Component.css'

const About = () => {
  const img =
    "https://images.wallpaperscraft.com/image/single/boat_mountains_lake_135258_3840x2400.jpg";
  return (
    <div className="section" id="about">
      <div>
        <h1 className="text-center text-5xl m-3">About me</h1>
        <div className="flex justify-center">
          <div className="flex max-w-[80%] bg-gray-800">
            <div className="card-img">
                <img className="h-full" src={img} alt="card-image" />
            </div>
            <div className="m-5">
                <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-300">
                  Muhammad Awais
                </h5>
              <p className="mb-3 font-normal max-w-4xl text-gray-400">
                My name is Muhammad Awais and I'm 17 years old. I read in class
                12 and doing web development since last 2 years. I learn HTML,
                CSS, Bootstrap, Tailwind CSS, Javascript, Angular.
              </p>
              <p className="mb-3 font-normal max-w-4xl text-gray-400">
                I am currently learning React, Node.js, Express.js, and MongoDB.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
