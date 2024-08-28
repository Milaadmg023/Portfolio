import { useState, useEffect } from "react";
export default function Navbar({ getTheme }) {
  const [theme, setTheme] = useState("light");
  const sunIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="currentColor"
      className="bi bi-sun-fill"
      viewBox="0 0 16 16"
    >
      <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
    </svg>
  );
  const moonIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="currentColor"
      className="bi bi-moon-fill"
      viewBox="0 0 16 16"
    >
      <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
    </svg>
  );
  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  }
  useEffect(() => {
    getTheme();
  });
  const desktop_nav_items = [
    {
      name: "خانه",
      href: "#",
    },
    {
      name: "پروژه ها",
      href: "#projects",
    },
    {
      name: "مهارت ها",
      href: "#skills",
    },
    {
      name: "تماس با من",
      href: "#contact",
    },
  ];

  const mobile_nav_items = [
    {
      name: "خانه",
      href: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-house-door-fill"
          viewBox="0 0 16 16"
        >
          <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
        </svg>
      ),
    },
    {
      name: "پروژه ها",
      href: "#projects",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-file-earmark-person"
          viewBox="0 0 16 16"
        >
          <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
          <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5z" />
        </svg>
      ),
    },
    {
      name: "مهارت ها",
      href: "#skills",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-laptop"
          viewBox="0 0 16 16"
        >
          <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
        </svg>
      ),
    },
    {
      name: "تماس با من",
      href: "#contact",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chat-dots-fill"
          viewBox="0 0 16 16"
        >
          <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
        </svg>
      ),
    },
  ];
  return (
    <>
      {/** Desktop Navbar */}
      <header className="hidden md:flex px-4 lg:px-6 h-14 items-center">
        <nav className="ml-auto flex gap-4 sm:gap-6">
          {/** Nav Items */}
          {desktop_nav_items.map((item, index) => (
            <a
              key={index}
              className="text-sm font-medium hover:underline underline-offset-4"
              href={item.href}
            >
              {item.name}
            </a>
          ))}
        </nav>
        <button
          onClick={toggleTheme}
          className="p-1 rounded-full m-2 text-blue-500 dark:bg-slate-900 dark:text-yellow-500"
        >
          {theme === "light" ? moonIcon : sunIcon}
        </button>
      </header>
      {/** Mobile Navbar */}
      <button
        onClick={toggleTheme}
        className="p-1 md:hidden rounded-full m-2 text-blue-500 dark:bg-slate-900 dark:text-yellow-500"
      >
        {theme === "light" ? moonIcon : sunIcon}
      </button>
      <nav className="md:hidden px-4 fixed bottom-1 left-0 right-0 flex items-center justify-center">
        <div className="flex flex-col bg-gray-100 dark:bg-slate-800 rounded-lg shadow-2xl">
          <div className="border border-gray-300 py-1 flex gap-1 shadow-xl rounded-lg dark:bg-slate-800 dark:text-slate-100 dark:border-slate-600">
            {mobile_nav_items.map((item, index) => (
              <div key={index} className="group relative px-1 cursor-pointer">
                <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
                  <a href={item.href}>{item.icon}</a>
                </div>
                <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
