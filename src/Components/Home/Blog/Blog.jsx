import { FaArrowRight, FaLinkedinIn } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";


const Blog = () => {

   const BlogData = [
   {
        id:1,
      img: "/assets/blog1.webp",
      department:"Technology",
      date:"26 June 2023",
      title:"Planning your online business goals with a specialist",
  },

      {
        id:2,
      img:"/assets/blog2.webp",
      department: "Technology",
      date:"26 June 2023",
      title:"Planning your online business goals with a specialist",
      },
      {
        id:3,
      img:"/assets/blog3.webp",
      department: "Technology",
      date:"26 June 2023",
      title:"Planning your online business goals with a specialist",
     },
      
    
  ]

  return (
    <div className="py-[50px]">
      <div className=" flex items-center justify-between px-[100px]">
          <h1 className="text-4xl md:text-5xl  pb-12 w-1/2 font-semibold text-blue-950 ">
      
          Recent blog & articles about technology

        </h1>
        <button className='btn btn-animation w-[150px] py-8 lg:w-[200px] bg-[var(--primary)] text-white text-lg border-0 outline-none hover:bg-[var(--primary)]'>
                      <p className='animation-top2 w-[140px] lg:w-[200px] text-center'>View All Posts</p>
                      <p className='animation-bottom2 w-[140px] lg:w-[200px] text-center'>View All Posts</p>
            </button>
          
    </div>
  <div className="container mx-auto px-[1%] lg:px-[100px]">
        

    {/* Adjusting the number of columns and gap for different screen sizes */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-6 xl:gap-8">
      {BlogData?.map((blog, i) => (
        <div
          key={i}
          className="w-full sm:w-[300px] xl:w-auto bg-white rounded-lg overflow-hidden relative team-card border-2"
        >
          <div className="overflow-hidden relative">
            <img
              className="w-full object-cover h-[300px] hover:scale-110 scale-100 transition-all duration-120"
              src={blog?.img}
              alt=""
            />
          </div>

          <div className="bg-white text-lg w-full py-5 px-7 flex gap-2 items-center p-5">
            <p className="text-slate-500">{blog?.department}</p> <GoDotFill />
            <p className="pt-1 text-slate-500">{blog?.date}</p>
          </div>

          <h1 className="pt-1 text-xl text-blue-900 font-bold tracking-wide px-7 pb-[25px]">
            {blog?.title}
          </h1>

          <Link className="flex gap-2 items-center blockpt-5 text-blue-600 font-semibold slider-learn px-7 pb-7" to={'/'}><FaArrowRight className="withHover"  />Learn More <FaArrowRight className="size-[18px] withoutHover"/></Link>

          <div className="flex flex-col gap-3 absolute social-icons transition-all duration-300"></div>
        </div>
        
      ))}
    </div>
  </div>
</div>





  );
};

export default Blog;
