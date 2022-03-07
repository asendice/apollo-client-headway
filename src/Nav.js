function Nav() {
  return (
    <ul className="flex flex-row px-10 py-5">
      <li>
        <img alt="rebrandly logo" src="/img/rebrandly-logo.png" />
      </li>
      <li className="ml-10 hidden lg:inline-block">
        <p>Features </p>
      </li>
      <li className="ml-10 hidden lg:inline-block">
        <p>Pricing </p>
      </li>
      <li className="ml-auto hidden lg:inline-block">
        <p>Login </p>
      </li>
      <div class="space-y-1 ml-auto lg:hidden ">
        <div class="w-6 h-1 rounded bg-cyan-600"></div>
        <div class="w-6 h-1 rounded bg-cyan-600"></div>
        <div class="w-6 h-1 rounded bg-cyan-600"></div>
      </div>
    </ul>
  );
}

export default Nav;
