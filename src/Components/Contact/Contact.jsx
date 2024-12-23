import { FaAngleRight } from "react-icons/fa";
import { RiMailFill } from "react-icons/ri";
import { TiLocation } from "react-icons/ti";
import { Link } from "react-router-dom";
import MContact from "./MContact";
import React from "react";


const Contact = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Us"
  }, [])
  return (
    <div>
      <div className=" w-auto  pt-[100px] bg-[url('/public/assets/aboutUs.png')] bg-cover  sm:pt-[150px] lg:pt-[230px] pb-[100px] md:-pl-[10px] pl-[0px]   ">
    

      

      <div className="text-center">
        <h1 className="text-6xl lg:text-8xl  text-white font-bold mt-[30px] 	">Contact Us</h1>
        <div className=" flex items-center justify-center text-white pt-[20px] text-lg gap-2 mb-[10px]">
          
          <Link to={'/'}>Home</Link>
          <FaAngleRight />
          <Link to={Contact}>Contact Us</Link>

        </div>
      </div>
      </div>
      
      <div className="bg-stone-100 w-full py-12">
      <div className="container mx-auto px-[1%] lg:px-[100px]">
        <div className="md:flex gap-4 px-4">
          <div className="w-full lg:w-1/2 ">
            <h1 className="text-5xl font-bold text-blue-800">Let's build an awesome project together</h1>
            <p className="text-[17px] text-slate-600 pt-8 pb-5 leading-[1.8]">Each demo built with Teba will look different. You can customize almost anything in the appearance of your website with only a few clicks. Each demo built with Teba will look different.

            </p>


            <div className="flex  ">
              <div className="w-full sm:w-1/2">
                <div className="bg-blue-800 rounded-md p-3 h-14 w-14 flex items-center justify-center">
                  <TiLocation className="size-7 text-white" />

                </div>
                <h5 className="text-blue-900 font-semibold text-2xl py-3">Address</h5>
                <p className="text-slate-500">1791 Yorkshire Circle Kitty <br/> Hawk, NC 279499</p>
              </div>

              <div className="w-full lg:w-1/2 ">
          <div className="bg-blue-800 rounded-md p-3 h-14 w-14 flex items-center justify-center">
                  <RiMailFill className="size-6 text-white" />

            </div>
            <h5 className="text-blue-900 font-semibold text-2xl py-3">Contact</h5>
                <Link to="mailto: demu@gmail.com" className="text-slate-500">demu@gmail.com</Link> <br></br>
                <Link to="tel:017*******" className="text-slate-500">017******</Link>
              
              
          </div>
            </div>
            <div className="h-px w-full bg-black/20 mt-7"></div>
            <p className="pt-5 text-slate-500">Office Hours: Mon – Sat: 8:00 AM – 10:00 PM</p>
          </div>
          
            <div className=" pt-5 md:pt-0"><MContact/></div>
          

        </div>
      </div>
      
    </div>
      
    </div>
  );
};

export default Contact;