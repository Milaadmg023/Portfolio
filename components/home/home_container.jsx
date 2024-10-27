"use client";
import { useState, useEffect } from "react";
import Navbar from "./navabr";
import Hero from "./hero";
import Projects from "./projects";
import Skills from "./skills";
import Contact from "./contact";
import Footer from "./footer";
import fetcher from "@/utils/fetch";

export default function Container() {
  const [theme, setTheme] = useState("light");
  const [data, setData] = useState(null);
  function getTheme() {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }
  useEffect(() => {
    const res = fetcher("/api/");
    res.then((data) => {
      setData(data);
    });
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  }, []);
  const baseInfo = data &&{
    name : data.portfolio.name,
    job : data.portfolio.job,
    image : data.portfolio.image
  }
  
  return (
    data && (
      <>
        <div id="page" className={theme}>
          <div
            id="container"
            className="flex flex-col min-h-[100dvh] dark:bg-slate-900 dark:text-slate-100"
          >
            <Navbar getTheme={getTheme} />
            <main className="flex-1">
              <Hero data={baseInfo} />
              <Projects data={data.projects} />
              <Skills data={data.skills} />
              <Contact />
            </main>
            <Footer />
          </div>
        </div>
      </>
    )
  );
}
