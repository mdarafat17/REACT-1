import React from 'react';
import { FaAngleRight, FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import MContact from '../../Contact/MContact';
import '../TeamPage.css'

const TeamDetails = () => {
  const location = useLocation();
  const pathName = location.pathname;
  const username = pathName.split("/team-details/")[1]
  

  const [teamData, setTeamData] = React.useState(); 
  React.useEffect(() => {
    fetch("/teamsData.json")
      .then(res => res.json())
      .then(data => setTeamData(data)); 
  }, []);
  // console.log(service);
  
  const TeamDetails = teamData ? teamData?.find(data => data.username == username) : {};


  return (
    <div>
      <div className=" w-auto  pt-[100px] bg-[url('/public/assets/aboutUs.png')] bg-cover  sm:pt-[150px] lg:pt-[230px] pb-[100px] md:-pl-[10px] pl-[0px]   ">
    

      

      <div className="text-center">
        <h1 className="text-6xl lg:text-8xl  text-white font-bold mt-[30px] 	">{TeamDetails?.name}m</h1>
        <div className=" flex items-center justify-center text-white pt-[20px] text-lg gap-2 mb-[10px]">
          
          <Link to={'/'}>Home</Link>
          <FaAngleRight />
          <Link to={'/team'}>Team</Link>
          <FaAngleRight />
          <Link to={''}>{TeamDetails?.name}</Link>

        </div>
        </div>
       



        
      </div>

      <div className="container mx-auto px-[1%] lg:px-[100px]">
         <div className="flex flex-col md:flex-row gap-5 justify-center py-24">
          <div className="w-full md:w-1/2 ">
          <img src={TeamDetails?.photo} className='w-[90%] mx-auto rounded-3xl' alt="" />
          </div>
          <div className="w-full md:w-1/2 ">
            <h1 className='text-5xl font-semibold text-blue-900'>{TeamDetails?.name}</h1>

            <h3 className='text-3xl text-blue-500 font-semibold py-5'>{TeamDetails?.designation}</h3>
            <p className=''>{TeamDetails?.discription}</p>

            <div className="flex gap-2 items-center py-5">
              <MdLocalPhone className='size-5' />
              <Link to={`tel:${TeamDetails?.phone}`}>{ TeamDetails?.phone}</Link>

            </div>
            <div className="flex gap-2 items-center py-5">
              <MdEmail className='size-5' />
              <Link to={`mailto:${TeamDetails?.email}`}>{ TeamDetails?.email}</Link>

            </div>

            {/* social */}

            <div className="flex flex-row gap-3  transition-all duration-300 ">

                  {
                    TeamDetails?.social?.linkdin && <Link className="bg-slate-200 hover:bg-blue-900 transition-all duration-300 rounded-md size-[50px] flex justify-center items-center" to={TeamDetails?.social?.linkdin}>
                    <FaLinkedinIn className="size-[20px] socil-icons text-blue-900" />
                  </Link>
                  }
                  {
                    TeamDetails?.social?.x && <Link className="bg-slate-200 hover:bg-blue-900 transition-all duration-300 rounded-md size-[50px] flex justify-center items-center" to={TeamDetails?.social?.x}>
                    <FaXTwitter className="size-[20px] socil-icons text-blue-900" />
                  </Link>
                  }
                  {
                    TeamDetails?.social?.instagram && <Link className="bg-slate-200 hover:bg-blue-900 transition-all duration-300 rounded-md size-[50px] flex justify-center items-center" to={TeamDetails?.social?.instagram}>
                    <FaInstagram className="size-[20px] socil-icons text-blue-900" />
                  </Link>
                  }
                  {
                    TeamDetails?.social?.facebook && <Link className="bg-slate-200 hover:bg-blue-900 transition-all duration-300 rounded-md size-[50px] flex justify-center items-center" to={TeamDetails?.social?.facebook}>
                    <FaFacebook className="size-[20px] socil-icons text-blue-900" />
                  </Link>
                  }
 
                  
                  

                  
            </div>
            <div className="w-full py-5 team-cntact"><MContact /></div>
            
          
          </div>
         </div>
      </div>

      
      
    </div>
  );
};

export default TeamDetails;