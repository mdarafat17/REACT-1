import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./MultiSlider.css";

const MultiItemsSlider = (props) => {
  const { sliderData } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
         
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          
        }
      }
    ]

  };

  return (
    <div className="w-full 2xl:container  pb-5">
      <Slider {...settings}>
        {sliderData?.length > 0 &&
          sliderData?.map((data, i) => (
            <div className="px-5 h-fit slider-card" key={i}>
              <div className="bg-white shadow rounded-2xl p-4 h-full">
                <div className="w-[80px] h-[80px] flex rounded-md bg-blue-200/50 justify-center items-center slider-icon ">
                  <img src={data?.icon} alt="Icon description" />
                </div>
                <h3 className="text-xl font-semibold text-blue-950 pt-7">{data?.title}</h3>
                <p className="text-black/60 pt-4">{data?.content.goal?.substring(1, 80)}..</p>
                
                <Link className="flex gap-2 items-center blockpt-5 text-blue-600 font-semibold slider-learn" to={`service/${data?.id}`}><FaArrowRight className="withHover"  />Learn More <FaArrowRight className="size-[18px] withoutHover"/></Link>

              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default MultiItemsSlider;
