import { list } from "postcss";
import { PricingData } from "../../util/PricingData";
import Pricing from "./Pricing";
import { IoCheckmarkSharp } from "react-icons/io5";

const PricingPlan = () => {
  return (
    <div className="bg-white py-[80px] ">
      <div className="container mx-auto px-[1%] lg:px-[100px]">
        <div className="grid gap-3 justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
            PricingData?.map((Pricing, i) =>
            (
              <div key={i} className={`${Pricing?.classes?.bg} border p-5 w-full rounded-2xl `}>
                <div className="">
                  <h4 className={`${Pricing?.classes?.text} text-2xl `}>{Pricing?.title}</h4>
                  <p className={`${Pricing?.classes?.secondaryText}`}>{Pricing?.subtitle}</p>

                  <h1 className="text-5xl">
                    <b className={`${Pricing?.classes?.text}`}>${Pricing?.price}</b>
                    <sub className="text-lg text-slate-400 "> / {Pricing?.freequency}</sub>
                  </h1>

                  <ul className="py-3">
                    {
                      Pricing?.feature?.map((list, i) => (
                        <li className={`${Pricing?.classes?.text} p-2 flex gap-3`} key={i}><IoCheckmarkSharp className={`${Pricing?.classes?.text} size-5`} />{list}</li>
                      ))
                    }
                  </ul>
                  <button className={`font-semibold hover:bg-blue-900 transition-all duration-300 hover:text-white w-full flex justify-center items-center py-4 rounded-md ${Pricing?.classes?.bgBtn} text-blue-900}`}>
                    Select This Plan
                  </button>

                </div>
              </div>
            ))
          }
        </div>
      </div>
      
    </div>
  );
};

export default PricingPlan;