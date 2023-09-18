import React from "react";
import videos from "../media/pexels-pavel-danilyuk-8084614 (Original).mp4";
import { Element } from "react-scroll";

function Section2() {
  return (
    <Element className="px-0" name="About Us">
      <div className="col-12 p-0 py-md-5 py-5 tean bg-light">
        <div className="container py-md-5 px-0">
          <div className="row m-0 justify-content-center">
            <div className="col-12 text-md-center text-start">
              <div className="display-5 mt-2 text-dark weight text-uppercase">
                About Us
              </div>
              <p className="mt-md-4 mt-3 text-dark px-0">
                At Evolving AI, we're passionate about exploring the limitless
                possibilities of Artificial Intelligence (AI). Our mission is to
                make AI accessible and understandable for everyone, whether
                you're a seasoned tech enthusiast or just dipping your toes into
                this fascinating world.
              </p>
            </div>
            <div className="col-12 mt-md-5 mt-4">
              <div className="row m-0 justify-content-evenly">
                <div className="col-md-3 col-6 text-md-center p-0">
                  <div className="text-black  weight display-5">300K+</div>
                  <div className="fs-6 muted">Followes Instagram</div>
                </div>{" "}
                <div className="col-md-3 col-6 text-md-center p-0">
                  <div className="text-black  weight display-5">200+</div>
                  <div className="fs-6 muted">Members Discord</div>
                </div>{" "}
                <div className="col-md-3 col-6 text-md-center p-0 mt-md-0 mt-4">
                  <div className="text-black  weight display-5">2b+</div>
                  <div className="fs-6 muted">Views Month</div>
                </div>{" "}
                <div className="col-md-3 col-6 text-md-center p-0 mt-md-0 mt-4">
                  <div className="text-black  weight display-5">355+</div>
                  <div className="fs-6 muted">Posts Instagram</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Section2;
