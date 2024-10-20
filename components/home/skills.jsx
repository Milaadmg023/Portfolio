function Skills({data}) {
  //console.log(data);
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              مهارت های من
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              اینجا می‌توانید مهارت های من را مشاهده کنید.
            </p>
          </div>
        </div>
        <div dir="ltr" className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 sm:grid-cols-3 md:grid-cols-4 lg:gap-12">
          {data.map((skill) => {            
            return (
              <div key={skill.id} className="flex flex-col items-center justify-center">
                <h3 className="text-lg font-semibold">{skill.name}</h3>
                <div className="bg-slate-300 w-full h-fit border rounded-lg">
                  <div
                    className="bg-slate-500 h-[15px] border rounded-lg"
                    style={{ width: `${skill.rate}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
