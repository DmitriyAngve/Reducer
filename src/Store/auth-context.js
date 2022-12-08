import React from "react";

// Create context takes a default Context and Context here really is hust your app or component white State
// AuthContext itself is not a component, it is an object will contain component
const AuthContext = React.createContext({
  isLoggedIn: false, // false like initial state
});

export default AuthContext;
