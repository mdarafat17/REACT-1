import React, { useEffect, useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import parse from 'html-react-parser';


const ServiceDetails = () => {
  
  const Location = useLocation();
  const pathName = Location.pathname;
  const pathId = pathName.split("/service-details/")[1]
  // console.log(pathName);
  
  const [service, setService] = useState(); 
  useEffect(() => {
    fetch("/ServicesData.json")
      .then(res => res.json())
      .then(data => setService(data)); 
  }, []);
  // console.log(service);
  
  const ServiceDetails = service ? service?.find(data => data.id == pathId) : {};

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Service Details";
  }, [pathId])
  
  
  return (
    <div className="">
      <div className=" w-auto  pt-[100px] bg-[url('/public/assets/aboutUs.png')] bg-cover  sm:pt-[150px] lg:pt-[230px] pb-[100px] md:-pl-[10px] pl-[0px]   ">
      
        
        <div className='w-full'>
          
      <div className="text-center">
            <h1 className="text-6xl lg:text-8xl  text-white font-bold mt-[30px] 	">
          
              {ServiceDetails?.title} </h1>
        <div className=" flex items-center justify-center text-white pt-[20px] text-lg gap-2 mb-[10px]">
          
          <Link to={'/'}>Home</Link>
          <FaAngleRight />
          <Link to={'/services'}>Services</Link>
          <FaAngleRight />
          <Link to={''}>{ServiceDetails?.title}</Link>

        </div>
        </div>
      
    </div>
      </div>

      <div className="container mx-auto px-[1%]  lg:px-[100px]">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-24">
          <div className="w-full col-span-2">

            <img className='w-full h-auto rounded-3xl' src={ServiceDetails?.bg} alt="" />
            <h3 className='pt-5 text-blue-900 text-xl font-semibold'>Overview</h3>
            <div >
              {
               parse(`${ServiceDetails?.Overview}`)
              }
            </div>

            <h3 className='pt-5 text-blue-900 text-xl font-semibold'>Features</h3>
            <div >
              
              <p>{ServiceDetails?.Features?.content}</p>
              <ul>
                {
                  ServiceDetails?.Features?.Feature?.map((list, i) => (
                    <li key={i} className='py-2 text-lg font-semibold text-blue-900'>⪢{list}</li>
                  ))
              }
              </ul>
              
            </div>

            <h3 className='pt-5 text-blue-900 text-xl font-semibold'>Goal</h3>
            <div >
              {
               parse(`${ServiceDetails?.Goal}`)
              }
            </div>

          </div>
          <div className="w-full col-span-1">
            <div className="w-full">
              {
                service?.map((title, i) => (
                  <Link className='block py-5 px-3 bg-slate-200 my-4 rounded-lg  text-blue-900 font-semibold' key={i} to={`/service-details/${title.id}`}>{title?.title }</Link>
                ))
              }
            </div>

          </div>
        </div>

      </div>
    </div>


    
  );
};

export default ServiceDetails;