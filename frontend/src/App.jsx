import Contact from "./components/contact";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navabr";
import Projects from "./components/projects";
import Skills from "./components/skills";
import { useEffect, useState } from "react";
import fetchData from "../utils/api";
export default function App() {
  const [baseData, setBaseData] = useState([]);
  const [theme, setTheme] = useState("light");
  function getTheme() {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  }, []);

  return (
    <div id="page" className={theme}>
      <div
        id="container"
        className="flex flex-col min-h-[100dvh] dark:bg-slate-900 dark:text-slate-100"
      >
        <Navbar getTheme={getTheme} />
        <main className="flex-1">
          <Hero/>
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
