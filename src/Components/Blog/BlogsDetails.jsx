import React from 'react';
import { FaAngleRight, FaBookmark, FaCalendar, FaCommentAlt } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const BlogsDetails = () => {

  
    // titel er name change korar jonno 
    React.useEffect(() => {
      window.scrollTo(0, 0);
      document.title = "Blog Details"
    }, [])
  
  const location = useLocation();
  const pathName = location.pathname;
  const dataId = pathName.split("/blog-details/")[1]

  const [blogsData, setBlogsData] = React.useState();

  React.useEffect(() => {
    fetch("/blogsData.json")
      .then(res => res.json())
      .then(data => setBlogsData(data))
  }, []);

  const currentData = blogsData ? blogsData?.find(data => data.id == dataId) : null;
    
  
  
  return (
    <div>
       <div className=" w-auto  pt-[100px] bg-[url('/public/assets/aboutUs.png')] bg-cover  sm:pt-[150px] lg:pt-[230px] pb-[100px] md:-pl-[10px] pl-[0px]   ">
    

      

      <div className="text-center">
          <h1 className="text-5xl lg:text-8xl  text-white font-bold mt-[30px] 	">{currentData?.title }</h1>
        <div className=" flex items-center justify-center text-white pt-[20px] text-lg gap-2 mb-[10px]">
          
          <Link to={'/'}>Home</Link>
          <FaAngleRight />
            <Link to={BlogsDetails}>Blog</Link>
            <FaAngleRight />
            <Link>{currentData?.title }</Link>

        </div>
      </div>
      </div>
      
      <div className="container mx-auto px-[1%] lg:px-24 py-12">
        <div className="w-full grid grid-cols-1 md:grid-cols-3">
          <div className="w-full md:col-span-2">
            <img src={currentData?.img} alt="" />

            <div className="flex pt-5 gap-3 pb-5 border-b">
              <div className="flex gap-2 items-center">
                <FaCalendar className='size-4 text-blue-600' />
                <p>{ currentData?.date}</p>

              </div>

              <div className="flex gap-2 items-center">
                <FaBookmark className='size-4 text-blue-600' />
                <p>{ currentData?.category}</p>

              </div>


              <div className="flex gap-2 items-center">
                <FaCommentAlt className='size-4 text-blue-600' />
                <p>{ currentData?.comments?.length}Comment</p>

              </div>
            </div>
          </div>
          </div></div>
      
    </div>
  );
};

export default BlogsDetails;