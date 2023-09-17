import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../desgin-blocks/Card";
import Card2 from "../desgin-blocks/Card2";
function Section6() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="col-12 p-0 py-md-5 py-5 tean bg-light">
      <div className="container py-md-5 px-0">
        <div className="row m-0 justify-content-center">
          <div className="col-12 text-md-center text-">
            <div className="display-6 mt-2 text-dark weight text-uppercase">
              Explore AI Courses
            </div>
            <p className="mt-md-4 mt-3 text-dark px-0">
              Discover the future of AI with us! Join our AI courses and embark
              on a transformative learning experience in the world of artificial
              intelligence.
            </p>
          </div>
          <div className="col-12 mt-md-5 mt-3">
            <div className="row m-0 justify-content-center px-0 mx-0  ">
              <Card2
                image={
                  "https://public-files.gumroad.com/ttytrdebghfyugrnewz80os0ekxq"
                }
                text={
                  "Ultimate Guide To: Photorealistic AI Images within minutes"
                }
                text2={
                  "Welcome to my Midjourney guide!🌟 Create lifelike AI photoswith ease. Dive into this straightforward and user-friendly starter guide."
                }
              />
              <Card2
                image={
                  "https://public-files.gumroad.com/xodgg8jv054pmjxbvqr365aib2cz"
                }
                text={
                  "Ultimate Guide to ChatGPT: Learning and Mastering ChatGPT"
                }
                text2={
                  "New to ChatGPT? This guide will get you up and running in just 2 hours!"
                }
              />
              <Card2
                image={
                  "https://public-files.gumroad.com/uzgplm2kuwy5l0zz3s6kl81y342y"
                }
                text={"The Perfect Guide: Learning and Mastering Midjourney"}
                text2={
                  "New to Midjourney? Check out my simple guide filled with tools for making great images."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section6;
