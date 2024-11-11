const Counter = () => {
  const counterData = [
    {
      id: 1,
      title: "Happy Client",
      total: "1800+",
      icon: '/assets/like.svg'
    },
    {
      id: 2,
      title: "Finished Projects",
      total: "1200+",
      icon: '/assets/bag.svg'
    },
    {
      id: 3,
      title: "Skilled Experts",
      total: "200+",
      icon: '/assets/contact2.svg'
    },
    {
      id: 4,
      title: "Clients Satisfaction",
      total: "100%",
      icon: '/assets/icon10.svg'
    },
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto px-[1%] lg:px-[100px]">
        <div className="py-24">
          <div className="flex flex-wrap justify-center items-center lg:gap-0">

            {
              counterData?.map((counter) => (

              
                <div key={counter.id} className="lg:w-1/4 py-3  sm:w-1/2 w-full px-3 xl:px-8 flex items-center max-sm:justify-start justify-center gap-3 ">
                  
                  <div className="p-4 bg-blue-200/50 rounded-lg  ">
                    <img src={counter?.icon} className=" w-10 xl:w-10 h-12 " alt={counter.title} />
                  </div>
                  
                  <div className="w-auto">
                    <h1 className="text-blue-950 max-sm:text-4xl text-xl xl:text-5xl font-semibold">{counter?.total}</h1>

                    <p className="pt-2 text-black/60 capitalize">{counter?.title}</p>
                </div>
                
              </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
