import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './Portfolio.css';

const Portfolio = () => {
  // titel er name change korar jonno 
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Portfolio"
  }, [])
  
  const [portfolioData, setportfolioData] = React.useState();
  React.useEffect(() => {

    fetch("/Portfoliyo.json")
      .then(res => res.json())
      .then(data => setportfolioData(data))
    
  },[])

// ata onekta post er carosol set koar moto 
  const [currentData, setCurrentData] = React.useState(1);
  const dividedData = 9;
  // ai 2 er mane hocche ami akta page a koyta kore data dekhate caichi . 
  const lastIndex = currentData * dividedData;
  const firstIndex = lastIndex - dividedData;
  const currentIndex = portfolioData?.slice(firstIndex, lastIndex);
  console.log(currentIndex);

  return (
    <div>
      <div className=" w-auto  pt-[100px] bg-[url('/public/assets/aboutUs.png')] bg-cover  sm:pt-[150px] lg:pt-[230px] pb-[100px] md:-pl-[10px] pl-[0px]   ">
    

      

      <div className="text-center">
        <h1 className="text-6xl lg:text-8xl  text-white font-bold mt-[30px] 	">Portfolio</h1>
        <div className=" flex items-center justify-center text-white pt-[20px] text-lg gap-2 mb-[10px]">
          
          <Link to={'/'}>Home</Link>
          <FaAngleRight />
          <Link to={Portfolio}>Portfolio</Link>

        </div>
      </div>
      </div>
      


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0  p-[1%] justify-center">
  {currentIndex && currentIndex?.map((portfolio, i) => (
    <div 
      key={i} 
      className="relative w-[400px] h-[400px] rounded-lg overflow-hidden my-2 hover:shadow-lg border group mx-auto ">

      {/* Background image container */}
      <div className="w-full h-full overflow-hidden">
        <img 
          className='w-full h-full object-cover hover:scale-110 transition-transform duration-300' 
          src={portfolio?.photo} 
          alt="" 
        />
        {/* Gradient overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/50 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        ></div>
      </div>

      {/* Text over image */}
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center text-white z-[5]">
        <h2 className="text-xl font-bold mb-2">{portfolio?.name}</h2>
        <p className="text-md mb-10">{portfolio?.designation}</p>

        {/* Button */}
        <Link to={`/portfoliyo-details/${portfolio.id}`}
          className="w-[60px] h-[60px] bg-white rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-10 group-hover:translate-y-0">
          <MdOutlineArrowOutward className="text-blue-700 size-7" />
        </Link>
      </div>
    </div>
  ))}
</div>





    </div>
  );
};


export default Portfolio;