"use client";
import Base from "./base";
import fetcher from "@/utils/fetch";
import { useState, useEffect } from "react";
import Projects from "./projects";
import Skills from "./skills";

export default function Container() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const res = fetcher("/api/");
    res.then((data) => {
      setData(data);
    });
  }, []);
  return (
    data && (
      <section className="flex flex-col items-center justify-center py-2">
        <Base data={data.portfolio} />
        <Projects data={data.projects} />
        <Skills data={data.skills}/>
      </section>
    )
  );
}
