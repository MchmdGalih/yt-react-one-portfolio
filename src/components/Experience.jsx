import React from "react";
import html from "../assets/portfolio/html.png";
import css from "../assets/portfolio/css.png";
import javascript from "../assets/portfolio/javascript.png";
import reactImage from "../assets/portfolio/react.png";
import nuxtJs from "../assets/portfolio/nuxtjs.png";
import github from "../assets/portfolio/github.png";
import mySql from "../assets/portfolio/mysql-logo.png";
import tailwind from "../assets/portfolio/tailwind.png";
export const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-500",
    },
    {
      id: 6,
      src: nuxtJs,
      title: "Nuxt Js",
      style: "shadow-white",
    },
    {
      id: 7,
      src: mySql,
      title: "mySql",
      style: "shadow-orange-400",
    },
    {
      id: 8,
      src: github,
      title: "Github",
      style: "shadow-gray-500",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've learn with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;