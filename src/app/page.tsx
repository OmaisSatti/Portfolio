"use client";

import About from "./about/page";
import Contact from "./contact/page";
import Home from './home/page'
import Projects from "./projects/page";

export default function Main() {

  return (
    <>
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
