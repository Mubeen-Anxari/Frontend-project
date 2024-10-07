import Image from "next/image";
import Navbars from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Description from "./components/Description";
import Menu from "./components/Menu";
import AddToCart from "./addToCart/page";
import Cards from "./components/Cards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
<div>
 <Navbars/>
 <HeroSection/>
 <Description/>
 <Menu/>
 <AddToCart/>
 <Cards/>
 <Contact/>
 <Footer/>
</div>
  );
}
