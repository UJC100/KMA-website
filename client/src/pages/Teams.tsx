import { useEffect, useState } from "react";
import Title from "../component/Title";
import { demoData } from "../component/demoData";
import TeamCard from "../component/teams-page-component/TeamCard";



const Teams = () => {
    const [teamsData, setTeamsData] = useState(demoData);
useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
       <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-amber-50/10">
         <div className="flex flex-col items-center justify-center h-auto mt-36 mb-10"> 
            <h1 className="text-amber-600 pb-3">The Team</h1>
            <Title title="A small team with impressive cred." subtitle="Discover experienced professionals ready to share their knowledge and guide your journey. Your future starts with the courage to learn from the best." h1TextColor="text-amber-700 " pTextColor="text-amber-500"/>
        </div>


        <div className="pb-5 md:pb-10">
            
            <TeamCard teamsData={teamsData}/>
        </div>
        
       </div>
    );
};

export default Teams;