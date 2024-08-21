import React from "react";
import HeroImage from "../assets/avatar.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Button, scroller } from "react-scroll";
import { Link } from "react-router-dom";

const Home = () => {
  const handleNavigation = () => {
    scroller.scrollTo("portfolio", {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl sm:text-7xl text-white font-bold">

          </h1>
          <h2 className=" text-4xl sm:text-6xl font-bold text-white">
            Front-End Developer
          </h2>
          <p className="text-gray-300 py-4 max-w-md font-bold">
            I am a Software engineer seeking out career in Web development.{" "}
          </p>
          <br />
          <p className="my-4 text-white hover:text-lime-300">
            Check out some of my recent works.
          </p>

          <div className="flex gap-8">
            <button 
              className=" group text-white w-fit px-6 py-3  flex items-center rounded-full bg-gradient-to-r from-cyan-400 to-lime-400 hover:from-cyan-500 hover:to-lime-500 hover:scale-110 transition duration-500 hover:shadow-2xl hover:shadow-lime-500 cursor-pointer font-medium "
              onClick={<Link to= "/blogs"/>}
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
            <Button
              className=" group text-white w-fit px-6 py-3  flex items-center rounded-full bg-gradient-to-r from-cyan-400 to-lime-400 hover:from-cyan-500 hover:to-lime-500 hover:scale-110 transition duration-300 hover:shadow-2xl hover:shadow-lime-500 cursor-pointer font-medium "
              onClick={handleNavigation}
            >
              Blogs
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Button>
          </div>
        </div>
        <div className="mx-8  flex-col mt-16">
          <img
            src={HeroImage}
            alt="AvatarImage"
            className=" p-8 rounded-2xl mx-auto sm:w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
