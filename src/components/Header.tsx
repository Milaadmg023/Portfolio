import React from "react";
import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-4">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-4">
          <ThemeToggle />
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="#about" className="flex items-center gap-2">
              <span className="hover:text-gray-600 dark:hover:text-gray-300 hidden md:block">
                درباره من
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-file-earmark-person"
                viewBox="0 0 16 16"
              >
                <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5z" />
              </svg>
            </a>
          </li>
          <li className="flex items-center gap-2">
            <a href="#skills" className="flex items-center gap-2">
              <span className="hover:text-gray-600 dark:hover:text-gray-300 hidden md:block">
                مهارت ها
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-code-slash"
                viewBox="0 0 16 16"
              >
                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
              </svg>
            </a>
          </li>
          <li className="flex items-center gap-2">
            <a href="#projects" className="flex items-center gap-2">
              <span className="hover:text-gray-600 dark:hover:text-gray-300 hidden md:block">
                پروژه ها
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-card-checklist"
                viewBox="0 0 16 16"
              >
                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#contact" className="flex items-center gap-2">
              <span className="hover:text-gray-600 dark:hover:text-gray-300 hidden md:block">
                ارتباط با من
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-telephone"
                viewBox="0 0 16 16"
              >
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
