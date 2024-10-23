"use client";
import { useState } from "react";
import Image from "next/image";
import Delete from "@/utils/delete";

export default function Projects({ data }) {
  async function deleteProject(id) {
    const res = await Delete("/api/admin", id, "project");
  }
  return (
    <>
      <h2 className="text-xl font-bold border-b-2 border-slate-200 mt-8">پروژه ها</h2>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-3 justify-beetwen">
        {" "}
        {data.map((project) => (
          <div className="flex flex-col gap-2">
            <div
              key={project.id}
              className="relative overflow-hidden rounded-lg group"
            >
              <Image
                src={project.image}
                width={400}
                height={400}
                alt="Project 1"
                className="object-cover w-full h-60 transition-all group-hover:scale-105"
                style={{ aspectRatio: "400 / 400", objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col gap-2 items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                <h3 className="text-lg font-semibold text-white">
                  {project.name}
                </h3>
                {project.githubUrl && (
                  <button className="w-fit mx-auto p-2 bg-white text-gray-900 rounded-lg">
                    سورس کد
                  </button>
                )}
                {project.url && (
                  <button className="w-fit mx-auto p-2 bg-white text-gray-900 rounded-lg">
                    دمو
                  </button>
                )}
              </div>
            </div>
            <button
              onClick={() => deleteProject(project.id)}
              className="bg-red-700 text-white p-1 border rounded-lg"
            >
              حذف
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
