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
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input ref={urlRef} placeholder="Make your links shorter" />
        <input ref={slugRef} placeholder="Custom slug" />
        <button type="submit">Shorten URL</button>
      </form>
      <p>
        By clicking shorten, you agree to Rebrandly's{" "}
        <a href="">Term of Use </a> and <a href="#"> Privacy Policy </a>
      </p>
    </div>
  );
}

export default Form;
