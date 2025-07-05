import { assets } from "../assets/assets";
import JoinTeamCarousel from "../component/join-team/JoinTeamCarousel";
import { demoData } from "../component/demoData";
import Form from "../component/Form";

const JoinTeam = () => {
 
  return (
    <div className="bg-[#f6f4f0] flex flex-col md:flex-row h-screen">
       <div className="w-1/2">
        <img src={assets.logo} className="w-30 h-30" alt="logo" />

        <Form/>

      </div>
      <div className="bg-[#121820]/90 bg-blend-overlay  bg-[url('/src/assets/blurred-bokeh-light-dark-blue-background_219144-488-2.avif')]  bg-no-repeat bg-cover bg-center  w-1/2 m-5 rounded-2xl pt-25 pb-5 px-15 text-amber-500">
            <div>
              <h1 className="text-5xl md:text-4xl mb-4 font-light w-2/3">Guidance made easy — connect, learn, succeed</h1>
              <p className="text-sm font-light">Enter your details to shedule a meeting with a coach.</p>
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
