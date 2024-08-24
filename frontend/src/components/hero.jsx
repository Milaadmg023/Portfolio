export default function Hero({ baseData }) {
  return (
    <section id="hero" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 justify-center">
          <div className="flex flex-col justify-center">
            <div className="space-y-2 w-fit mx-auto">
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                سلام, من
              </p>
              <h1 className="my-2 text-xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                {baseData.name}
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                {baseData.job} هستم.
              </p>
            </div>
          </div>
          <img
            src={`http://localhost:8080/${baseData.profile}`}
            alt="Hero"
            className="mx-auto rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
