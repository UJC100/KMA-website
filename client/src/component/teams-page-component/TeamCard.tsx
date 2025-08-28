import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

type Person = {
  picture?: string;
  name?: string;
  country?: string;
  occupation?: string;
  speech?: string;
  profile?: string;
};
type CardProps = {
  teamsData: Person[];
};

const TeamCard = ({ teamsData }: CardProps) => {
  const navigate = useNavigate()

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {teamsData.map((data, i) => (
        <div
          key={i}
          onClick={() =>
               navigate(`/mentor/${i}`) 
            }
          className={`group relative w-full h-[450px] overflow-hidden shadow-lg cursor-pointer mt-7 flex flex-col justify-end p-6`}
        >
          <div
            className="absolute inset-0 bg-no-repeat bg-cover bg-top transition-transform duration-500 ease-in-out lg:group-hover:scale-110"
            style={{ backgroundImage: `url(${data.picture})` }}
          ></div>

          <div
            className="relative z-10 bg-white/20 backdrop-blur-md border border-white/30 p-4 text-white shadow-lg  transform lg:translate-y-full lg:group-hover:translate-y-0

            transition-all duration-500 ease-in-out"
          >
            <h1 className="text-xl font-semibold mb-3 mt-2 flex items-center justify-between">
              {data.name}{" "}
              <span>
                <ArrowUpRightIcon className="h-4 w-4" />
              </span>
            </h1>
            <h2 className="font-semibold">{data.occupation} </h2>
            <p className="text-sm mt-1">
             {data.profile}
            </p>
            {/* <div className="flex space-x-2 text-xl mt-5 items-center opacity-70">
              <span>
                <FaLinkedin />
              </span>
              <span>
                <FaFacebook />
              </span>
              <span>
                <FaTwitter />
              </span>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamCard;
