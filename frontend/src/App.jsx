import Contact from "./components/contact"
import Footer from "./components/footer"
import Hero from "./components/hero"
import Navbar from "./components/navabr"
import Projects from "./components/projects"
import Skills from "./components/skills"
export default function App() {
  return (
    <div id="container" class="flex flex-col min-h-[100dvh]">
      <Navbar/>
      <main className="flex-1">
        <Hero/>
        <Projects/>
        <Skills/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}