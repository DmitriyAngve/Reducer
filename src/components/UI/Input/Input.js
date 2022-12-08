import React, { useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";

// useImperativeHandle - this hook allows to use this Component or functionalities from inside this Component imperatively, it means not through the regular state props management not by controlling by Component through state in the parent Component, but directly calling or manipulating something in a Component programmatically

// React.forwardRef is a function which we execute a method which we execute to which we parse our Component function. ForwardRef returns a React.Component (Input still is a React component) but a React Component that is capable of being bound to a ref.

// INPUT ia able to take a ref prop

const Input = React.forwardRef((props, ref) => {
  // ref here is for establish the connection
  const inputRef = useRef();

  const activate = () => {
    // it's a fucntion that's not called from inside the input but from outside
    inputRef.current.focus();
  };

  // Second argument is a function  that should return an object and that object willcontain all the data you will be able to use from outside
  useImperativeHandle(ref, () => {
    return {
      // focus field or activate field (no matter?) and point internal function or internal variable thaTt should be accessible from outside through that name
      focus: activate,
    };
  });

  /*
IT'S NOT A GOAL SAID FUCKING MAX

  //use useEffect after the component was rendered. Parse to useEffect runs after after every Component render cycle
  // Here I pass an empty array as a dependency array, so useEffect run only once (runs once time after component was executed and rendered)
  useEffect(() => {
    inputRef.current.focus(); // "focus()" is a method that is available on the Input DOM object to which I got access through this Ref. As a result, since the Input will render for email and password this will focus the password Input because that the second and therefore last Input that's being rendered
  }, []);
*/
  return (
    // ref={} - ref prop supported on all built-in HTML Components (like input)
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor="{props.id}">{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
