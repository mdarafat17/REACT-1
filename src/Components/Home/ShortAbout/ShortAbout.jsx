import Section2 from "./Section2/Section2";

const ShortAbout = () => {

  {/*jehetu sob ak rokomer ache tai sotkhate aivabe korte pari*/}
  const shortAboutHead = [
  
  
    {
      id: 1,
      title: "Highly Expert Team",
      content: "We provide the most responsive and functional IT design",
      icon: "/assets/time.svg"
    },
  
    {
      id: 2,
      title: "24/7 Customer Service",
      content: "We provide the most responsive and functional IT design",
      icon: "/assets/contact.svg"
    },
  
    {
      id: 3,
      title: "Competitive Pricing",
      content: "We provide the most responsive and functional IT design",
      icon: "/assets/mony.svg"
    }
  ]
  return (
    <div className="bg-stone-100 py-[50px]">
      <div className="container mx-auto px-[2%] lg:px-[100px]">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        {
          shortAboutHead?.map((data, i) => (
            <div key={i} className="w-full lg:w-1/3 ">
              <div className="flex  items-center border-b-2 pb-5 pt-5 lg:pt-0 lg:pb-20">
               
                <div className="icon bg-blue-300/20 rounded-lg w-[85px] h-[85px] flex items-center justify-center">
                  <img src={data.icon} alt="" />
                </div>
                <div className=" px-4 w-auto lg:w-[250px] 2xl:w-[300px]">
                  <h3 className="text-lg font-semibold text-blue-950 tracking-wider">{ data.title }</h3>
                  <p className="text-black/60">{ data.content}</p>
                </div>
              </div>
        </div>
          ))
        }
        </div>
        <Section2 />
      </div>
    </div>
  );
};

export default ShortAbout;