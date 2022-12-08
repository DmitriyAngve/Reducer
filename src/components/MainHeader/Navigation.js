import React, { useContext } from "react";
import AuthContext from "../../Store/auth-context";

import classes from "./Navigation.module.css";

const Navigation = () => {
  const ctx = useContext(AuthContext); // useContext most elegant than using Consumer

  // (ctx) - context data, AuthContext object! "ctx.isLoggedIn" !!!
  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};
// ctx.onLogout - works, because on the contex object (AuthContext.Provider) we have the onLogout value
export default Navigation;
