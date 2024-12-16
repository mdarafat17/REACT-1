import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AwesomeServices from './AwesomeServices';
import DownBanner from './DownBanner/DownBanner';



const Services = () => {

  const ourservice = [
    {
      title: "Initiation & Planning",
      content: "We are architects innovation trailblazers of technological advancement",
      img: "/assets/services 1.svg"
    },
    {
      title: "Initiation & Planning",
      content: "We are architects innovation trailblazers of technological advancement",
      img: "/assets/service 2.svg"
    },
    {
      title: "Initiation & Planning",
      content: "We are architects innovation trailblazers of technological advancement",
      img: "/assets/service 3.svg"
    },
  ]


  return (
    <div>
       <div className=" w-auto  pt-[100px] bg-[url('/public/assets/aboutUs.png')] bg-cover  sm:pt-[150px] lg:pt-[230px] pb-[100px] md:-pl-[10px] pl-[0px]   ">
    

      

      <div className="text-center">
        <h1 className="text-6xl lg:text-8xl  text-white font-bold mt-[30px] 	">Services</h1>
        <div className=" flex items-center justify-center text-white pt-[20px] text-lg gap-2 mb-[10px]">
          
          <Link to={'/'}>Home</Link>
          <FaAngleRight />
          <Link to={Services}>Services</Link>

        </div>
        </div>
        
      </div>

      <div className="container mx-auto lg:px-[100px] px-[1%] py-5">
        <h1 className='text-6xl font-bold text-blue-900 text-center mx-auto ; w-[80%] lg:w-[60%] pt-[100px] pb-5'>Our working process on how to grow your business
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-24">
          {
            ourservice?.map((data, i) => (
              <div className="w-full" key={i}>
                <img className='w-[300px] h-[300px] object-contain mx-auto' src={data.img} alt="" />
                <h4 className='text-xl font-semibold text-blue-900 text-center pt-5'> {data.title}</h4>
                <p className='text-center pt-2 pb-3 text-lg text-slate-500'>{ data.content}</p>
              </div>
            ))
          }
        </div>

        
      </div>
      
      <div className="w-full bg-stone-100">
        <div className="container mx-auto px-[1%] lg:px-[100px]">
          <h1 className='text-6xl font-bold text-blue-900 text-center mx-auto ; w-[80%] lg:w-[60%] pt-[100px] pb-5'>Our awesome services to give you success

        </h1>
        <AwesomeServices/>
        </div>
      </div>
      <DownBanner/>
    </div>
  );
};

export default Services;