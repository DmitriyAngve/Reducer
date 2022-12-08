import React, { useState, useEffect } from "react";

// Create context takes a default Context and Context here really is hust your app or component white State
// AuthContext itself is not a component, it is an object will contain component
const AuthContext = React.createContext({
  isLoggedIn: false, // false like initial state
  onLogout: () => {}, // dummy function because we're not going to use this (only for IDE auto-completion)
  onLogin: (email, password) => {},
});

// Create a separate Context Management component
export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  // We manage the entire authentication state in this separate provider component
  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
// value={} is not my component (value!)
// isLoggedIn: isLoggedIn - will be updated by React whenever isLoggedIn changed, and that new object, that new Context object will be passed down to all listening components. After this everywhere in all child components we can listen to that
// onLogout: logoutHandler - in this any component we'll be able to utilize logoutHandler
export default AuthContext;
