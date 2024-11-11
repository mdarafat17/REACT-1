const Section2 = () => {
  return (
    <div className="pb-5 pt-20 ">
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="w-full lg:w-1/2">
          <div style={
            {
             backgroundSize: "30%"
            }
          }
            className="px-3 bg-[url('/assets/dot.svg')] bg-no-repeat bg-right-top ">
            <img className="w-10/12 xl:w-9/12" src="/assets/secend.png" alt="" />
            <img className="w-3/5 xl:w-1/2 ms-auto -mt-[150px] xl:-mt-[250px]" src="/assets/grup-2.webp" alt="" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-5 pt-7 lg:pt-0 text-center lg:text-start">
          <h1 className="text-3xl xl:text-4xl 2xl:text-5xl leading-[1] text-blue-950 font-semibold pb-2 xl:pb-4">More than 25+ years we provide IT solutions</h1>

          <h3 className="text-lg xl:text-xl 2xl:text-2xl text-blue-950 font-semibold py-2 xl:py-3">During this time, we've built a reputation for excellent clients satisfaction as evidenced by our</h3>
          
          <p className=" text-black/60 text-md xl:text-lg 2xl:text-xl py-3">Each demo built with Teba will look different. You can customize almost anything in the appearance of your website with only a few clicks. Each demo built with Teba will look different.</p>

          <div className="py-4"><button className='btn btn-animation w-[150px] py-8 lg:w-[200px] bg-[var(--primary)] text-white text-lg border-0 outline-none hover:bg-[var(--primary)]'>
                      <p className='animation-top2 w-[140px] lg:w-[200px] text-center'>More About Us</p>
                      <p className='animation-bottom2 w-[140px] lg:w-[200px] text-center'>More About Us</p>
            </button></div>
        </div>
      </div>
      
    </div>
  );
};

export default Section2;