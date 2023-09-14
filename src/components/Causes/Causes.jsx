/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { CaretRight } from "../CaretRight";
import "./style.css";

export const Causes = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`causes ${state.property1} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      {state.property1 === "drop-down-1" && (
        <div className="overlap">
          <div className="overlap-group">
            <div className="causes-menu">
              <div className="div">
                <div className="text-wrapper">Mental Health</div>
                <div className="text-wrapper-2">Education</div>
                <div className="text-wrapper-3">Environment</div>
                <div className="text-wrapper-4">LGBTQ+ Rights</div>
                <div className="text-wrapper-5">Bullying</div>
                <div className="text-wrapper-6">Racial Justice</div>
                <div className="text-wrapper-7">Gender Rights</div>
                <div className="text-wrapper-8">All Causes</div>
                <div className="text-wrapper-9">Browse</div>
                <div className="text-wrapper-10">Volunteer</div>
                <div className="text-wrapper-11">Find organisations</div>
                <img className="line" alt="Line" src="/img/line-8.svg" />
                <img className="img" alt="Line" src="/img/line-9.svg" />
                <div className="group">
                  <img className="image" alt="Image" src="/img/image-1.png" />
                  <div className="text-wrapper-12">United Way</div>
                </div>
                <div className="group-2">
                  <img className="image-2" alt="Image" src="/img/image-2.png" />
                  <div className="text-wrapper-13">Bread and Bounty</div>
                </div>
                <div className="group-3">
                  <img className="image-3" alt="Image" src="/img/image-4.png" />
                  <p className="p">One Step at a Time</p>
                </div>
                <div className="group-4">
                  <img className="image-4" alt="Image" src="/img/image-3.png" />
                  <div className="text-wrapper-14">Wheels of Change</div>
                </div>
                <div className="group-5">
                  <img className="image-5" alt="Image" src="/img/image-5.png" />
                  <div className="text-wrapper-15">Bridging Gaps</div>
                </div>
              </div>
            </div>
            <div className="text-wrapper-16">Causes</div>
          </div>
          <CaretRight />
        </div>
      )}

      {state.property1 === "default" && (
        <>
          <div className="text-wrapper-17">Causes</div>
          <CaretRight />
        </>
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "drop-down-1") {
    switch (action) {
      case "click":
        return {
          property1: "default",
        };
    }
  }

  if (state.property1 === "default") {
    switch (action) {
      case "click":
        return {
          property1: "drop-down-1",
        };
    }
  }

  return state;
}

Causes.propTypes = {
  property1: PropTypes.oneOf(["default", "drop-down-1"]),
};
