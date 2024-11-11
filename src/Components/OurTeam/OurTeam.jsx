import { FaAngleRight, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const OurTeam = () => {

  const teamsData = [
    {
      id: 1,
      img: "https://optech-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fteam%2Fteam1.png&w=1920&q=75",
      name: "Sophia Rodriguez",
      designation: "CEO &amp; Founder",
      LInkdin:"#",
      x:"#",
      instagram: "#"
    },

    {
      id: 2,
      img: "https://optech-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fteam%2Fteam2.png&w=1920&q=75",
      name: "Sophia Rodriguez",
      designation: "CEO &amp; Founder",
      LInkdin:"#",
      x:"#",
      instagram: "#"
    },

    {
      id: 3,
      img: "https://optech-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fteam%2Fteam3.png&w=1920&q=75",
      name: "Sophia Rodriguez",
      designation: "CEO &amp; Founder",
      LInkdin:"#",
      x:"#",
      instagram: "#"
    },
    
    {
      id: 4,
      img: "https://optech-next.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fteam%2Fteam4.png&w=1920&q=75",
      name: "Sophia Rodriguez",
      designation: "CEO &amp; Founder",
      LInkdin:"#",
      x:"#",
      instagram: "#"
    },
    {
      id: 5,
      img: "https://optechanimation1.netlify.app/assets/images/team/team5.png",
      name: "Barbara Dundas",
      designation: "CEO &amp; Founder",
      LInkdin:"#",
      x:"#",
      instagram: "#"
    },

    {
      id: 6,
      img: "https://optechanimation1.netlify.app/assets/images/team/team6.png",
      name: "Zachary Collins",
      designation: "CEO &amp; Founder",
      LInkdin:"#",
      x:"#",
      instagram: "#"
    },

    {
      id: 7,
      img: "https://optechanimation1.netlify.app/assets/images/team/team7.png",
      name: "Mona Zaghloul",
      designation: "CEO &amp; Founder",
      LInkdin:"#",
      x:"#",
      instagram: "#"
    },
    
    {
      id: 8,
      img: "https://optechanimation1.netlify.app/assets/images/team/team8.png",
      name: "Kari Rasmussenn",
      designation: "CEO &amp; Founder",
      LInkdin:"#",
      x:"#",
      instagram: "#"
    }
    
  ]

  return (
    <div className="">
      <div className=" w-auto  pt-[100px] bg-[url('/public/assets/aboutUs.png')] bg-cover  sm:pt-[150px] lg:pt-[230px] pb-[100px] md:-pl-[10px] pl-[0px]   ">
    

      

      <div className="text-center">
        <h1 className="text-6xl lg:text-8xl  text-white font-bold mt-[30px] 	">Our Team</h1>
        <div className=" flex items-center justify-center text-white pt-[20px] text-lg gap-2 mb-[10px]">
          
          <Link to={'/'}>Home</Link>
          <FaAngleRight />
          <Link to={OurTeam}>Our Team</Link>

        </div>
      </div>
    </div>
      

      <div className="flex flex-wrap gap-4 justify-center mt-[100px]">
          {
            teamsData?.map((team, i) => (
              <div key={i} className="w-full sm:w-[300px] bg-white rounded-lg overflow-hidden relative team-card">
                
                <div className="overflow-hidden relative"><img className="w-full object-cover h-[300px] hover:scale-110 scale-100 transition-all duration-120 " src={team?.img} alt="" />
                </div>

                <div className="bg-white w-full py-5 px-3">
                  <h4 className="text-xl text-blue-800 font-bold tracking-wide">{team?.name}</h4>
                  <p className="pt-1 text-slate-500">{team?.designation}</p>
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
              
            ))
          }
        </div>
      

    </div>
  );
};

export default OurTeam;