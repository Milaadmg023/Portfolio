import React from "react";

interface AboutProps {
  data: string | undefined;
}

const About: React.FC<AboutProps> = ({ data }) => {
  return (
    <section id="about" className="py-5 lg:py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="w-fit mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
            درباره من
          </h2>
        </div>

        <div className="text-center max-w-[80%] mx-auto flex-col md:grid grid-cols-2 gap-10 justify-center dark:text-gray-300">
          <p className="mb-4 flex items-center lg:text-xl">{data}</p>
          <img
            src="./profile.jpg"
            alt="profile-pic"
            className="max-h-[500px] rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
