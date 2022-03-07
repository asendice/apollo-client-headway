import { useRef } from "react";

function Form() {
  const urlRef = useRef();
  const slugRef = useRef();

  return (
    <div>
      <form>
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
