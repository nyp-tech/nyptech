
const goals = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <video controls>
            <source height="310"
              width="550" className=" mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              src="/GOAL.mp4" type="video/mp4" />
            Your browser does not support the video tag.

          </video>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Faster iteration. More innovation.
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We aim to bring you the best opportunity to learn grow and prosper within the tech landscape. We hope to bring out the innovators within you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default goals;