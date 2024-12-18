"use client";
import { useState , useEffect } from "react";
import Post from "@/utils/post";

export default function Login({ loginhandler }) {
  const [data, setData] = useState(null);
  const handle_data = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  async function handle_login() {
    const res = await Post("/api/auth", JSON.stringify(data));
    console.log(res)
    if (res.success) {
      loginhandler();
      const token = res.token;
      localStorage.setItem("token", token);
    } else {
      alert(res.message);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    const isExpired = async () => {
      const res = await Post("/api/auth/token", JSON.stringify( token ));
      console.log(res)
      if (res.success) {
        loginhandler();
      }
    }
    isExpired();
  }, []);

  return (
    <div className="relative py-3 sm:max-w-xs sm:mx-auto">
      <div className="min-h-96 px-8 py-6 mt-4 text-left bg-white dark:bg-gray-900 rounded-xl shadow-lg">
        <div className="flex flex-col justify-center items-center h-full select-none">
          <div className="flex flex-col items-center justify-center gap-2 mb-8">
            <div className="w-8 h-8 bg-gray-700" />
            <p className="m-0 text-[16px] font-semibold dark:text-white">
              Login to your Account
            </p>
            <span className="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]">
              Get started with our app, just start section and enjoy experience.
            </span>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="font-semibold text-xs text-gray-400">
              Username
            </label>
            <input
              placeholder="Username"
              name="username"
              className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
              onChange={handle_data}
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="font-semibold text-xs text-gray-400">
            Password
          </label>
          <input
            placeholder="••••••••"
            className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
            type="password"
            name="password"
            onChange={handle_data}
          />
        </div>
        <div>
          <button
            onClick={handle_login}
            className="py-1 px-8 bg-blue-500 hover:bg-blue-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
