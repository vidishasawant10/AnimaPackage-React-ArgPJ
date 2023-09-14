import React from "react";
import { CaretRight } from "../../components/CaretRight";
import { Causes } from "../../components/Causes";
import { Login } from "../../components/Login";
import "./style.css";

export const End = () => {
  return (
    <div className="end">
      <div className="div-2">
        <div className="overlap-4">
          <div className="group-8">
            <p className="text-wrapper-20">Go back to home page</p>
            <img className="line-2" alt="Line" src="/img/line-22.svg" />
          </div>
          <p className="text-wrapper-21">
            You have subscribed to the project. You will receive SMS and emails when your donation is successful and can
            track your donation through the link sent to your email.
          </p>
        </div>
        <p className="text-wrapper-22">Thanks for your donation !</p>
        <img className="pexels-rodnae" alt="Pexels rodnae" src="/img/pexels-rodnae-productions-6646907-1.png" />
        <div className="overlap-5">
          <div className="top-bar">
            <div className="donate">
              <div className="overlap-group-2">
                <div className="text-wrapper-23">Donate</div>
              </div>
            </div>
            <div className="events">
              <div className="text-wrapper-24">Events</div>
              <CaretRight />
            </div>
            <div className="home">
              <div className="text-wrapper-25">Home</div>
              <img className="line-3" alt="Line" src="/img/line-2.svg" />
            </div>
            <div className="logo">
              <div className="logo-2">
                <div className="text-wrapper-26">hope</div>
                <div className="group-9">
                  <div className="overlap-group-3">
                    <img className="rectangle" alt="Rectangle" src="/img/rectangle-7.png" />
                    <img className="heart" alt="Heart" src="/img/heart.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Causes className="causes-instance" property1="default" />
        </div>
        <Login className="login-instance" property1="default" />
      </div>
    </div>
  );
};
