import React from "react";
import logo from "../media/Evolving AI logo.png";

function Footer() {
  return (
    <footer class="text-center text-lg-start bg-black text-muted   m-0 p-0">
      <div class="container text-center text-md-start mt-5">
        <div class="row mt-3">
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-3">
              <img src={logo} className="img-fluid" width={"200vw"} alt="" />
            </h6>
            <p>
              At Evolving AI, we're passionate about exploring the limitless
              possibilities of Artificial Intelligence (AI).
            </p>
          </div>

          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase text-warning fw-bold mb-4">Social Media Links</h6>
            <p>
              <a href="#!" class="text-reset">
                Instagram
              </a>
            </p>
            <p>
              <a href="#!" class="text-reset">
                Discord
              </a>
            </p>
            <p>
              <a href="#!" class="text-reset">
                Tiktok
              </a>
            </p>
            <p>
              <a href="#!" class="text-reset">
                Twitter
              </a>
            </p>
          </div>

          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4  text-warning">
              Useful links
            </h6>
            <p>
              <a href="#Home" class="text-reset">
                Home
              </a>
            </p>
            <p>
              <a href="#About-Us" class="text-reset">
                About Us
              </a>
            </p>
            <p>
              <a href="#NewsTeller" class="text-reset">
                NewsLetter
              </a>
            </p>
            <p>
              <a href="#Courses" class="text-reset">
                Courses
              </a>
            </p>
          </div>

          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase fw-bold mb-4  text-warning">Contact</h6>
            <p>
              <i class="fas fa-home me-3  text-warning"></i> New York, NY 10012,
              US
            </p>
            <p>
              <i class="fas fa-envelope me-3  text-warning"></i>
              info@example.com
            </p>
            <p>
              <i class="fas fa-phone me-3  text-warning"></i> + 01 234 567 88
            </p>
            <p>
              <i class="fas fa-print me-3  text-warning"></i> + 01 234 567 89
            </p>
          </div>
        </div>
      </div>

      <div class="text-center p-4">
        © 2021 Copyright : {""}
        <a class="text-reset fw-bold">{""} EvolvingAI.com</a>
      </div>
    </footer>
  );
}

export default Footer;
