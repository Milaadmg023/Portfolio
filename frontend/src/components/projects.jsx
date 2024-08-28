import React from "react";

function Projects({ projects }) {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              پروژه های من
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              اینجا می‌توانید پروژه های من را مشاهده کنید.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
          {projects.map((project , index) => (
            <div key={index} className="relative overflow-hidden rounded-lg group" href="#">
              <img
                src={`http://localhost:8080/${project.image}`}
                width={400}
                height={300}
                alt="Project 1"
                className="object-cover w-full h-60 transition-all group-hover:scale-105"
                style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col gap-2 items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                <button className="w-fit mx-auto p-1 bg-white rounded-lg">سورس کد</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
