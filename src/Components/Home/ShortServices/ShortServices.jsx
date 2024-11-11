import MultiItemsSlider from "../../../shared/Sliders/MultiItemsSlider";
import { servicesData } from "../../../util/webData";

const ShortServices = () => {
  return (
    <div className="bg-stone-300 py-[200px]">
      <div className="container mx-auto px-[2%] lg:px-[100px] ">
        <div className="head">
          <div className="text-4xl md:text-6xl text-center pb-5 xl:w-1/2 mx-auto font-semibold text-blue-950">
            Our awesome services to give you success


          </div>

        </div>
      </div>
      <MultiItemsSlider sliderData={servicesData} />
      
    </div>
  );
};

export default ShortServices;