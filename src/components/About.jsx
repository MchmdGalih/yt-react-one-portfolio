import React from "react";

export const About = () => {
  return (
    <section
      name="about"
      className="h-auto lg:h-screen lg:py-0 py-4 w-full bg-gradient-to-b from-gray-800 to-black p-4 text-white "
    >
      <div  className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p data-aos='fade-up'  className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p data-aos='fade-up' data-aos-delay='500' className="text-xl mt-3">
          Hello, my name is Mochamad Galih Sulistio Pratama. I am a graduate of
          SMK Pasundan 2 Bandung who has great passion in the world of
          information technology. I have three years of valuable experience
          working at PT Gajah Angkasa Perkasa, where I was involved in various
          IT projects that helped me expand my knowledge and skills.
        </p>
        <br />
        <p data-aos='fade-up' data-aos-delay='600' className="text-xl">
          I am a technology lover who is always hungry for new knowledge. I have
          participated in Bootcamp activities at Alkademi Learning to Become a
          Full Stack Developer. I believe that learning is a lifelong process,
          and I always strive to improve my skills in web development.
          Currently, I am committed to continuously developing my skills in
          this.
        </p>
        <br />
        <p data-aos='fade-up' data-aos-delay='700' className="text-xl">
          Thank you for getting to know me better. I am always open to new
          opportunities, collaborative projects, and the chance to continue
          growing in my career in the IT world. Feel free to contact me if you
          would like to discuss or work together on an exciting IT project!
        </p>
      </div>
    </section>
  );
};
