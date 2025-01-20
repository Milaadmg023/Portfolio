import React, { useState, FormEvent } from "react";
import send_msg from "../utils/send_msg";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await send_msg({msg: [name, email, message] });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-5 lg:py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
          ارتباط با من
        </h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
            >
              نام
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
            >
              ایمیل(<span className="text-sm font-thin text-red-500">*یا هر راه ارتباطی دیگه</span>)
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
            >
              پیام
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              rows={4}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            ارسال پیام
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
