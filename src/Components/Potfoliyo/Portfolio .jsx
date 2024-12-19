import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './Portfolio.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

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
      
<div className="flex flex-wrap gap-3 justify-center mt-[100px]">
        {currentIndex && currentIndex?.map((portfolio, i) => (
 
          <Link key={i} to={`/portfoliyo-details/${portfolio?.id}`} className={`block overflow-hidden   project-card bg-no-repeat bg-center relative w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] rounded-lg transition-all duration-300`}style={{backgroundImage: `url(${portfolio?.photo})`}}>
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-950 hover:from-blue-700 to-transparent py-5 z-[2]">
               <span className="text-white font-bold text-center block text-2xl">{portfolio?.name}</span>
            <span className="text-white/50 font-semibold text-center block text-md">{portfolio?.designation}</span>
            </div>

            <div className="w-full h-full bg-gradient-to-t  from-blue-700 to-transparent absolute left-0 right-0  flex items-center justify-center project-card-deteils transition-all duration-500">
              <button to={`/portfoliyo-details/${portfolio.id}`} className="w-[60px] h-[60px] bg-white rounded-md flex items-center justify-center"> 
                <MdOutlineArrowOutward className="size-7 text-blue-700 " />
              </button>

            </div>
           </Link>
         

        ))}

       

      </div>
 <div className="py-12 flex items-center justify-center gap-2">
                      <button
                      
                        onClick={() => setCurrentData(currentData - 1)}
                        disabled={currentData == 1}
                        className='bg-[#585b6f86] disabled:bg-[#585b6f] p-5 rounded-lg transition-all duration-300 hover:bg-[#2b4dff] text-black hover:text-white disabled:text-black w-16 h-16'  >
                        <IoIosArrowBack className='size-5  ' />
        
                      </button>
        
                      {
                        Array.from({ length: Math.ceil(portfolioData?.length / dividedData) }, (_, number) => (
                          <button key={number}
                            onClick={() => setCurrentData( number + 1)}
                            className={`p-5 rounded-lg transition-all duration-300 hover:bg-[#2b4dff] text-black hover:text-white  w-16 h-16 ${currentData == (number + 1) ? "bg-[#2b4dff] text-white" : "bg-[#585b6f49]"} `}  >
                        
                            {number + 1}
        
                      
                          </button>
                        ))
                      }
        
                      <button
                       onClick={() => setCurrentData(currentData + 1)}
                       disabled={currentData == Math.ceil(portfolioData?.length / dividedData)}
                        className='bg-[#585b6f86] p-5 rounded-lg transition-all duration-300 hover:bg-[#2b4dff] text-black hover:text-white w-16 h-16  disabled:text-black disabled:bg-[#585b6f]'  >
                        <IoIosArrowForward className='size-5  ' />
        
                      </button>
                    </div>
      <div className="mt-10">
        <div className="w-auto  pt-[100px] bg-[url('/public/assets/down-cover-2.png')] bg-cover  sm:pt-[150px]  pb-[100px] md:-pl-[10px] pl-[0px]  items-center  ">
      
      <div className="text-center -pt-[20px] ">
        <h1 className=" text-6xl text-white font-bold  pb-[25px] 	">Let’s work together
        </h1>
        <p className="text-white  ">Each demo built with Teba will look different. You can customize anything <br/> appearance of your website with only a few clicks
        </p>
          </div>
          

      <div className=" flex justify-center mt-[25px] pb-[30px] ">
        <button className='btn btn-animation w-[150px] py-8 lg:w-[200px] bg-white text-blue-900 text-lg border-0 outline-none hover:bg-white'>
                      <p className='animation-top2 w-[140px] lg:w-[200px] text-center'>Let’s Start a Project</p>
                      <p className='animation-bottom2 w-[140px] lg:w-[200px] text-center'>Let’s Start a Project</p>
            </button>
      </div>
      
   
        </div>

      </div>

    </div>
  );
};


export default Portfolio;