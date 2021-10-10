import { useState } from "react";
import dynamic from "next/dynamic";

import {
  homeObjectFour,
  homeObjectOne,
  homeObjectThree,
  homeObjectTwo,
  homeObjectFive,
} from "../components/InfoSection/Data";
import World from "../components/worldMap/world";
import Head from "next/head";

const Drawer = dynamic(() => import("../components/Drawer/Drawer"));
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import HeroSection from "../components/HeroSection/HeroSection";

const InfoSection = dynamic(() =>
  import("./../components/InfoSection/InfoSection")
);
const Services = dynamic(() => import("../components/Services/Services"));
const Footer = dynamic(() => import("../components/Footer/Footer"));
const SliderOne = dynamic(() => import("../components/cardslider/sliderone"));

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Head>
        <meta
          name="description"
          content="web service, web app, robotics, ai, iot"
        />
        <link rel="icon" href="/images/1.png" />
      </Head>

      <Drawer />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          backgroundColor: "#fff",
          overflow: "hidden",
        }}
      >
        <SliderOne style={{ width: "100%" }} />
      </div>
      <InfoSection {...homeObjectOne} />
      <div>
        <InfoSection {...homeObjectTwo} />
      </div>
      <InfoSection {...homeObjectFive} />
      <InfoSection {...homeObjectThree} />
      <Services />
      <InfoSection {...homeObjectFour} />
      <World />
      <Footer />
    </div>
  );
}
