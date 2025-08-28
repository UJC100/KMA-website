import { assets } from "../assets/assets";
import JoinTeamCarousel from "../component/join-team/JoinTeamCarousel";
import { demoData } from "../component/demoData";
import YouTubePopup from "../component/join-team/PopupVideo";
import KMAApplicationForm from "../component/join-team/KMAApplicationForm";

const JoinTeam = () => {
 
  return (
    <div className="bg-[#f6f4f0] flex  flex-col w-[100%] xl:flex-row min-h-screen gap-3  p-5 ">
      <YouTubePopup />
       <div className=" xl:w-1/2 ">
        <img src={assets.logo} className="w-30 h-30 m-auto md:m-0" alt="logo" />

       <KMAApplicationForm/>

      </div>
      <div className="bg-[#121820]/90 bg-blend-overlay  bg-[url('/src/assets/blurred-bokeh-light-dark-blue-background_219144-488-2.avif')]  bg-no-repeat bg-cover bg-center   xl:w-1/2  md:rounded-2xl pt-10 md:pt-25 pb-5 px-5 md:px10 text-amber-500 ">
            <div>
              <h1 className="text-xl md:text-4xl mb-4 font-light w-[70%] md:w-2/3">Guidance made easy — connect, learn, succeed</h1>
              <p className="text-[10px] md:text-sm  font-light">Enter your details to shedule a meeting with a coach.</p>
            </div>
            <div className=" my-7 *:min-h-[300px]  w-full">
              <JoinTeamCarousel  mentorsData={demoData}/>
            </div>
            <div></div>
      </div>
    </div>
  );
};

export default JoinTeam;
