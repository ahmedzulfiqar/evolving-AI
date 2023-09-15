import React, { useState } from "react";
import Middlecover from "../covers/Middlecover";
import { Element } from "react-scroll";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import logo from "../media/Evolving AI logo.png";
import bg from "../media/nasa-Q1p7bh3SHj8-unsplash.jpg";
import videos from "../media/pexels-pavel-danilyuk-8084614 (Original).mp4";
import robot from "../media/iStock-1029035836-e1575983057612-removebg.png";
function Mainsection() {
  return (
    <Element name="Home" className="px-0">
      <Middlecover>
        <div className="col-12 p-0 m-0 ">
          <Carousel
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            showThumbs={false}
            useKeyboardArrows={false}
            autoPlay={true}
            stopOnHover={false}
            swipeable={true}
            autoFocus={false}
            emulateTouch={true}
            className="p-0 m-0 mycarousel"
            dynamicHeight={false}
          >
            <div>
              <video muted className="video p-0 m-0 imgcar" loop autoPlay>
                <source src={videos} type="video/mp4 " />
              </video>
              <div className="mask"></div>
              <p className="legend text-start ">
                <div className="container ps-md-5">
                  <div className="row">
                    <div className="col-md-8 col-12">
                      <div className="display-1 text- ps-md-2">
                        EVOLVING <span className="text-light">AI</span>
                      </div>
                      <p className=" fw-lighter col-md-10 mt-2 fw-light ps-md-3">
                        Journey through the world of Artificial Intelligence.
                      </p>
                      <div className="text-start  fw-light px-0">
                        <div className="mt-md-4 mt-2 "></div>
                      </div>
                    </div>
                    <div className="col-md-4 d-md-block d-none">
                      <img alt="" className="checker img-fluid" />
                    </div>
                  </div>
                </div>
              </p>
            </div>
          </Carousel>
        </div>
      </Middlecover>
    </Element>
  );
}

export default Mainsection;
