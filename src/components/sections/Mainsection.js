import React, { useState } from "react";
import Middlecover from "../covers/Middlecover";
import { Element } from "react-scroll";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import logo from "../media/Evolving AI logo.png";
import bg from "../media/nasa-Q1p7bh3SHj8-unsplash.jpg";
import videos from "../media/pexels-pavel-danilyuk-8084614 (Original).mp4";
import robot from "../media/iStock-1029035836-e1575983057612-removebg.png";
import TextTransition, { presets } from "react-text-transition";
function Mainsection() {
  const TEXTS = [
    "Stay Ahead Of Curve",
    "AI Revolutionize",
    "Unlock AI Potential",
    "AI's Impact Today",
    "AI: Future Unveiled",
    "Smart AI Solutions",
    "AI: Beyond Limits",
    "Navigating AI Era",
    "AI Transformations",
    "AI Empowering You",
    "AI: Shaping Tomorrow",
  ];
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);
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
                <div className="container pe-0">
                  <div className="row m-0">
                    <div className="col-md-8 col-12  px-0">
                      <div className="display-1 text- ps-md-2 px-0">
                        EVOLVING <span className="text-light">AI</span>
                      </div>
                      <p className=" fw-lighter col-md-10 mt-2 fw-light ps-md-3 text-md-warning">
                        <TextTransition
                          springConfig={presets.gentle}
                          style={{ margin: "0 4px" }}
                          className="text-light fw-bolder"
                          inline
                        >
                          {TEXTS[index % TEXTS.length]}
                        </TextTransition>{" "}
                      </p>

                      <div className="ps-md-3">
                        <div class=" mt-md-4 ps-2">
                          <button className=" btn btn-warning  fw-bolder rounded-0">
                            <i class="fa-brands fa-discord me-2"></i>
                            SUBSCRIBE
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 d-lg-block d-none">
                      <img alt="" className="checker img-fluid" />
                    </div>{" "}
                  </div>
                </div>
              </p>
              <div className="legend2  w-100">
                <div className="container  ps-0">
                  <div className="row m-0 justify-content-center ps-0">
                    <div class="col-12 text-center  text-light ps-0">
                      <ul class=" d-lg-none d-flex fs-4  text-center justify-content-center">
                        <li class="nav-item mx-md-3 mx-2 ">
                          <i
                            class="fa-brands fa-discord text- "
                            aria-hidden="true"
                          ></i>
                        </li>
                        <li class=" mx-md-3 mx-2">
                          <i class="fa-solid fa-envelope text- "></i>
                        </li>
                        <li class=" mx-md-3 mx-2">
                          <i class="fa-brands fa-instagram text- "></i>
                        </li>
                        <li class="mx-md-3 mx-2">
                          <i class="fa-brands fa-twitter text- "></i>
                        </li>{" "}
                        <li class="mx-md-3 mx-2">
                          <i class="fa-brands fa-tiktok text- "></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </Middlecover>
    </Element>
  );
}

export default Mainsection;
