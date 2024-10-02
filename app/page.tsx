import Image from "next/image";
import Navbars from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Description from "./components/Description";

export default function Home() {
  return (
<div>
 <Navbars/>
 <HeroSection/>
 <Description/>
</div>
  );
}
