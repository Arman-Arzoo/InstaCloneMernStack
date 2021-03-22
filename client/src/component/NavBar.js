import React from "react";

export default function NavBar() {
  return (
    <>
      <nav>
        <div className="nav-wrapper white ">
          <a href="#" className="brand-logo left">
            Instagarm
          </a>
          <ul id="nav-mobile" className="right">
            <li>
              <a href="sass.html">Login</a>
            </li>
            <li>
              <a href="badges.html">Sign up</a>
            </li>
            <li>
              <a href="collapsible.html">Profile</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
