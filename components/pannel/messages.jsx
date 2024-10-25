export default function Messages({ data }) {
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold border-b-2 border-slate-200 mt-8 mx-auto w-fit">
        پیام ها
      </h2>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-3 justify-beetwen">
        <div
          dir="ltr"
          className="mx-auto grid max-w-5xl grid-cols-2 gap-10 py-12 md:grid-cols-4 lg:gap-12"
        >
          {data.map((msg) => {
            return (
              <div key={msg.id}
              className="text-center border border-slate-200 rounded-lg p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  fill="currentColor"
                  className="bi bi-person-circle mx-auto"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                  />
                </svg>
                <p>{msg.name}</p>
                <p>{msg.email}</p>
                <p>{msg.message}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
