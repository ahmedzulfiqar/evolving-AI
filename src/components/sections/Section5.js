import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../media/372964693_1342516460001593_3149138673660659603_n.heic";
import { Element } from "react-scroll";
function Section5() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Element name="NewsTeller" className="px-0">
      <div className="col-12 p-0 py-md-5 py-5 tean bg-black">
        <div className="container py-md-5 px-0">
          <div className="row m-0 justify-content-center">
            <div className="col-12 mt-md-2 mt-3">
              <div className="row m-0  setf">
                <div className="col-6 d-md-block d-none">
                  <img
                    src="https://blogs.worldbank.org/sites/default/files/users/user1111/top%20artificial%20intelligence.jpg "
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col-md-6 col-12 ps-0">
                  <div className="col-12 text-light display-6 weight">
                    NEWSLETTER
                    <hr className="opacity-100 border-warning w-25 mt-1" />
                  </div>
                  <div className="display-6 text-light weight mt-4">
                    DON'T LOSE YOUR JOB TO AI.{" "}
                    <span className="text-warning"> QUIT YOUR</span>{" "}
                    <span className="text-warning">JOB WITH AI.</span>
                  </div>
                  <p className="text-light  mt-3 fw-lighter px-2">
                    New business ideas, AI tools, growth hacks, and more - all
                    in a 5-minute newsletter.
                  </p>
                  <div class="form-outline ps-2 d-flex mt-5">
                    <input
                      type="text"
                      id="form12"
                      class="form-control"
                      placeholder="Enter Your Email"
                    />
                    <button className="btn btn-warning transfrom fw-bolder rounded-0 rounded-end">
                      SUBSCRIBE
                    </button>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Section5;
