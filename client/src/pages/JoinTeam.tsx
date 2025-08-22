import { assets } from "../assets/assets";
import JoinTeamCarousel from "../component/join-team/JoinTeamCarousel";
import { demoData } from "../component/demoData";
import Form from "../component/Form";
import YouTubePopup from "../component/join-team/PopupVideo";

const JoinTeam = () => {
 
  return (
    <div className="bg-[#f6f4f0] flex  flex-col md:flex-row h-full gap-3 md:gap-0 md:p-5">
      <YouTubePopup />
       <div className="w-full md:w-1/2 ">
        <img src={assets.logo} className="w-30 h-30 m-auto md:m-0" alt="logo" />

        <Form/>

      </div>
      <div className="bg-[#121820]/90 bg-blend-overlay  bg-[url('/src/assets/blurred-bokeh-light-dark-blue-background_219144-488-2.avif')]  bg-no-repeat bg-cover bg-center w-full  md:w-1/2  md:rounded-2xl pt-10 md:pt-25 pb-5 px-5 md:px10 text-amber-500">
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
