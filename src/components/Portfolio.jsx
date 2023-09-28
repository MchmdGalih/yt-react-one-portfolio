import React from "react";
import { portfolios } from "../commont/const/portfolioList";

const Portfolio = () => {
  return (
    <section
      name="portfolio"
      className="h-auto lg:h-screen lg:py-0 py-4 bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portofolio
          </p>
          <p className="py-6">Check out some of my work right here </p>
        </div>

        <div
          data-aos="fade-up"
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 sm:px-0"
        >
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-[400px] w-full "
              />
              <div className="flex items-center justify-center">
                <button className="w1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
