import React from "react";
import image1 from "../media/img1.jpg";
import image2 from "../media/img2.jpg";
import image3 from "../media/img3.jpg";
import image4 from "../media/img4.jpg";
import image5 from "../media/img5.jpg";
import image6 from "../media/img6.jpg";
import image7 from "../media/img7.jpg";
function Section8() {
  return (
    <div className="col-12 p-0 py-md-5 py-5 tean bg-light">
      <div className="container py-md-5 px-0">
        <div className="row m-0 justify-content-center">
          <div className="col-12 text-md-center text-">
            <div className="display-6 mt-2 text-dark weight text-uppercase">
              GALLERY
            </div>
            <p className="mt-md-4 mt-3 text-dark px-0">
              Welcome to our AI Gallery, where you can explore captivating
              visuals showcasing the diverse applications and innovations of
              Artificial Intelligence.
            </p>
          </div>
          <div className="col-12 mt-md-5 mt-3">
            <div className="row m-0 justify-content-center px-0 mx-0  ">
              <div class="row scroll">
                <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                  <img
                    src={image1}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Boat on Calm Water"
                  />

                  <img
                    src={image2}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Wintry Mountain Landscape"
                  />
                </div>

                <div class="col-lg-4 mb-4 mb-lg-0">
                  <img
                    src={image3}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mountains in the Clouds"
                  />

                  <img
                    src={image4}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Boat on Calm Water"
                  />
                </div>

                <div class="col-lg-4 mb-4 mb-lg-0">
                  <div className="row">
                    <img
                      src={image5}
                      class="w-100 shadow-1-strong rounded mb-4 col-12"
                      alt="Waves at Sea"
                    />

                    <img
                      src={image6}
                      class="w-100 shadow-1-strong rounded mb-4 col-12"
                      alt="Yosemite National Park"
                    />
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section8;
