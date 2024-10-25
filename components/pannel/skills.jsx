"use client";
import { useState } from "react";
import Delete from "@/utils/delete";
import Post from "@/utils/post";

export default function Skills({ data }) {
  const [modal, setModal] = useState(false);
  const [info, setInfo] = useState(null);
  const btn_color = info ? "bg-green-500 " : "bg-gray-300";
  function info_handler(e) {
    e.preventDefault();
    setInfo({ ...info, [e.target.id]: e.target.value });
  }
  async function submit_handler() {
    const formdata = new FormData();
    formdata.append("name", info.name);
    formdata.append("rate", info.rate);
    formdata.append("type", "skill");
    await Post("/api/admin", formdata);
  }
  async function deleteProject(id) {
    await Delete("/api/admin", id, "skill");
  }

  return (
    <>
      <h2 className="text-2xl font-bold border-b-2 border-slate-200 mt-8">
        مهارت ها
      </h2>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-3 justify-beetwen">
        <div
          dir="ltr"
          className="mx-auto grid max-w-5xl grid-cols-2 gap-10 py-12 md:grid-cols-4 lg:gap-12"
        >
          {data.map((skill) => {
            return (
              <div
                key={skill.id}
                className="flex flex-col items-center justify-center"
              >
                <h3 className="text-lg font-semibold whitespace-nowrap">{skill.name} | {skill.rate}%</h3>
                <div className="bg-slate-300 w-full h-fit border rounded-lg">
                  <div
                    className="bg-slate-500 h-[15px] border rounded-lg"
                    style={{ width: `${skill.rate}%` }}
                  ></div>
                </div>
                <button
                  onClick={() => deleteProject(skill.id)}
                  className="bg-red-700 text-white p-1 border rounded-lg"
                >
                  حذف
                </button>
              </div>
            );
          })}
        </div>
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
            <input type="text" id="name" onChange={info_handler} />
          </div>
          <div className="flex flex-col border rounded-lg">
            <label htmlFor="rate">Rate:</label>
            <input type="text" id="rate" onChange={info_handler} />
          </div>
          <button
            onClick={submit_handler}
            className={`border py-1 px-3 rounded-lg mt-3 ${btn_color}`}
          >
            ذخیره
          </button>
        </div>
      </div>
    </>
  );
}
