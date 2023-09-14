import React, { useState } from "react";
import Middlecover from "../covers/Middlecover";
import { Element } from "react-scroll";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import logo from "../media/Evolving AI logo.png";
import bg from "../media/nasa-Q1p7bh3SHj8-unsplash.jpg";
import videos from "../media/pexels_videos_1851190 (2160p).mp4";
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
              <p className="legend text-md-start text-center">
                <div className="container ps-md-5">
                  <div className="display-1 text-warning ps-md-2">
                    EVOLVING <span className="text-light">AI</span>
                  </div>
                  <p className=" fw-lighter col-md-10 mt-2 fw-light ps-md-3">
                    Journey through the world of Artificial Intelligence.
                  </p>
                  <div className="text-md-start text-center fw-light px-0">
                    <div className="mt-md-4 mt-2 ">
                      <div class=" justify-content-md-start  justify-content-center  algin-self-center  pre d-flex px-0">
                        <ul class=" d-flex px-0">
                          <li class="nav-item mx-md-3 mx-2 bg-warning px-2 py-1 rounded-2 ">
                            <i
                              class="fa-brands fa-discord text-dark "
                              aria-hidden="true"
                            ></i>
                          </li>
                          <li class="nav-item mx-md-3 mx-2 bg-warning px-2 py-1 rounded-2">
                            <i class="fa-solid  fa-envelope text-dark "></i>
                          </li>
                          <li class="nav-item mx-md-3 mx-2 bg-warning px-2 py-1 rounded-2">
                            <i class="fa-brands fa-instagram text-dark "></i>
                          </li>
                          <li class="nav-item mx-md-3 mx-2 bg-warning px-2 py-1 rounded-2">
                            <i class="fa-brands fa-twitter text-dark "></i>
                          </li>
                          <li class="nav-item mx-md-3 mx-2 bg-warning px-2 py-1 rounded-2">
                            <i class="fa-brands fa-tiktok text-dark "></i>
                          </li>
                        </ul>
                      </div>
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
