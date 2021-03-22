import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav>
        <div className="nav-wrapper white ">
          <Link to="/" className="brand-logo left">
            Instagarm
          </Link>
          <ul id="nav-mobile" className="right">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/createpost">Create Post</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
