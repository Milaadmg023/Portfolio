import React from "react";

function Projects() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Featured Projects
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of my recent work and learn more about the projects
              I've been involved in.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
          <a className="relative overflow-hidden rounded-lg group" href="#">
            <img
              src="/placeholder.svg"
              width={400}
              height={300}
              alt="Project 1"
              className="object-cover w-full h-60 transition-all group-hover:scale-105"
              style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
              <h3 className="text-lg font-semibold text-white">Project 1</h3>
            </div>
          </a>
          <a className="relative overflow-hidden rounded-lg group" href="#">
            <img
              src="/placeholder.svg"
              width={400}
              height={300}
              alt="Project 2"
              className="object-cover w-full h-60 transition-all group-hover:scale-105"
              style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
              <h3 className="text-lg font-semibold text-white">Project 2</h3>
            </div>
          </a>
          <a className="relative overflow-hidden rounded-lg group" href="#">
            <img
              src="/placeholder.svg"
              width={400}
              height={300}
              alt="Project 3"
              className="object-cover w-full h-60 transition-all group-hover:scale-105"
              style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
              <h3 className="text-lg font-semibold text-white">Project 3</h3>
            </div>
          </a>
          <a className="relative overflow-hidden rounded-lg group" href="#">
            <img
              src="/placeholder.svg"
              width={400}
              height={300}
              alt="Project 4"
              className="object-cover w-full h-60 transition-all group-hover:scale-105"
              style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
              <h3 className="text-lg font-semibold text-white">Project 4</h3>
            </div>
          </a>
          <a className="relative overflow-hidden rounded-lg group" href="#">
            <img
              src="/placeholder.svg"
              width={400}
              height={300}
              alt="Project 5"
              className="object-cover w-full h-60 transition-all group-hover:scale-105"
              style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
              <h3 className="text-lg font-semibold text-white">Project 5</h3>
            </div>
          </a>
          <a className="relative overflow-hidden rounded-lg group" href="#">
            <img
              src="/placeholder.svg"
              width={400}
              height={300}
              alt="Project 6"
              className="object-cover w-full h-60 transition-all group-hover:scale-105"
              style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
              <h3 className="text-lg font-semibold text-white">Project 6</h3>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
