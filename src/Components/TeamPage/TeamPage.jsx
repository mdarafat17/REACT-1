import { data } from 'autoprefixer';
import React from 'react';
import './TeamPage.css'
import { Link } from 'react-router-dom';
import { FaAngleRight, FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const TeamPage = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Team"
  }, [])
  const [teamsData, setTeamsData] = React.useState();
  React.useEffect(() => {
  fetch("/teamsData.json")
  .then(res => res.json())
  .then(data => setTeamsData(data))
  })
  return (
    <div>
       <div className=" w-auto  pt-[100px] bg-[url('/public/assets/aboutUs.png')] bg-cover  sm:pt-[150px] lg:pt-[230px] pb-[100px] md:-pl-[10px] pl-[0px]   ">
    

      

      <div className="text-center">
        <h1 className="text-6xl lg:text-8xl  text-white font-bold mt-[30px] 	">Team</h1>
        <div className=" flex items-center justify-center text-white pt-[20px] text-lg gap-2 mb-[10px]">
          
          <Link to={'/'}>Home</Link>
          <FaAngleRight />
          <Link to={''}>Services</Link>

        </div>
        </div>



        
      </div>

      <div className="flex flex-wrap gap-4 justify-center py-[100px] bg-[#fdfdfd]">
          {
            teamsData?.map((team, i) => (
              <div key={i} className="w-full sm:w-[300px] bg-white rounded-xl overflow-hidden relative team-card border hover:shadow-lg hover:border-transparent transition-all duration-300">
                
                <div className="overflow-hidden relative"><img className="w-full object-cover h-[300px] hover:scale-110 scale-100 transition-all duration-300 " src={team?.photo} alt="" />
                </div>

                <div className="bg-white w-full py-5 px-3">
                  <Link to={`/team-details/${team?.username}`} className="text-xl text-blue-800 font-bold tracking-wide">{team?.name}</Link>
                  <p className="pt-1 text-slate-500">{team?.designation}</p>
                </div>

                <div className="flex flex-col gap-3 absolute social-icons transition-all duration-300 ">

                  {
                    team?.social?.linkdin && <Link className="bg-white hover:bg-blue-900 transition-all duration-300 rounded-md size-[50px] flex justify-center items-center" to={team?.social?.linkdin}>
                    <FaLinkedinIn className="size-[20px] socil-icons text-blue-900" />
                  </Link>
                  }
                  {
                    team?.social?.x && <Link className="bg-white hover:bg-blue-900 transition-all duration-300 rounded-md size-[50px] flex justify-center items-center" to={team?.social?.x}>
                    <FaXTwitter className="size-[20px] socil-icons text-blue-900" />
                  </Link>
                  }
                  {
                    team?.social?.instagram && <Link className="bg-white hover:bg-blue-900 transition-all duration-300 rounded-md size-[50px] flex justify-center items-center" to={team?.social?.instagram}>
                    <FaInstagram className="size-[20px] socil-icons text-blue-900" />
                  </Link>
                  }
                  {
                    team?.social?.facebook && <Link className="bg-white hover:bg-blue-900 transition-all duration-300 rounded-md size-[50px] flex justify-center items-center" to={team?.social?.facebook}>
                    <FaFacebook className="size-[20px] socil-icons text-blue-900" />
                  </Link>
                  }
 
                  
                  

                  
                </div>

                

                

              </div>
              
            ))
          }
      </div>
      <div className="">
        <div className="w-auto  pt-[100px] bg-[url('/public/assets/down-cover-2.png')] bg-cover  sm:pt-[150px]  pb-[100px] md:-pl-[10px] pl-[0px]  items-center  ">
      
      <div className="text-center -pt-[20px] ">
        <h1 className=" text-6xl text-white font-bold  pb-[25px] 	">Let’s work together
        </h1>
        <p className="text-white  ">Each demo built with Teba will look different. You can customize anything <br/> appearance of your website with only a few clicks
        </p>
      </div>
      <div className=" flex justify-center mt-[25px] pb-[30px] ">
        <button className='btn btn-animation w-[150px] py-8 lg:w-[200px] bg-white text-blue-900 text-lg border-0 outline-none hover:bg-white'>
                      <p className='animation-top2 w-[140px] lg:w-[200px] text-center'>Let’s Start a Project</p>
                      <p className='animation-bottom2 w-[140px] lg:w-[200px] text-center'>Let’s Start a Project</p>
            </button>
      </div>
      
    </div>
      </div>
      

     
      
    </div>
  );
};

export default TeamPage;