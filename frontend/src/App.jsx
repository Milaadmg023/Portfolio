import Contact from "./components/contact";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navabr";
import Projects from "./components/projects";
import Skills from "./components/skills";
import { useEffect, useState } from "react";
import {Get} from "../utils/api.js";
export default function App() {
  const [baseData, setBaseData] = useState(null);
  const [theme, setTheme] = useState("light");
  function getTheme() {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }
  useEffect(() => {
    Get("/api/").then((data) => {
      setBaseData(data);
    });
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  }, []);

  return (
    <>
      {baseData && (
        <>
          <div id="page" className={theme}>
            <div
              id="container"
              className="flex flex-col min-h-[100dvh] dark:bg-slate-900 dark:text-slate-100"
            >
              <Navbar getTheme={getTheme} />
              <main className="flex-1">
                <Hero baseData={baseData} />
                <Projects projects={baseData.projects} />
                <Skills skills={baseData.skills} />
                <Contact baseData={baseData} />
              </main>
              <Footer />
            </div>
          </div>
        </>
      )}
    </>
  );
}
