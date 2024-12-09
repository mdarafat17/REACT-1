import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Blogs = () => {
  // titel er name change korar jonno 
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Blogs"
  }, [])
  
  const [blogsData, setblogsData] = React.useState();
  React.useEffect(() => {

    fetch("/blogsData.json")
      .then(res => res.json())
      .then(data => setblogsData(data))
    
  },[])

// ata onekta post er carosol set koar moto 
  const [currentData, setCurrentData] = React.useState(1);
  const dividedData = 2;
  // ai 2 er mane hocche ami akta page a koyta kore data dekhate caichi . 
  const lastIndex = currentData * dividedData;
  const firstIndex = lastIndex - dividedData;
  const currentIndex = blogsData?.slice(firstIndex, lastIndex);
  console.log(currentIndex);
  
  return (
    <div>
      <div className=" w-auto  pt-[100px] bg-[url('/public/assets/aboutUs.png')] bg-cover  sm:pt-[150px] lg:pt-[230px] pb-[100px] md:-pl-[10px] pl-[0px]   ">
    

      

      <div className="text-center">
        <h1 className="text-6xl lg:text-8xl  text-white font-bold mt-[30px] 	">Blogs</h1>
        <div className=" flex items-center justify-center text-white pt-[20px] text-lg gap-2 mb-[10px]">
          
          <Link to={'/'}>Home</Link>
          <FaAngleRight />
          <Link to={Blogs}>Blogs</Link>

        </div>
      </div>
    </div>
      <div className="container mx-auto px-[1%] lg:px-24 py-12">
        <div className="w-full grid grid-cols-1 md:grid-cols-3">
          <div className="w-full md:col-span-2">
            {
              // currentIndex aita oi carosol er jonno dilam 
              currentIndex && currentIndex?.map((blog, i) => (
                <div key={i} className="rounded-lg overflow-hidden my-5 hover:shadow-lg border">
                  <div className="w-full h-[400px] overflow-hidden">
                    <img className='w-full h-full object-cover hover:scale-110 transition-all duration-300' src={blog?.img} alt="" />
                  </div>
                  <div className="w-full p-5">
                    <div className="flex gap-2 items-center">
                      <p>{blog?.category}</p>
                      •
                      <p>{ blog?.date}</p>
                    </div>
                    <h2 className='py-3 text-4xl font-semibold text-blue-900'>{blog?.title}</h2>
                    <p>Each demo built with Teba will look different. You can customize almost anything in appearance of your website with only a few clicks. Each demo built with Teba will look different.</p>
                    <Link to={`/blog-details/${blog.id}`} className='block py-3 text-blue-700 flex items-center gap-3'> Learn more <FaArrowRightLong /></Link>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="w-full md:col-span-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;