const ShortPortfolio = () => {
  return (
    <div className="bg-stone-100 py-24 ">
      <div className="container mx-auto px-1% lg:px-[100px]">
        <div className="flex flex-col lg:flex-row justify-center items-center">
        
        <div className="w-full lg:w-1/2 px-5 pt-7 lg:pt-0 text-center lg:text-start ">
          <h1 className="text-3xl xl:text-4xl 2xl:text-5xl leading-[1] text-blue-950 font-semibold pb-2 xl:pb-4">Increasing business success with technology</h1>
          
          <p className=" text-black/60 text-md xl:text-lg 2xl:text-xl py-3">Each demo built with Teba will look different. You can customize almost anything in the appearance of your website with only a few clicks. Each demo built with Teba will look different.</p>

            <div className="py-4">
              <div className="pt-5 relative w-full">
                <h4 className="text-blue-950 text-lg font-semibold">IT Solution & Management
</h4>
                
                   
          
            <span className='absolute left-[86%] bottom-0 mb-2 py-2 text-lg text-black'>
              86%
                </span>
                <progress className="progress progress-primary w-full bg-slate-300" value="86" max="100"></progress>
          
        
            </div>

            <div className="pt-5 relative w-full">
                <h4 className="text-blue-950 text-lg font-semibold">Website & App Development
</h4>
                
                   
          
            <span className='absolute left-[72%] bottom-0 mb-2 py-2 text-lg text-black'>
              72%
                </span>
                <progress className="progress progress-primary w-full bg-slate-300" value="72" max="100"></progress>
          
        
            </div>

            <div className="pt-5 relative w-full">
                <h4 className="text-blue-950 text-lg font-semibold">SEO & Digital Marketing</h4>
                
                   
          
            <span className='absolute left-[83%] bottom-0 mb-2 py-2 text-lg text-black'>
              83%
                </span>
                <progress className="progress progress-primary w-full bg-slate-300" value="83" max="100"></progress>
          
        
            </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 px-5">
            
              <img className="w-[80%] ms-auto " src="/assets/thumb3.webp" alt="" />
             
              <img className="w-1/2 -mt-[280px] z-[2]" src="/assets/thumb4.webp" alt="" />
              
          
          
            

        </div>
      </div>
      </div>
      
    </div>
  );
};

export default ShortPortfolio;