import React from 'react';
import { Link } from 'react-router-dom';

const BlogPageRight = () => {

  const [blogsData, setblogsData] = React.useState();
  React.useEffect(() => {

    fetch("/blogsData.json")
      .then(res => res.json())
      .then(data => setblogsData(data))
    
  }, [])
  

  return (
    <div>
      <div className="">
        <div className="bg-[#F4F5F6] px-[38px] rounded-lg py-[35px] ">
          <h1 className=' text-blue-900  text-[25px] pb-4 font-semibold'>Search</h1>
          
          <input className='h-[50px] bg-white  border-2 rounded-lg w-full p-5  ' type="text" placeholder='Type to search' />
          
          
      </div>

      </div>

      <div className="bg-[#F4F5F6] px-[38px] rounded-lg mt-[30px] py-[35px]">
        <h1 className='text-blue-900 text-[25px] font-semibold'>Catagories</h1>


        <Link  className="flex justify-between text-blue-900 hover:text-blue-700 pt-3">
          <p>Uncatagorized </p>
         <p>(18)</p>
        </Link>
        <Link  className="flex justify-between text-blue-900 hover:text-blue-700 pt-3">
          <p>Marketing </p>
         <p>(5)</p>
        </Link>
        <Link  className="flex justify-between text-blue-900 hover:text-blue-700 pt-3">
          <p>Business </p>
         <p>(2)</p>
        </Link>
        <Link  className="flex justify-between text-blue-900 hover:text-blue-700 pt-3">
          <p>Technology </p>
         <p>(11)</p>
        </Link>
        <Link  className="flex justify-between text-blue-900 hover:text-blue-700 pt-3">
          <p>Consulting </p>
         <p>(4)</p>
        </Link>
        <Link  className="flex justify-between text-blue-900 hover:text-blue-700 pt-3">
          <p>Cyber Security </p>
         <p>(8)</p>
        </Link>
        

      </div>
      
      <div className="bg-[#F4F5F6] px-[38px] rounded-lg mt-[30px] py-[35px]">
        <h1 className='text-blue-900 text-[25px] font-semibold'>Recen Post</h1>
        <div className="">
          
          {

            blogsData?.map((blog, i) => (

            <div className="flex gap-4 mt-5 ">
                <img className='h-[100px] w-[120px]  rounded-md ' src={blog?.img} alt="" />
                
                <div className="">
                  <p className='font-semibold text-blue-900'>{blog?.title}</p>
                  <p>{ blog?.date}</p></div>
                      
                    </div>))
          }
        </div>
      </div>
      <div className="bg-[#F4F5F6] px-[38px] rounded-lg mt-[30px] py-[35px]">
        <h1 className='text-blue-900 text-[25px] font-semibold pb-5'> Tags</h1>
        <div className=" ">
           
          <button className='bg-white py-2 px-3 rounded-md hover:bg-blue-700 text-blue-900 hover:text-white mr-2 mb-2 '>Business </button>

          <button className='bg-white py-2 px-3 rounded-md hover:bg-blue-700 text-blue-900 hover:text-white mr-2 mb-2 '>Digital </button>

          <button className='bg-white py-2 px-3 rounded-md hover:bg-blue-700 text-blue-900 hover:text-white mr-2 mb-2 '>IT Solution </button>

          <button className='bg-white py-2 px-3 rounded-md hover:bg-blue-700 text-blue-900 hover:text-white mr-2 mb-2 '>Technology </button>

          <button className='bg-white py-2 px-3 rounded-md hover:bg-blue-700 text-blue-900 hover:text-white mr-2 mb-2 '>Cyber Security </button>

          <button className='bg-white py-2 px-3 rounded-md hover:bg-blue-700 text-blue-900 hover:text-white mr-2 mb-2 '>Digital  </button>

          <button className='bg-white py-2 px-3 rounded-md hover:bg-blue-700 text-blue-900 hover:text-white mr-2 mb-2 '>Finance</button>

          <button className='bg-white py-2 px-3 rounded-md hover:bg-blue-700 text-blue-900 hover:text-white'>Software </button>
          
        </div>
      </div>
     
    </div>
  );
};

export default BlogPageRight;