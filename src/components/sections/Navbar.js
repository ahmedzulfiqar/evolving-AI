import React, { useEffect, useState } from "react";
import logo from "../media/Evolving AI logo.png";
function Navbar({ setopen, open }) {
  const [Scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 500) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="col-12 p-0 m-0">
      <nav
        class={`navbar mynavbar navbar-expand-sm bg-blacks text-light px-md-3 px-1 shadow fixed-top ${
          !Scrolled ? "py-sm-3 pb-sm-3 py-3 pb-0" : "py-sm-3 pb-sm-3 py-3 pb-0"
        }`}
      >
        <div class="container ps-md-0">
          {" "}
          <a class="display-6 text-purple fw-bolder mb-2 mt-0 " href="#">
            <img src={logo} alt="" className="img-fluid " width={"180rem"} />
          </a>
          <div class=" justify-content-start algin-self-start ms-auto me-5 pre d-sm-block d-none">
            <ul class="navbar-nav">
              <li class="nav-item mx-md-3 mx-2">
                <i
                  class="fa-brands fa-discord text-light "
                  aria-hidden="true"
                ></i>
              </li>
              <li class="nav-item mx-md-3 mx-2">
                <i class="fa-solid  fa-envelope text-light "></i>
              </li>
              <li class="nav-item mx-md-3 mx-2">
                <i class="fa-brands fa-instagram text-light "></i>
              </li>
              <li class="nav-item mx-md-3 mx-2">
                <i class="fa-brands fa-twitter text-light "></i>
              </li>
              <li class="nav-item mx-md-3 mx-2">
                <i class="fa-brands fa-tiktok text-light "></i>
              </li>
            </ul>
          </div>
        </div>
        <div class="d-sm-none d-block mt-3 w-100 bg-black py-3">
          <div className="row m-0 justify-content-between px-3">
            <i class="fa fa-home text-light col-2" aria-hidden="true"></i>
            <i class="fa-solid fa-user-group text-light col-2"></i>
            <i class="fa-solid fa-bell text-light col-2 "></i>
            <i class="fa fa-envelope text-light  col-2"></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
