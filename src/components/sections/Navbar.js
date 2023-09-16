import React, { useEffect, useState } from "react";
import logo from "../media/Evolving AI logo.png";
function Navbar({ setopen, open }) {
  const [Scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop >50) {
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
        class={`navbar mynavbar navbar-expand-sm bg-md-transparent  shadow-1 text-light px-md-3 px-1  fixed-top ${
          !Scrolled ? "py-sm-3 pb-sm-3 py-4 " : "py-sm-3 pb-sm-3 py-4 bg-black "
        }`}
      >
        <div class="container ps-md-0">
          {" "}
          <a class="display-6 text-purple fw-bolder mb-2 mt-0 " href="#">
            <img src={logo} alt="" className="img-fluid loho" />
          </a>
          <div class=" justify-content-start algin-self-start  pre d-md-block d-none px-0">
            <ul class="navbar-nav mx-0">
              <li class="nav-item mx-md-3 mx-2 text-warning fw-bolder">Home</li>
              <li class="nav-item mx-md-3 mx-2">About Us</li>
              <li class="nav-item mx-md-3 mx-2">PartnerShips</li>
              <li class="nav-item mx-md-3 mx-2">Contact</li>
              <li class="nav-item mx-md-3 mx-2">News Teller</li>
            </ul>
          </div>
          <div
            class=" navbar-toggler border-0 me-auuto bg-transparent  justify-content-end algin-self-center setwi me-3 d-md-none d-block"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <i
              class={"fa-solid fa-bars fa-rotate-180 display-6 text-light"}
            ></i>
          </div>
        </div>
      </nav>
      <div
        class="offcanvas offcanvas-end  bg-blacks pt-3"
        tabindex="-1"
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel"
      >
        <div class="offcanvas-header pt-2">
          <h5 class="offcanvas-title pt-2" id="offcanvasDarkNavbarLabel">
            <a class="navbar-brand  text-light py-0 m-0" href="#">
              <img src={logo} alt="" className="img-fluid " width={"180rem"} />
            </a>
          </h5>

          <i
            class="fa fa-times display-6 text-light"
            type="button"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            aria-hidden="true"
          ></i>
        </div>
        <div class="offcanvas-body px-0  mt-0">
          <ul class="navbar-nav justify-content-end flex-grow-1 sa mynavbar text-light fw-bolder">
            <li class="nav-item px-md-3 px-2 ps-4 py-3 bg-warning shadow"  >
              Home
            </li>
            <li class="nav-item px-md-3 px-2  ps-4 py-3 ">About Us</li>
            <li class="nav-item px-md-3 px-2  ps-4 py-3">PartnerShips</li>
            <li class="nav-item px-md-3 px-2   ps-4 py-3">Contact</li>
            <li class="nav-item px-md-3 px-2  ps-4 py-3">News Teller</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
