import React from 'react';
import { GoPlus } from 'react-icons/go';

const Accordion = ({ items }) => {
  const [activeItem, setActiveItem] = React.useState(null);

  const handleClicks = (index) => {
    setActiveItem(
      (prevIndex) => (prevIndex === index ? null : index)
    );
  };

  return (
    <div className='accordion w-full max-w-full m-0'>
      {
        items?.map((item, i) => (
          <div key={i} className={`accordion-items border-y ${i == activeItem ? "active" : ''}`}>
            <div role='button' className="accordion-title font-semibold text-xl capitalize py-6 px-3 cursor-pointer flex justify-between items-center text-blue-900 " onClick={() => handleClicks(i)}>
              <h3>{item?.title}</h3>
              <GoPlus className={`size-7 transition-all duration-300 ${i === activeItem ? "rotate-45" : ""}`} />
            </div>
            <div className="accordion-content px-5 ">
              {
                i === activeItem && <p className=' text-md leading-[1.4] tracking-wider text-slate-600 pb-4'>{item?.content}</p>
              }
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Accordion;
