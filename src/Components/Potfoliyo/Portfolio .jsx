import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Potfoliyo = () => {
  return (
    <div>

      <div className=" w-auto  pt-[100px] bg-[url('/public/assets/aboutUs.png')] bg-cover  sm:pt-[150px] lg:pt-[230px] pb-[100px] md:-pl-[10px] pl-[0px]   ">
    

      

      <div className="text-center">
        <h1 className="text-6xl lg:text-8xl  text-white font-bold mt-[30px] 	">Our Team</h1>
        <div className=" flex items-center justify-center text-white pt-[20px] text-lg gap-2 mb-[10px]">
          
          <Link to={'/'}>Home</Link>
          <FaAngleRight />
          <Link to={Potfoliyo}>Our Team</Link>

        </div>
        </div>
      </div>
      

      <div className="flex flex-wrap gap-3 justify-center">
          <Link to={`#`} className="block overflow-hidden bg-[url(https://optechanimation1.netlify.app/assets/images/p1/p1.png)] project-card bg-no-repeat bg-center relative w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] rounded-lg transition-all duration-300">
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-950 hover:from-blue-700 to-transparent py-5 z-[2]">
               <span className="text-white font-bold text-center block text-2xl">Digital Product Design</span>
            <span className="text-white/50 font-semibold text-center block text-md">Design, Graphics</span>
            </div>
            <div className="w-full h-full bg-gradient-to-t  from-blue-700 to-transparent absolute left-0 right-0  flex items-center justify-center project-card-deteils transition-all duration-500">
              <button className="w-[60px] h-[60px] bg-white rounded-md flex items-center justify-center">
                <MdOutlineArrowOutward className="size-7 text-blue-700 " />
              </button>

            </div>
          
            
          </Link>

          <Link to={`#`} className="block overflow-hidden bg-[url(https://optech-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fp1%2Fp2.png&w=1920&q=75)] project-card bg-no-repeat bg-center relative w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] rounded-lg transition-all duration-300">
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-950 hover:from-blue-700 to-transparent py-5 z-[2]">
               <span className="text-white font-bold text-center block text-2xl"> Cyber Security Analysis</span>
            <span className="text-white/50 font-semibold text-center block text-md">Security, Technology</span>
            </div>
            <div className="w-full h-full bg-gradient-to-t  from-blue-700 to-transparent absolute left-0 right-0  flex items-center justify-center project-card-deteils transition-all duration-500">
              <button className="w-[60px] h-[60px] bg-white rounded-md flex items-center justify-center">
                <MdOutlineArrowOutward className="size-7 text-blue-700 " />
              </button>

            </div>
          
            
          </Link>

          <Link to={`#`} className="block overflow-hidden bg-[url(https://optech-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fp1%2Fp3.png&w=1920&q=75)] project-card bg-no-repeat bg-center relative w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] rounded-lg transition-all duration-300">
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-950 hover:from-blue-700 to-transparent py-5 z-[2]">
               <span className="text-white font-bold text-center block text-2xl"> Health App Development</span>
            <span className="text-white/50 font-semibold text-center block text-md">Development, Software</span>
            </div>
            <div className="w-full h-full bg-gradient-to-t  from-blue-700 to-transparent absolute left-0 right-0  flex items-center justify-center project-card-deteils transition-all duration-500">
              <button className="w-[60px] h-[60px] bg-white rounded-md flex items-center justify-center">
                <MdOutlineArrowOutward className="size-7 text-blue-700 " />
              </button>

            </div>
          
            
          </Link>

           <Link to={`#`} className="block overflow-hidden bg-[url(https://optech-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fp1%2Fp4.png&w=1920&q=75)] project-card bg-no-repeat bg-center relative w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] rounded-lg transition-all duration-300">
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-950 hover:from-blue-700 to-transparent py-5 z-[2]">
               <span className="text-white font-bold text-center block text-2xl"> Health App Development</span>
            <span className="text-white/50 font-semibold text-center block text-md">Development, Software</span>
            </div>
            <div className="w-full h-full bg-gradient-to-t  from-blue-700 to-transparent absolute left-0 right-0  flex items-center justify-center project-card-deteils transition-all duration-500">
              <button className="w-[60px] h-[60px] bg-white rounded-md flex items-center justify-center">
                <MdOutlineArrowOutward className="size-7 text-blue-700 " />
              </button>

            </div>
          
            
          </Link>
           <Link to={`#`} className="block overflow-hidden bg-[url(https://optech-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fp1%2Fp4.png&w=1920&q=75)] project-card bg-no-repeat bg-center relative w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] rounded-lg transition-all duration-300">
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-950 hover:from-blue-700 to-transparent py-5 z-[2]">
               <span className="text-white font-bold text-center block text-2xl"> Health App Development</span>
            <span className="text-white/50 font-semibold text-center block text-md">Development, Software</span>
            </div>
            <div className="w-full h-full bg-gradient-to-t  from-blue-700 to-transparent absolute left-0 right-0  flex items-center justify-center project-card-deteils transition-all duration-500">
              <button className="w-[60px] h-[60px] bg-white rounded-md flex items-center justify-center">
                <MdOutlineArrowOutward className="size-7 text-blue-700 " />
              </button>

            </div>
          
            
          </Link>
           <Link to={`#`} className="block overflow-hidden bg-[url(https://optech-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fp1%2Fp4.png&w=1920&q=75)] project-card bg-no-repeat bg-center relative w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] rounded-lg transition-all duration-300">
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-950 hover:from-blue-700 to-transparent py-5 z-[2]">
               <span className="text-white font-bold text-center block text-2xl"> Health App Development</span>
            <span className="text-white/50 font-semibold text-center block text-md">Development, Software</span>
            </div>
            <div className="w-full h-full bg-gradient-to-t  from-blue-700 to-transparent absolute left-0 right-0  flex items-center justify-center project-card-deteils transition-all duration-500">
              <button className="w-[60px] h-[60px] bg-white rounded-md flex items-center justify-center">
                <MdOutlineArrowOutward className="size-7 text-blue-700 " />
              </button>

            </div>
          
            
          </Link>

         
          
        </div>
 
    </div>
  );
};

export default Potfoliyo;