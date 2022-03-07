function Hero() {
  return (
    <div className="grid grid-cols-2 px-20">
      <div className="my-auto text-left">
        <h1 className="text-4xl font-medium">
          {" "}
          Your Brand on Your Links{" "}
          <span className="text-xs mb-auto">&reg;</span>
        </h1>
        <p className="mt-5 text-gray-600">
          {" "}
          Rebrandly is the industry-leading link manangement platform to brand,
          track and share short URL's using a custom domain name.{" "}
        </p>
        <div className="flex gap-5 mt-5">
          <button className="rounded text-white px-5 py-2 border border-cyan-600 bg-cyan-600">
            Sign up free{" "}
          </button>
          <button className="rounded text-cyan-600 px-5 py-2 border border-cyan-600">
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
