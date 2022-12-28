import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
const HeaderPage = () => {
  const [view, setView] = useState("basic");
  return (
    <div id="header">
      <div className="header">
        <ul className="tableUL">
          <li>
            <NavLink
              onClick={() => setView("Sign-up")}
              style={{ color: view === "Sign-up" ? "#fff" : "" }}
              to={"/"}
            >
              Sign in
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setView("Sign-in")}
              style={{ color: view === "Sign-in" ? "#fff" : "" }}
              to={"/sign-up-page"}
            >
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setView("Users-in")}
              style={{ color: view === "Users-in" ? "#fff" : "" }}
              to={"/users-page"}
            >
              Users
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderPage;
