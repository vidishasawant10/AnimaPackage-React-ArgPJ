/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Caretright17 = ({ color = "#528792", className }) => {
  return (
    <svg
      className={`caretright-17 ${className}`}
      fill="none"
      height="22"
      viewBox="0 0 22 22"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M8.25 4.125L15.125 11L8.25 17.875"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

Caretright17.propTypes = {
  color: PropTypes.string,
};
