import React from "react";
import classes from "./MyButt.module.css";

const MyButt = ({ children, ...props }) => {
  return (
    <button {...props} className={classes.myBtn}>
      {children}
    </button>
  );
};

export default MyButt;
