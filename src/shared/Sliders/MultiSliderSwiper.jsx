import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
const MultiSliderSwiper = ({data}) => {
  return (
    <div className='w-full'>
      
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}

        className="mySwiper pb-12 mt-12"
      >
          {
          data?.map((dat, i) => (
            <SwiperSlide>
              <div key={i} className="w-full border shadow hover:shadow-xl  hover:border-none sm:w-[300px] bg-white rounded-lg overflow-hidden relative team-card m-4">
                
                <div className="w-full h-[300px] overflow-hidden">
                  <div className="overflow-hidden relative"><img className="w-full object-cover h-[300px] hover:scale-110 scale-100 transition-all duration-120 " src={dat?.photo} alt="" />
                </div>
                </div>

                <div className="bg-white w-full py-5 px-3">
                  <h4 className="text-xl text-blue-800 font-bold tracking-wide">{dat?.name}</h4>
                  <p className="pt-1 text-slate-500">{dat?.designation}</p>
                </div>

                <div className="flex flex-col gap-3 absolute social-icons transition-all duration-300 ">
 
                  <Link className="bg-white hover:bg-blue-900 transition-all duration-300 rounded-md size-[50px] flex justify-center items-center" to="#">
                    <FaLinkedinIn className="size-[20px] socil-icons text-blue-900" />
                  </Link>

                  <Link className="bg-white hover:bg-blue-900 transition-all duration-300 rounded-md size-[50px] flex justify-center items-center" to="#">
                    <FaXTwitter  className="size-[20px] socil-icons text-blue-900" />
                  </Link>

                  <Link className="bg-white hover:bg-blue-900 transition-all duration-300 rounded-md size-[50px] flex justify-center items-center" to="#">
                    <FaInstagram  className="size-[20px] socil-icons text-blue-900" />
                  </Link>
                </div>

                

                

              </div>
             </SwiperSlide>
           ))
          
        }
        
      </Swiper>
    
      
    </div>
  );
};

export default MultiSliderSwiper;