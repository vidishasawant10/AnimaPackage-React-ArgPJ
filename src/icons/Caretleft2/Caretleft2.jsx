/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Caretleft2 = ({ color = "white", className }) => {
  return (
    <svg
      className={`caretleft-2 ${className}`}
      fill="none"
      height="26"
      viewBox="0 0 26 26"
      width="26"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M16.25 21.125L8.125 13L16.25 4.875"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

Caretleft2.propTypes = {
  color: PropTypes.string,
};
