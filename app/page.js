import Image from "next/image";
import Hero from "./components/components/Hero";
import Navbar from "./components/components/Navbar";
import Service from "./components/components/Service";
import Section from "./components/components/Section";
import Case from "./components/components/Case";

import TeamSection from "./components/components/TeamSection";
import Footer from "./components/components/Footer";
// import Navbar from "./components/components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar/>
   <Hero />
   <Service/>
   <Section></Section>
   <Case/>
   <TeamSection/>
   <Footer/>
    </>
  );
}