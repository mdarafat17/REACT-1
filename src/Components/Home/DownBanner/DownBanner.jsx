

const DownBanner = () => {
  return (
    <div className="w-auto  pt-[100px] bg-[url('/public/assets/down-cover.png')] bg-cover  sm:pt-[150px]  pb-[100px] md:-pl-[10px] pl-[0px]  items-center  ">
      
      <div className="text-center -pt-[20px] ">
        <h1 className=" text-6xl text-white font-bold  pb-[25px] 	">Let’s work together
        </h1>
        <p className="text-white  ">Each demo built with Teba will look different. You can customize anything <br/> appearance of your website with only a few clicks
        </p>
      </div>
      <div className=" flex justify-center mt-[25px] pb-[30px] ">
        <button className='btn btn-animation w-[150px] py-8 lg:w-[200px] bg-[var(--primary)] text-white text-lg border-0 outline-none hover:bg-[var(--primary)]'>
                      <p className='animation-top2 w-[140px] lg:w-[200px] text-center'>Let’s Start a Project</p>
                      <p className='animation-bottom2 w-[140px] lg:w-[200px] text-center'>Let’s Start a Project</p>
            </button>
      </div>
      
    </div>
  );
};

export default DownBanner;