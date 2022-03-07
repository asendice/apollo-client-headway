function Nav() {
  return (
    <ul className="flex flex-row px-10 py-5">
      <li>
        <img alt="rebrandly logo" src="/img/rebrandly-logo.png" />
      </li>
      <li className="ml-10">
        <p>Features </p>
      </li>
      <li className="ml-10">
        <p>Pricing </p>
      </li>
      <li className="ml-auto">
        <p>Login </p>
      </li>
    </ul>
  );
}

export default Nav;
