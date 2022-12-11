import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="arrow">
        <img
          src="https://www.dogeartclub.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Farrow_1.2ef197d4a49317d00f3ce787784e5bf8.svg&w=1920&q=75"
          alt=""
          className="img-rotate vert-move"
        />
        <h1>Join discord & Follow our Twitter</h1>
      </div>
      <div className="container">
        <div className="logo">
          <a href="#section1">
            <img
              src="https://www.dogeartclub.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2FDAC.fbacb865f3afe0d7b981ba279a2f8f10.svg&w=828&q=75"
              className="navLogo"
              alt=""
            />
          </a>
        </div>
        <div id="mainListDiv" className="main_list">
          <ul className="navlinks">
            <li>
              <a href="https://discord.com" target="_blank">
                <div className="icon-box">
                  <i className="fa-brands fa-discord icons" />
                </div>
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank">
                <div className="icon-box">
                  <i class="fa-brands fa-twitter icons" />
                </div>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank">
                <div className="icon-box">
                  <i class="fa-brands fa-square-instagram icons" />
                </div>
              </a>
            </li>
          </ul>
        </div>
        <span className="navTrigger">
          <i></i>
          <i></i>
          <i></i>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
