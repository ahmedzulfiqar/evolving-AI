import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../media/twicht.jpg";
function Section7() {
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
    <div className="col-12 p-0 py-md-5 py-5 tean bg-black">
      <div className="container py-md-5 px-0">
        <div className="row m-0 justify-content-center">
          <div className="col-12 mt-md-2 mt-3">
            <div className="row m-0  justify-content-between setf">
              <div className="col-5 d-md-block d-none">
                <img
                  src={image1}
                  className="img-fluid h-100 rounded-2"
                  alt={
                    <a href="https://www.freepik.com/free-vector/modern-banner-with-twitch-logo_19577933.htm#query=discord%20join&position=0&from_view=search&track=ais">
                      Image by myriammira
                    </a>
                  }
                />
                on Freepik
              </div>
              <div className="col-md-7 ps-5 col-12  align-self-center">
                <div className="col-12 text-light display-6 weight">
                  DISCORD
                  <hr className="opacity-100 border-warning w-25 mt-1" />
                </div>
                <div className="display-6 text-light weight mt-4">
                  EVOLVING AI ON
                  <span className="text-warning"> DISCORD</span>{" "}
                </div>
                <p className="text-light  mt-3 fw-lighter px-2">
                  🚀 Join our AI Discord community for in-depth discussions,
                  exclusive insights, and stay ahead of the curve
                </p>
                <div class=" mt-4 ps-2">
                  <button className=" btn btn-warning  fw-bolder rounded-0">
                    <i class="fa-brands fa-discord me-2"></i>
                    SUBSCRIBE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section7;
