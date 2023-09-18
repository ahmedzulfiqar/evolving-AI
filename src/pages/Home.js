import React, { useState } from "react";
import Homecover from "../components/covers/Homecover";
import Navbar from "../components/sections/Navbar";
import Sidebarcomp from "../components/sections/Sidebarcomp";
import Mainsection from "../components/sections/Mainsection";
import Section2 from "../components/sections/Section2";
import Section3 from "../components/sections/Section3";
import Section4 from "../components/sections/Section4";
import Section5 from "../components/sections/Section5";
import Section6 from "../components/sections/Section6";
import Section7 from "../components/sections/Section7";
import logo from "../components/media/Evolving AI logo.png";
import Footer from "../components/desgin-blocks/Footer";
import Section8 from "../components/sections/Section8";
function Home() {
  const [open, setopen] = useState(false);

  return (
    <Homecover>
      <Navbar setopen={setopen} open={open} />
      <Mainsection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Footer />
    </Homecover>
  );
}

export default Home;
