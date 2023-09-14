import React, { useState } from "react";
import Homecover from "../components/covers/Homecover";
import Navbar from "../components/sections/Navbar";
import Sidebarcomp from "../components/sections/Sidebarcomp";
import Mainsection from "../components/sections/Mainsection";

function Home() {
  const [open, setopen] = useState(true)
  return (
    <Homecover>
      <Navbar setopen={setopen} open={open} />
      <Mainsection />
    </Homecover>
  );
}

export default Home;
