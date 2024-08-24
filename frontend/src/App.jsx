import Contact from "./components/contact"
import Footer from "./components/footer"
import Hero from "./components/hero"
import Navbar from "./components/navabr"
import Projects from "./components/projects"
import Skills from "./components/skills"
import { useEffect , useState } from "react"
import fetchData from "../utils/api"
export default function App() {
  const [baseData , setBaseData] = useState([])
  useEffect(() => {
    fetchData('/api/').then(data => setBaseData(data))
  }, [])
  return (
    <div id="container" className="flex flex-col min-h-[100dvh]">
      <Navbar/>
      <main className="flex-1">
        <Hero baseData={baseData}/>
        <Projects/>
        <Skills/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}