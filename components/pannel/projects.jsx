"use client";
import { useState } from "react";
import Image from "next/image";
import Delete from "@/utils/delete";
import Post from "@/utils/post";

export default function Projects({ data }) {
  const [modal, setModal] = useState(false);
  const [info, setInfo] = useState(null);
  const [file, setFile] = useState(null);
  const btn_color = info ? "bg-green-500 " : "bg-gray-300";
  function info_handler(e) {
    e.preventDefault();
    if (e.target.id === "image") {
      setFile(e.target.files[0]);
    }
    setInfo({ ...info, [e.target.id]: e.target.value });
  }
  async function submit_handler() {
    console.log(file)
    const formdata = new FormData();
    formdata.append("name", info.name);
    formdata.append("preview", info.preview);
    formdata.append("github", info.github);
    formdata.append("image", file);
    formdata.append("type", "project");
    await Post("/api/admin", formdata);
  }
  async function deleteProject(id) {
    await Delete("/api/admin", id, "project");
  }

  return (
    <>
      <h2 className="text-2xl font-bold border-b-2 border-slate-200 mt-8">
        پروژه ها
      </h2>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-3 justify-beetwen">
        {" "}
        {data.map((project) => (
          <div className="flex flex-col gap-2" key={project.id}>
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
      <button
        onClick={() => {
          setModal(!modal);
        }}
        className="bg-blue-700 text-white p-1 border rounded-lg text-xl mt-5"
      >
        افزودن
      </button>
      {/* add modal */}
      <div
        className={`h-screen fixed ${
          modal ? "flex" : "hidden"
        } items-center justify-center top-0 left-0 right-0 bottom-0`}
      >
        <div className="bg-gray-200 p-3 border rounded-lg" dir="ltr">
          <div className="text-end px-1">
            <button
              onClick={() => {
                setModal(false);
              }}
              className="text-xl font-bold text-end"
            >
              X
            </button>
          </div>
          <div className="flex flex-col border rounded-lg">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" onChange={info_handler}/>
          </div>
          <div className="flex flex-col border rounded-lg">
            <label htmlFor="image">Image:</label>
            <input type="file" id="image" onChange={info_handler}/>
          </div>
          <div className="flex flex-col border rounded-lg my-2">
            <label htmlFor="preview">Preview Url:</label>
            <input type="text" id="preview" onChange={info_handler}/>
          </div>
          <div className="flex flex-col border rounded-lg">
            <label htmlFor="github">GitHub Url:</label>
            <input type="text" id="github" onChange={info_handler}/>
          </div>
          <button onClick={submit_handler} className={`border py-1 px-3 rounded-lg mt-3 ${btn_color}`}>ذخیره</button>
        </div>
      </div>
    </>
  );
}
