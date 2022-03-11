function Hero() {
  return (
    <div className="grid grid-rows-2 grid-cols-1 px-20 lg:grid-rows-1 lg:grid-cols-2 ">
      <div className="my-auto flex flex-col justify-center row-start-2 lg:row-start-1 lg:mx-auto lg:text-left">
        <h1 className="hidden md:block text-4xl font-medium">
          {" "}
          Your Brand on Your Links{" "}
          <span className="text-xs mb-auto">&reg;</span>
        </h1>
        <p className="md:mt-5 text-gray-600">
          {" "}
          Rebrandly is the industry-leading link manangement platform to brand,
          track and share short URL's using a custom domain name.{" "}
        </p>
        <div className="flex flex-col items-center gap-5 mt-5 lg:flex-row">
          <button className="rounded text-white w-48 px-5 py-2 border border-cyan-600 bg-cyan-600">
            Sign up free{" "}
          </button>
          <button className="rounded text-cyan-600 w-48  px-5 py-2 border border-cyan-600">
            Request a demo{" "}
          </button>
        </div>
      </div>
      <div className="mx-auto">
        <img alt="rebrandly logo" src="/img/rebrandly-avatar.png" />
      </div>
    </div>
  );
}

export default Hero;
