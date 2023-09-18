import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../desgin-blocks/Card";
import { Element } from "react-scroll";

function Section3() {
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
    <Element name="PartnerShips" className="px-0">
      <div className="col-12 p-0 py-md-5 py-5 tean bg-black">
        <div className="container py-md-5 px-0">
          <div className="row m-0 justify-content-center">
            <div className="col-12 text-light display-5 weight text-uppercase">
              Brands We Have Worked With
              <hr className="opacity-100 border-warning w-25" />
            </div>
            <div className="col-12 mt-md-5 mt-3">
              <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1000}
                customTransition="all .5s"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
              >
                <Card
                  image={
                    "https://www.analyticsinsight.net/wp-content/uploads/2019/03/AI-Tech.jpg"
                  }
                  text1={"Ai gernators"}
                />
                <Card
                  image={
                    "https://earbudsexpress.com/wp-content/uploads/2023/02/Untitled-1-Recovered-Recovered-1.png"
                  }
                  text1={"Ai Developers"}
                />
                <Card
                  image={
                    "https://blogs.worldbank.org/sites/default/files/users/user1111/top%20artificial%20intelligence.jpg"
                  }
                  text1={"Ai Makers"}
                />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Section3;
