import Image from "next/image";

export default function Projects({ data }) {
  return (
    <div className="mt-10">
      {data.map((project) => {
        return (
          <div className="text-center">
            <Image
              src={project.image}
              width={300}
              height={300}
              alt="project-img"
              className="rounded-lg"
            />
            <div className="py-2 flex flex-col gap-2 ">
              <label for="file-input" className="sr-only">
                Choose file
              </label>
              <input
                type="file"
                name="file-input"
                id="file-input"
                className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
                       file:bg-gray-50 file:border-0
                       file:me-4
                       file:py-3 file:px-4
                       dark:file:bg-neutral-700 dark:file:text-neutral-400"
              />
              <input className="rounded-lg border p-1" type="text" defaultValue={project.name}/>
              <textarea className="rounded-lg border p-1" type="text" defaultValue={project.description}/>
              {project.url && <input className="rounded-lg border p-1" type="text" defaultValue={project.url}/>}
              {project.githubUrl && <input className="rounded-lg border p-1" type="text" defaultValue={project.githubUrl}/>}
            </div>
            <button className="p-1 rounded-lg border">ذخیره</button>
          </div>
        );
      })}
    </div>
  );
}
