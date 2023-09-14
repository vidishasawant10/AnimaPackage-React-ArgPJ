/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { CaretRight } from "../CaretRight";
import "./style.css";

export const Login = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div className={`login property-1-${state.property1} ${className}`}>
      {state.property1 === "drop-down-2" && (
        <div className="overlap-2">
          <div className="overlap-3">
            <div className="sign-up">
              <div className="div-wrapper">
                <div className="text-wrapper-18">Sign Up</div>
              </div>
            </div>
            <img className="img-2" alt="Login" src="/img/login.png" />
          </div>
          <div
            className="group-6"
            onClick={() => {
              dispatch("click");
            }}
          >
            <div className="text-wrapper-19">Login</div>
            <CaretRight />
          </div>
        </div>
      )}

      {state.property1 === "default" && (
        <>
          <div className="overlap-group-wrapper">
            <div className="div-wrapper">
              <div className="text-wrapper-18">Sign Up</div>
            </div>
          </div>
          <div
            className="group-7"
            onClick={() => {
              dispatch("click_92");
            }}
          >
            <div className="text-wrapper-19">Login</div>
            <CaretRight />
          </div>
        </>
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "click":
      return {
        ...state,
        property1: "default",
      };

    case "click_92":
      return {
        ...state,
        property1: "drop-down-2",
      };
  }

  return state;
}

Login.propTypes = {
  property1: PropTypes.oneOf(["drop-down-2", "default"]),
};
