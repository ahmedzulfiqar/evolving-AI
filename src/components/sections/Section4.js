import React from "react";
import video1 from "../media/sds.mp4";
import robot from "../media/OIP.jpg";
function Section4() {
  return (
    <div className="col-12 p-0 py-md-5 py-5 tean sec4">
      <div className="container py-md-5 px-0">
        <div className="row m-0 justify-content-between">
          <div className="col-md-3 col-12 d-md-block d-none">
            <div className="videocover card">
              <video muted className="video p-0 m-0 imgcar" loop autoPlay>
                <source src={video1} type="video/mp4 " />
              </video>
            </div>
          </div>{" "}
          <div className="col-md-9 col-12 al px-md-5 mt-md-0 mt-5">
            <div className="col-12  display-5 weight">
              Why Work With Us
              <hr className="opacity-100 border-warning w-25" />
            </div>
            <p className="mt-md-4 mt-3 text-dark mb-3">
              Evolving AI is not only a dynamic Instagram page but also boasts
              an active and engaging Discord server dedicated to the latest AI
              news, tricks, and tools. Here's why brands should consider
              collaborating with us across both platforms:{" "}
            </p>
            <p className="mt-0 mb-3">
              <span className="fw-bold text-warning">
                Expertise in AI Domain :
              </span>{" "}
              &nbsp; Our team consists of AI experts deeply entrenched in the
              latest developments and trends within the AI sector. When you
              partner with Evolving AI, you gain access to a wealth of knowledge
              and insights, both on our Instagram page and our Discord server.
            </p>{" "}
            <p className="mt-0 mb-3">
              <span className="fw-bold text-warning">
                Interactive Engagement on Discord :
              </span>
              &nbsp;Discord provides a dynamic space for interactive engagement,
              including live chats, voice channels, and exclusive events. By
              partnering with Evolving AI on Discord, brands can directly engage
              with our audience in real-time, creating a more personal and
              immersive experience.
            </p>{" "}
            <p className="mt-0 mb-3">
              <span className="fw-bold text-warning">
                Cross-Platform Visibility :
              </span>
              &nbsp; Partnering with us across both Instagram and Discord
              amplifies your brand's visibility and impact within the AI
              community. This integrated approach ensures that your brand's
              message reaches a wider audience and resonates on multiple levels.
            </p>{" "}
            <p className="mt-0 mb-3">
              <span className="fw-bold text-warning">
                Data-Driven Insights :
              </span>
              &nbsp; Just like on Instagram, we provide data-driven insights and
              analytics on Discord, allowing brands to measure the performance
              and impact of their collaborations effectively. This data-driven
              approach helps brands make informed decisions and optimize their
              strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
