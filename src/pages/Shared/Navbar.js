import React from "react";
const Navbar = () => {
  return (
    <section className="bg-accent lg:px-16 sticky top-0 z-10">
      <div className="navbar relative">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold text-accent"
            >
              <li>
                <a href="#about">About</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Services
                  <svg
                    className="fill-current "
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2 border border-gray-300 bg-white">
                  <li className="hover:bg-accent  hover:text-white">
                    <a href="#service">Web Development</a>
                  </li>
                  <li className="hover:bg-accent">
                    <a href="#service">App Development</a>
                  </li>
                  <li className="hover:bg-accent ">
                    <a href="#service">Web Hosting</a>
                  </li>
                  <li className="hover:bg-accent">
                    <a href="#service">SEO</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a href="#career">Career</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <a
            href="#home"
            className="btn btn-ghost normal-case text-xl hidden lg:block "
          >
            <span className="text-secondary">JS</span>{" "}
            <span className="text-white">ENCODER</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-white lg:font-bold">
            <li>
              <a href="#about">About</a>
            </li>
            <li tabIndex={0}>
              <a>
                Services
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="py-2 mt-2 border border-gray-300 bg-white">
                <li className="hover:bg-accent text-black hover:text-white">
                  <a href="#service">Web Development</a>
                </li>
                <li className="hover:bg-accent text-black hover:text-white">
                  <a href="#service">App Development</a>
                </li>
                <li className="hover:bg-accent text-black hover:text-white">
                  <a href="#service">Web Hosting</a>
                </li>
                <li className="hover:bg-accent text-black hover:text-white">
                  <a href="#service">SEO</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a href="#career">Career</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end lg:hidden">
          <a href="#home" className="btn btn-ghost normal-case text-xl">
            <span className="text-secondary">JS</span>{" "}
            <span className="text-white">ENCODER</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
