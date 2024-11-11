import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Pagination } from 'swiper/modules';
import Slider from 'react-slick';
import './DoblesSlider.css'

const DobleSlider = ({data}) => {
  return (
    <div className='w-full'>
       <Swiper
        slidesPerView={1}
        grid={{
          rows: 1,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}

        breakpoints={{
          
          
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        modules={[Grid, Pagination]}
        className="doblesSlider"
      >
        {
          data?.map((slide, i) => (
            <SwiperSlide key={i} >
              <div className='bg-white p-12 m-2 rounded-xl shadow flex'>
                <img className='w-14 h-14' src="https://optech-next.vercel.app/assets/images/v1/quote.svg" alt="" />
                <div className="ps-5">
                  <p className='text-lg leading-8 tracking-wider '>"{slide?.comment}"</p>
                  {/*rating er jonno ata dinamic*/}

                  <div className="py-3">
                    <div className="rating">
  
                      {
                        [...Array(Number(slide?.rating))].map((star,i) =>(
                          <input key={i} type="radio" name="rating-1" className="mask mask-star bg-amber-400" />
                        ))
                      }
 
                    </div>
                  </div>
                  <h3 className='text-lg text-blue-900 font-semibold'>{ slide?.name }</h3>
                  <p className='textarea-md text-slate-400'>{  slide?.designation}</p>
                </div>

              </div>
            </SwiperSlide> 
          ))
        }
      </Swiper>
      
    </div>
  );
};

export default DobleSlider;