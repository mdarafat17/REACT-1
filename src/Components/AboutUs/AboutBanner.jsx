import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Home from "../Home/Home";
import AboutUs from "./AboutUs";
import './AboutBanner.css'


const AboutBanner = () => {
  return (
    
      <div className=" w-auto  pt-[100px] bg-[url('/public/assets/aboutUs.png')] bg-cover  sm:pt-[150px] lg:pt-[230px] pb-[100px] md:-pl-[10px] pl-[0px]   ">
    

      

      <div className="text-center">
        <h1 className="text-6xl lg:text-8xl  text-white font-bold mt-[30px] 	">About Us</h1>
        <div className=" flex items-center justify-center text-white pt-[20px] text-lg gap-2 mb-[10px]">
          
          <Link to={'/'}>Home</Link>
          <FaAngleRight />
          <Link to={AboutUs}>About</Link>

        </div>
     </div>
    </div>
  );
};

export default AboutBanner;