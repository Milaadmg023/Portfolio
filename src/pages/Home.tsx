import React from "react";
import { useEffect, useState } from "react";
import fetch_data from "../utils/fetch";
//Components
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
//Types
import { details } from "../types";

const Home: React.FC = () => {
  const [data, setData] = useState<details | null>(null);
  useEffect(() => {
    const res = fetch_data();
    res.then((data) => {
      setData(data);
    });
  }, []);

  return (
    <>
      {data ? (
        <main className="w-full" dir="rtl">
          <About data={data?.about} />
          <Projects data={data?.projects} />
          <Skills data={data?.skills} />
          <Contact />-
        </main>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Home;
