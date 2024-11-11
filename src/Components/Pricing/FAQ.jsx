import Accordion from "../../shared/Accordion/Accordion";
import { accordionData } from "../../util/accordionData";

const FAQ = () => {
  return (
    <div className="bg-stone-100 py-12 my-4 ">
      <div className="container mx-auto px-[1%] lg:px-[100px]">
        <div className="flex justify-center items-center gap-4 flex-col lg:flex-row ">
          <div className="w-full lg:w-1/2">
          
            <h1 className="text-blue-900 font-bold text-5xl">Have any questions?<br /> here some answers</h1>
            <p className="py-5 text-md leading-[1.4] tracking-wider text-slate-600 ">Each demo built with Teba will look different. You can customize almost anything in the appearance of your website with only</p>

             <div className="py-12 md:items-center items-start">
            <button className='btn btn-animation w-[150px] py-8 lg:w-[200px] bg-[var(--primary)] text-white text-lg border-0 outline-none hover:bg-[var(--primary)]'>
                      <p className='animation-top2 w-[140px] lg:w-[200px] text-center'>Ask Any Question</p>
                      <p className='animation-bottom2 w-[140px] lg:w-[200px] text-center'>Ask Any Question</p>
            </button></div>
          </div>
          
          <div className="w-full lg:w-1/2 px-5">
          <Accordion items={accordionData} />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default FAQ;