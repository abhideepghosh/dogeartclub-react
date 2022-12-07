import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="logo">
          <a href="#">Your Logo</a>
        </div>
        <div id="mainListDiv" className="main_list">
          <ul className="navlinks">
            <li>
              <a href="https://discord.com/invite/dogeartclub" target="_blank">
                <div className="icon-box">
                  <i className="fa-brands fa-discord icons" />
                </div>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/DogeArtClub" target="_blank">
                <div className="icon-box">
                  <i class="fa-brands fa-twitter icons" />
                </div>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/dogeartclub/" target="_blank">
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
