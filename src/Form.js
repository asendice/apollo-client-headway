import { useRef } from "react";
import { useCreateLink } from "./hooks/useCreateLink";

function Form() {
  const urlRef = useRef();
  const slugRef = useRef();

  const { createLink, data } = useCreateLink();

  function handleSubmit(e) {
    e.preventDefault();
    createLink({
      variables: { url: urlRef.current.value, slug: slugRef.current.value }
    });
  }

  return (
    <div className="bg-sky-900 py-12">
      <form
        className="flex px-5 md:flex-row gap-4 justify-center flex-col"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          className="px-6 py-2 rounded md:w-64"
          ref={urlRef}
          placeholder="Make your links shorter"
        />
        <input
          className="px-6 py-2 rounded "
          ref={slugRef}
          placeholder="Custom slug"
        />
        <button
          className=" py-2 rounded px-6 text-white bg-cyan-600 md:w-64"
          type="submit"
        >
          Shorten URL
        </button>
      </form>
      <p className="text-white mt-5">
        By clicking shorten, you agree to Rebrandly's{" "}
        <a href="">Term of Use </a> and <a href="#"> Privacy Policy </a>
      </p>
    </div>
  );
}

export default Form;
