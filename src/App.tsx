import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-white">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <footer className="dark:bg-gray-900 text-center">
            <p>
              &copy; {new Date().getFullYear()} Milad Bageri. All rights reserved.
            </p>
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
