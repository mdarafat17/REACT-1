import React, { useEffect, useState } from 'react';
import './Services.css'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AwesomeServices = () => {

  //amara caile aivabe locali data fethc korte pari
  const [ServicesData, setServicesData] = useState();

  useEffect(() => {
    fetch("/ServicesData.json")
      .then(res => res.json())
      .then(data => setServicesData(data))
  }, []);
  // console.log(ServicesData);
  

  return (
    <div className='w-full py-12'>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {
      
          ServicesData?.map((data, i) => (
            <div key={i} className="w-full flex gap-5 items-stretch bg-white px-8 py-8 rounded-lg">
              <div className="w-20 h-20 rounded-lg bg-[#eef1ff] flex justify-center items-center hover:bg-[#2b4dff] icon-box-service flex-shrink-0"> 

                <img  src={data?.icon} alt="" />
              
               
              </div>
          <div className="w-auto flex-grow">
  <h1 className="text-lg font-semibold text-blue-900 pb-1">{data?.title}</h1>
  <p className="pb-3">{data?.desc}</p>
  <Link
    className="flex gap-3 items-center font-bold text-blue-500"
    to={`/service-details/${data?.id}`}
  >
    Learn More<FaArrowRight />
  </Link>
</div>


              
            </div>
          ))
        }
      </div>
      
    </div>
  );
};

export default AwesomeServices;