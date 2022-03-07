function Footer() {
  return (
    <ul className="flex flex-col content-start bg-zinc-600 px-10 py-12 text-white content-start md:flex-row">
      <li className="text-left md:ml-10">
        {" "}
        <a href="#">Terms & Conditions </a>
      </li>
      <li className="text-left md:ml-10">
        <a href="#">Privacy Policy</a>
      </li>
      <li className="text-left md:ml-10">
        <a href="#">Cookie Policy </a>
      </li>
      <li className="text-left md:ml-auto">Rebrandly &copy; Copyright 2020</li>
    </ul>
  );
}

export default Footer;
