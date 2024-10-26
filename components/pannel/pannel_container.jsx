"use client";
import Base from "./base";
import fetcher from "@/utils/fetch";
import { useState, useEffect } from "react";
import Projects from "./projects";
import Skills from "./skills";
import Messages from "./messages";
import Login from "./login";

export default function Container() {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    setLogin(true);
  }
  useEffect(() => {
    const res = fetcher("/api/");
    res.then((data) => {
      setData(data);
    });
  }, []);
  return login ? (
    data && (
      <section className="flex flex-col items-center justify-center py-2">
        <Base data={data.portfolio} />
        <Projects data={data.projects} />
        <Skills data={data.skills} />
        <Messages data={data.messages} />
      </section>
    )
  ) : (
    <Login loginhandler={handleLogin}/>
  );
}
