import React from "react";
//Types
import { skills } from "../types";

interface SkillsProps {

  data: skills[] | undefined;

}

const Skills: React.FC<SkillsProps> = ({data = []}) => {
  return (
    <section id="skills" className="py-5 lg:py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
          مهارت های من
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.map((skill, index) => (
            <div
              dir="ltr"
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 flex flex-col items-center"
            >
              <h3 className="md:text-lg lg:text-xl font-semibold text-center dark:text-white">
                {skill.name}
              </h3>
              <div className="w-full border rounded-lg">
                <div className="h-[9px] bg-gray-100" style={{ width: `${skill.rate}` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
