import React from "react";
import { Link } from "react-router-dom";
//Types
import { projects } from "../types";
interface ProjectsProps {
  data: projects[] | undefined;
}

const Projects: React.FC<ProjectsProps> = ({ data = [] }) => {
  return (
    <section id="projects" className="py-5 lg:py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
          پروژه های من
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-center dark:text-white">
                  {project.name}
                </h3>
                <div className="flex justify-center gap-2">
                  <Link
                    to={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit mx-auto border rounded-lg p-2 bg-blue-500 text-white"
                  >
                    گیت هاب
                  </Link>
                  {" "}
                  <Link
                    to={project.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit mx-auto border rounded-lg p-2 bg-blue-500 text-white"
                  >
                    دمو آنلاین
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
