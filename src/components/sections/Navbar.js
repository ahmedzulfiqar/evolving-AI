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
        class={`navbar mynavbar navbar-expand-sm bg-blacks text-light px-md-3 px-1  fixed-top ${
          !Scrolled ? "py-sm-3 pb-sm-3 py-4 " : "py-sm-3 pb-sm-3 py-4 "
        }`}
      >
        <div class="container ps-md-0">
          {" "}
          <a class="display-6 text-purple fw-bolder mb-2 mt-0 " href="#">
            <img src={logo} alt="" className="img-fluid " width={"180rem"} />
          </a>
          <div class=" justify-content-start algin-self-start  pre d-md-block d-none px-0">
            <ul class="navbar-nav mx-0">
              <li class="nav-item mx-md-3 mx-2">Home</li>
              <li class="nav-item mx-md-3 mx-2">About Us</li>
              <li class="nav-item mx-md-3 mx-2">PartnerShips</li>
              <li class="nav-item mx-md-3 mx-2">Contact</li>
              <li class="nav-item mx-md-3 mx-2">News Teller</li>
            </ul>
          </div>
          <div
            class=" justify-content-end algin-self-center setwi me-3 d-md-none d-block "
            onClick={() => setopen(!open)}
          >
            <i
              class={
                open
                  ? "fa-solid fa-bars fa-rotate-180 display-6"
                  : "fa-solid fa-xmark  display-6"
              }
            ></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
