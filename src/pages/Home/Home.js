import React from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import Service from "./Service";
import TeamMember from "./TeamMember";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero></Hero>
      <About></About>
      <Service></Service>
      <TeamMember></TeamMember>
      <Portfolio></Portfolio>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
