import React, { useState } from "react";
import Homecover from "../components/covers/Homecover";
import Navbar from "../components/sections/Navbar";
import Sidebarcomp from "../components/sections/Sidebarcomp";
import Mainsection from "../components/sections/Mainsection";
import Section2 from "../components/sections/Section2";
import Section3 from "../components/sections/Section3";
import Section4 from "../components/sections/Section4";

function Home() {
  const [open, setopen] = useState(false);

  return (
    <Homecover>
      <Navbar setopen={setopen} open={open} />
      <Mainsection />
      <Section2 />
      <Section3 />
      <Section4 />
      <div className="absolute">a</div>
    </Homecover>
  );
}

export default Home;
