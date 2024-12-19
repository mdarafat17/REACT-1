import React, { useState, useEffect } from "react";
import { FaAngleRight, FaBookmark, FaCalendar, FaCommentAlt, FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import parse from 'html-react-parser';
import { FaXTwitter } from "react-icons/fa6";
import { SlEarphonesAlt } from "react-icons/sl";
import './Portfolio.css';



const PortfolioDetails = () => {
  // Update title and scroll to top
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Portfolio Details"
  }, [])

  const location = useLocation();
  const pathName = location.pathname;
  const dataId = pathName.split("/portfoliyo-details/")[1];

  const [portfoliyosData, setPortfoliyoData] = useState();

  // Fetch data from JSON file
  useEffect(() => {
    fetch("/Portfoliyo.json")
      .then(res => res.json())
      .then(data => setPortfoliyoData(data));
  }, []);
  console.log(portfoliyosData);
  

  // Find current data based on the URL parameter
  const currentData = portfoliyosData ? portfoliyosData.find(data => data.id == dataId) : null;

  

  return (
    <div>
      <div className="w-auto pt-[100px] bg-[url('/public/assets/aboutUs.png')] bg-cover sm:pt-[150px] lg:pt-[230px] pb-[100px] md:-pl-[10px] pl-[0px]">
        <div className="text-center">
          <h1 className="text-5xl lg:text-8xl text-white font-bold mt-[30px]">{currentData?.name}</h1>
          <div className="flex items-center justify-center text-white pt-[20px] text-lg gap-2 mb-[10px]">
            <Link to="/">Home</Link>
            <FaAngleRight />
            <Link to="/portfolio">Blog</Link>
            <FaAngleRight />
            <Link>{currentData?.name}</Link>
          </div>
        </div>
      </div>




      <div className="container mx-auto px-[1%] lg:px-24 py-12 ">
        <img src={currentData?.photo0} alt="Portfolio" className="w-full h-auto" />

        <div className="w-full grid grid-cols-1 md:grid-cols-3 sm:px-2 md:px-3 xl:px-0">
          <div className="w-full md:col-span-2">
            {/* Display photo1 */}
            


            {/* <div className="w-full">
              {parse(`${currentData?.content}`)} 
            </div> */}
            {/* Overview, Project, Features, Final content */}
            <div className="pt-5 text-blue-900">
              <h2 className="text-2xl font-semibold">Project overview</h2>
              <p className="text-[#585b82]">{currentData?.discription?.overview}</p>
            </div>

            <div className="pt-5 text-blue-900">
              <h2 className="text-2xl font-semibold">Project</h2>
              <p className="text-[#585b82]">{currentData?.discription?.project}</p>
            </div>

            {/* Display photo2 */}
            {/* {currentData?.photo2 && (
              <div className="pt-5">
                <img src={currentData?.discription?.photo2} alt="Project Image" className="w-full h-auto" />
              </div>
            )} */}

            <div className="pt-5 flex h-[200px] md:h-[450px] w-[200px] md:w-[450px]  gap-4 ">
              <img className="rounded-lg" src={currentData?.discription?.photo1} alt="" />
              <img className="rounded-lg" src={currentData?.discription?.photo2} alt="" />
            </div>

            <div className="pt-5 text-blue-900">
              <h2 className="text-2xl font-semibold">Last</h2>
              <p className="text-[#585b82]">{currentData?.discription?.last}</p>
            </div>

            <div className="pt-5 text-blue-900">
              <h2 className="text-2xl font-semibold">Features</h2>
              <p className="text-[#585b82]">{currentData?.discription?.Feature}</p>
            </div>

            <div className="pt-5 text-blue-900">
              <h2 className="text-2xl font-semibold">Final Thoughts</h2>
              <p className="text-[#585b82]">{currentData?.discription?.Final}</p>
            </div>

            
          </div>
{/* Right sidebar or additional content */}
          <div className="w-full px-[1%] lg:px-5 md:col-span-1 mt-5 move-to-bottom add-padding   " >


        <div className="">    <div className=" bg-slate-200 px-5 py-7 rounded-lg ">
              <h1 className="text-blue-900 font-semibold text-[25px] pb-5 ">Project Details</h1>

              <div className=" flex gap-28 ">
                <div className="">
                  <div className=" flex ">
                <p className="text-blue-900 font-semibold pb-5"> Client: </p>
                
              </div>

              <div className=" flex gap-10">
                <p className="text-blue-900 font-semibold pb-5"> Category: </p>
                
              </div>

              <div className=" flex gap-10">
                <p className="text-blue-900 font-semibold pb-5"> Date: </p>
                
              </div>

              <div className=" flex gap-10">
                <p className="text-blue-900 font-semibold pb-5"> Website: </p>
                
                  </div>
                </div>
                

                <div className="">
                  <p className="text-[#6B6E80] pb-5"> Porter Victoria </p>
                  <div className="">
                    <p className="text-[#6B6E80] pb-5"> Web Development </p>
                  </div>

                  <div className="">
                    <p className="text-[#6B6E80] pb-5"> 20 january 2023 </p>
                  </div>
                  
                  <div className="">
                    <Link className="text-blue-600 pb-5"> example.com </Link>
                  </div>

                </div>
              </div>

              {/* Social  */}

            <div className="flex flex-row gap-3  transition-all duration-300 mt-5 ">
                <div className="bg-blue-900 hover:bg-blue-600 transition-all duration-300 rounded-md size-[50px] flex justify-center items-center"><FaFacebook className="size-[20px] socil-icons text-white" /></div>
                
                <div className="bg-blue-900 hover:bg-blue-600 transition-all duration-300 rounded-md size-[50px] flex justify-center items-center"><FaXTwitter className="size-[20px] socil-icons text-white" /></div>
                
                <div className="bg-blue-900 hover:bg-blue-600 transition-all duration-300 rounded-md size-[50px] flex justify-center items-center"><FaInstagram className="size-[20px] socil-icons text-white" /></div>
                
              <div className="bg-blue-900 hover:bg-blue-600 transition-all duration-300 rounded-md size-[50px] flex justify-center items-center"><FaLinkedinIn className="size-[20px] socil-icons text-white" /></div>
</div>
            </div>
            </div>

             <div className=" bg-[url('/public/assets/bg.png')] bg-cover text-center text-white items-center px-[60px] h-[500px] mt-[50px] pt-[70px] rounded-lg">
              
              <div className="text-[50px] text-center pl-[120px] font-semibold pb-[45px]">< SlEarphonesAlt/></div>
              <div className=""><h1 className='font-semibold text-[35px]'>Don't hesitate to contact us</h1>
                <p>At our IT solution company, we are committed to exceptional</p></div>
              
               <div className=" flex justify-center mt-[25px] pb-[30px] ">
        <button className='btn btn-animation w-[150px] py-8 lg:w-[200px] bg-[#2b4dff] text-white text-lg border-0 outline-none hover:bg-[#2b4dff]'>
                      <p className='animation-top2 w-[140px] lg:w-[200px] text-center'>Get in Touch</p>
                      <p className='animation-bottom2 w-[140px] lg:w-[200px] text-center'>Get in Touch</p>
            </button>
      </div>
              



              
            </div>
              
              
            

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetails;
