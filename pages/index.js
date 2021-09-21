import Drawer from '../components/Drawer/Drawer'
import Navbar from '../components/Navbar/Navbar'
import {useState} from 'react';
import Sidebar from '../components/Sidebar/Sidebar'
import HeroSection from '../components/HeroSection/HeroSection';
import InfoSection from './../components/InfoSection/InfoSection';
import { homeObjectFour, homeObjectOne, homeObjectThree, homeObjectTwo, homeObjectFive } from '../components/InfoSection/Data';
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer';
import SliderOne from '../components/cardslider/sliderone';
import World from '../components/worldMap/world';


import Head from 'next/head'


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen( !isOpen);
    };

  return (
    <div>
      <Head>
        <meta name="description" content="web service, web app, robotics, ai, iot" />
        <link rel="icon" href="/images/1.png" />
      </Head>

      <Drawer/>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <HeroSection/>
      <div style={{width: "100%", height: "100%" , backgroundColor: '#fff',overflow: 'hidden'}}>
        <SliderOne style={{width: "100%"}}/>
      </div>
      <InfoSection {...homeObjectOne} />
      <InfoSection {...homeObjectTwo} />
      <InfoSection {...homeObjectFive} />
      <InfoSection {...homeObjectThree} />
      <Services /> 
      <InfoSection {...homeObjectFour} />
      <World/>
      <Footer/>
      
    </div>
  )
}
