import { FC } from "react";
import { useNavigate } from "react-router-dom";
import icon from './../../../assets/images/DarsYar.png';
 
interface ToolCardProps {
  
  title: string;
  description: string;
  tool: "DARS_YAR" | "KONJKAV" | "SOALYAR" | "AZMOON_SAZ" | "TARKIB_KON";
  hasRecentChats?: boolean;
}

const getToolRoute = (tool: string, hasRecentChats: boolean) => {
  switch (tool) {
    case "DARS_YAR":
      return hasRecentChats ? "/student/darsyar/recent-chat" : "/student/darsyar/study-assistant";
    case "KONJKAV":
      return hasRecentChats ? "/student/konjkav/recent-chat" : "/student/konjkav/welcome";
    case "TARKIB_KON":
      return hasRecentChats ? "/student/tarkibkon/recent-chat" : "/student/tarkibkon/welcome";
    case "SOALYAR":
      return hasRecentChats ? "/student/soalyar/recent-chat" : "/student/soalyar/welcome";
    case "AZMOON_SAZ":
      return "#";
    default:
      return "/student";
  }
};

const ToolCard: FC<ToolCardProps> = ({  title, description, tool, hasRecentChats = false }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const route = getToolRoute(tool, hasRecentChats);
    navigate(route);
  };

  return (
  <div onClick={handleClick} >
   
   <div className="card-box cursor-pointer hover:transform hover:translate-y-1">
     <div className="flex flex-col items-center text-center  rounded-[24px] bg-white   relative p-[16px]  ">
      <img src={icon} className=" absolute -translate-y-11 h-[56px] w-[56px]" alt={title} />
      <h3 className="font-extrabold text-[18px] mt-[16px]">{title}</h3>
      <p className="text-[10px] ">{description}</p>
    </div>
   </div>
  </div>
  );
};

export default ToolCard;
