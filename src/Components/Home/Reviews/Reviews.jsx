import DobleSlider from "../../../shared/Sliders/DobleSlider";
import { reviewsData } from "../../../util/webData";


const Reviews = () => {

  
  return (
    <div className="w-full bg-stone-100 py-[100px]">
      <div className="container mx-auto px-[1%] lg:px-[100px]">
        <h1 className="text-5xl font-bold text-blue-800 pb-3 text-center">Don’t take our word, see <br /> what our customers say</h1>
        
        <div className="w-full overflow-hidden">
          <DobleSlider data={ reviewsData } />
        </div>
      </div>
    </div>
  );
};

export default Reviews;