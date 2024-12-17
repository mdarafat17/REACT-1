import React, { useState, useEffect } from "react";
import { FaAngleRight, FaBookmark, FaCalendar, FaCommentAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import parse from 'html-react-parser';

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

      <div className="container mx-auto px-[1%] lg:px-24 py-12">
        <div className="w-full grid grid-cols-1 md:grid-cols-3">
          <div className="w-full md:col-span-2">
            {/* Display photo1 */}
            <img src={currentData?.photo0} alt="Portfolio" className="w-full h-auto" />


            {/* Overview, Project, Features, Final content */}
            <section className="pt-5">
              <h2 className="text-2xl font-semibold">Overview</h2>
              <p>{currentData?.discription?.overview}</p>
            </section>

            <section className="pt-5">
              <h2 className="text-2xl font-semibold">Project</h2>
              <p>{currentData?.discription?.project}</p>
            </section>

            {/* Display photo2 */}
            {currentData?.photo2 && (
              <div className="pt-5">
                <img src={currentData?.discription?.photo2} alt="Project Image" className="w-full h-auto" />
              </div>
            )}

            <section className="pt-5">
              <h2 className="text-2xl font-semibold">Last</h2>
              <p>{currentData?.discription?.last}</p>
            </section>

            <section className="pt-5">
              <h2 className="text-2xl font-semibold">Features</h2>
              <p>{currentData?.discription?.Feature}</p>
            </section>

            <section className="pt-5">
              <h2 className="text-2xl font-semibold">Final Thoughts</h2>
              <p>{currentData?.discription?.Final}</p>
            </section>

            
          </div>

          <div className="w-full px-[1%] lg:px-5 md:col-span-1">
            {/* Right sidebar or additional content */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetails;
