import React from "react";
import Avatar from "../assets/portfolio/avatar.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { Animation } from "./AnimationH";

const Home = () => {
  return (
    <section
      name="home"
      className="h-auto lg:h-screen lg:py-0 pt-[110px] pb-4 w-full bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div data-aos='fade-right' className="flex flex-col justify-center h-full md:w-1/2 w-full">
          <Animation />
          <p className="text-gray-500 py-4 max-w-md">
            Every line of code is an adventure. Right now, I'm on the adventure
            of learning frontend programming and don't let your fears determine
            your future.
          </p>
          <div className="mb-3 justify-center">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to teal-500 cursor-pointer "
            >
              Project
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img data-aos='fade-left'
            src={Avatar}
            alt="my profile"
            className="rounded-2xl mx-auto  md:w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
