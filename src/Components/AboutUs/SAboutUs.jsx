import { LiaHandPointRight } from "react-icons/lia";
import { TiTick } from "react-icons/ti";


const SAboutUs = () => {
  return (
    <div className="container mx-auto px-[1%] lg:px-[100px]">
      <div className="pb-5 pt-20 ">
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="w-full lg:w-1/2">
          <div style={
            {
             backgroundSize: "30%"
            }
          }
            className="px-3 bg-[url('/assets/dot.svg')] bg-no-repeat bg-right-top ">
            <img className="w-10/12 xl:w-9/12" src="https://optech-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fv2%2Fthumb1.png&w=1920&q=75" alt="" />
            <img className="w-3/5 xl:w-1/2 ms-auto -mt-[150px] xl:-mt-[250px]" src="https://optech-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fv2%2Fthumb2.png&w=384&q=75" alt="" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-5 pt-7 lg:pt-0 text-center lg:text-start">
          <h1 className="text-3xl xl:text-4xl 2xl:text-5xl leading-[1] text-blue-950 font-semibold pb-2 xl:pb-4">Exclusive technology to provide IT solutions</h1>

          
          <p className=" text-black/60 text-md xl:text-lg 2xl:text-xl py-3">Each demo built with Teba will look different. You can customize almost anything in the appearance of your website with only a few clicks. Each demo built with Teba will look different.</p>

          <div className="text-text-blue-950 font-bold">
  <div className="flex gap-1 text-left lg:gap-3 mt-3 text-md xl:text-lg 2xl:text-2xl font-bold">
    <LiaHandPointRight className="w-[50px] lg:w-5" />
    <h4>Easily Build Custom Reports And Dashboards</h4>
  </div>
  <div className="flex gap-1 text-left lg:gap-3 mt-3 text-md xl:text-lg 2xl:text-2xl font-bold">
    <LiaHandPointRight className="w-[50px] lg:w-5" />
    <h4>Legacy Software Modernization</h4>
  </div>
  <div className="flex gap-1 text-left lg:gap-3 mt-3 text-md xl:text-lg 2xl:text-2xl font-bold mb-5">
    <LiaHandPointRight className="w-[50px] lg:w-5" />
    <h4>Software For The Open Enterprise</h4>
  </div>
</div>

          

          <div className="py-4 md:items-center items-start">
            <button className='btn btn-animation w-[150px] py-8 lg:w-[200px] bg-[var(--primary)] text-white text-lg border-0 outline-none hover:bg-[var(--primary)]'>
                      <p className='animation-top2 w-[140px] lg:w-[200px] text-center'>More About Us</p>
                      <p className='animation-bottom2 w-[140px] lg:w-[200px] text-center'>More About Us</p>
            </button></div>
        </div>
      </div>
      
    </div>
    </div>
  );
};

export default SAboutUs;