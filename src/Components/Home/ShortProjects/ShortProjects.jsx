import { Link } from "react-router-dom";
import './ShortProjects.css';
import { MdOutlineArrowOutward } from "react-icons/md";


const ShortProjects = () => {
  return (
    <div className="bg-stone-300 py-[50px]">
      <div className="container mx-auto px-[1%] lg:px-[100px]">
        <h1 className="text-4xl md:text-5xl text-center pb-12 w-1/2 mx-auto font-semibold text-blue-900">Explore our recent projects</h1>

        <div className="flex flex-wrap gap-3 justify-center">
          <Link to={`#`} className="block overflow-hidden bg-[url(https://optechanimation1.netlify.app/assets/images/p1/p1.png)] project-card bg-no-repeat bg-center relative w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] rounded-lg transition-all duration-300">
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-950 hover:from-blue-700 to-transparent py-5 z-[2]">
               <span className="text-white font-bold text-center block text-2xl">Digital Product Design</span>
            <span className="text-white/50 font-semibold text-center block text-md">Design, Graphics</span>
            </div>
            <div className="w-full h-full bg-gradient-to-t  from-blue-700 to-transparent absolute left-0 right-0  flex items-center justify-center project-card-deteils transition-all duration-500">
              <button className="w-[60px] h-[60px] bg-white rounded-md flex items-center justify-center">
                <MdOutlineArrowOutward className="size-7 text-blue-700 " />
              </button>

            </div>
          
            
          </Link>

          <Link to={`#`} className="block overflow-hidden bg-[url(https://optech-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fp1%2Fp2.png&w=1920&q=75)] project-card bg-no-repeat bg-center relative w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] rounded-lg transition-all duration-300">
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-950 hover:from-blue-700 to-transparent py-5 z-[2]">
               <span className="text-white font-bold text-center block text-2xl">
Cyber Security Analysis</span>
            <span className="text-white/50 font-semibold text-center block text-md">Security, Technology</span>
            </div>
            <div className="w-full h-full bg-gradient-to-t  from-blue-700 to-transparent absolute left-0 right-0  flex items-center justify-center project-card-deteils transition-all duration-500">
              <button className="w-[60px] h-[60px] bg-white rounded-md flex items-center justify-center">
                <MdOutlineArrowOutward className="size-7 text-blue-700 " />
              </button>

            </div>
          
            
          </Link>

          <Link to={`#`} className="block overflow-hidden bg-[url(https://optech-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fp1%2Fp3.png&w=1920&q=75)] project-card bg-no-repeat bg-center relative w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] rounded-lg transition-all duration-300">
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-950 hover:from-blue-700 to-transparent py-5 z-[2]">
               <span className="text-white font-bold text-center block text-2xl">
Health App Development</span>
            <span className="text-white/50 font-semibold text-center block text-md">Development, Software</span>
            </div>
            <div className="w-full h-full bg-gradient-to-t  from-blue-700 to-transparent absolute left-0 right-0  flex items-center justify-center project-card-deteils transition-all duration-500">
              <button className="w-[60px] h-[60px] bg-white rounded-md flex items-center justify-center">
                <MdOutlineArrowOutward className="size-7 text-blue-700 " />
              </button>

            </div>
          
            
          </Link>

           <Link to={`#`} className="block overflow-hidden bg-[url(https://optech-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fp1%2Fp4.png&w=1920&q=75)] project-card bg-no-repeat bg-center relative w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] rounded-lg transition-all duration-300">
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-950 hover:from-blue-700 to-transparent py-5 z-[2]">
               <span className="text-white font-bold text-center block text-2xl">
Health App Development</span>
            <span className="text-white/50 font-semibold text-center block text-md">Development, Software</span>
            </div>
            <div className="w-full h-full bg-gradient-to-t  from-blue-700 to-transparent absolute left-0 right-0  flex items-center justify-center project-card-deteils transition-all duration-500">
              <button className="w-[60px] h-[60px] bg-white rounded-md flex items-center justify-center">
                <MdOutlineArrowOutward className="size-7 text-blue-700 " />
              </button>

            </div>
          
            
          </Link>

          <Link to={`#`} className="block overflow-hidden bg-[url(https://optech-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fp1%2Fp5.png&w=1920&q=75)] project-card bg-no-repeat bg-center relative w-[300px] lg:w-[812px] h-[300px] lg:h-[400px] rounded-lg transition-all duration-300">
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-950 hover:from-blue-700 to-transparent py-5 z-[2]">
               <span className="text-white font-bold text-center block text-2xl">
Health App Development</span>
            <span className="text-white/50 font-semibold text-center block text-md">Development, Software</span>
            </div>
            <div className="w-full h-full bg-gradient-to-t  from-blue-700 to-transparent absolute left-0 right-0  flex items-center justify-center project-card-deteils transition-all duration-500">
              <button className="w-[60px] h-[60px] bg-white rounded-md flex items-center justify-center">
                <MdOutlineArrowOutward className="size-7 text-blue-700 " />
              </button>

            </div>
          
            
          </Link>
        </div>
        <div className="flex justify-center items-center">
  <button className='btn btn-animation w-[150px] lg:w-[200px] bg-[var(--primary)] text-white text-lg border-0 outline-none hover:bg-[var(--primary)] my-5'>
    <p className='animation-top w-[140px] lg:w-[200px] text-center'>View Our All Works</p>
    <p className='animation-bottom w-[140px] lg:w-[200px] text-center'>View Our All Works</p>
  </button>
</div>

            



          </div>
    </div>
  );
};

export default ShortProjects;