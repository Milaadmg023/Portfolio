"use client";
import Image from "next/image";
import { useState } from "react";
import Update from "@/utils/update";

export default function Base({ data }) {
  const [info, setInfo] = useState(null);
  const [file, setFile] = useState(null);
  const btn_color = info ? "bg-green-500 " : "bg-gray-300";
  function message_handler(e) {
    e.preventDefault();
    if (e.target.id === "image") {
      setFile({ ...file, [e.target.id]: e.target.files[0] });
    }
    setInfo({ ...info, [e.target.id]: e.target.value });
  }
  async function submit_handler(e) {
    e.preventDefault();
    if (info) {
      if (!info.name) {
        info.name = data.name;
      } else if (!info.job) {
        info.job = data.job;
      }
    }
    const formdata = new FormData();
    info && formdata.append("name", info.name);
    info && formdata.append("job", info.job);
    file && formdata.append("image", file);
    await Update("/api/admin", formdata);
    window.location.reload()
  }
  return (
    <>
      <section className="text-center">
        <h1 className="text-center text-2xl font-bold">اطلاعات عمومی</h1>
        <hr className="h-[3px] bg-slate-300 my-2" />
        <div className="grid grid-cols-2 gap-2">
          <input
            className="border p-1 rounded-lg"
            onChange={message_handler}
            type="text"
            defaultValue={data.name}
            id="name"
          />
          <input
            className="border p-1 rounded-lg"
            onChange={message_handler}
            type="text"
            defaultValue={data.job}
            id="job"
          />
          <div className="grid grid-cols-2 items-center gap-2 col-span-2 border p-1 rounded-lg">
            <input id="image" type="file" onChange={message_handler} />
            <Image
              src={data.image}
              width={300}
              height={300}
              alt="Hero Image"
              className="mx-auto rounded-lg"
            />
          </div>
        </div>
        <button
          className={`border py-1 px-3 rounded-lg mt-3 ${btn_color}`}
          onClick={submit_handler}
        >
          ذخیره
        </button>
      </section>
    </>
  );
}
