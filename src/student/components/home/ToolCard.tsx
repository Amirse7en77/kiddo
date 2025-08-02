import { FC } from "react";
import { useNavigate } from "react-router-dom";
 
interface ToolCardProps {
  title: string;
  description: string;
  tool: "DARS_YAR" | "KONJKAV_SHO" | "AZMOON_SAZ" | "TARKIB_KON";
  hasRecentChats?: boolean;
  image:string
}

const getToolRoute = (tool: string, hasRecentChats: boolean) => {
  switch (tool) {
    case "DARS_YAR":
      return hasRecentChats ? "/student/darsyar/recent-chat" : "/student/darsyar/study-assistant";
    case "KONJKAV_SHO":
      return hasRecentChats ? "/student/konjkav/recent-chat" : "/student/konjkav/welcome";
    case "TARKIB_KON":
      return hasRecentChats ? "/student/tarkibkon/recent-chat" : "/student/tarkibkon/welcome";
    case "AZMOON_SAZ":
      return "#"; // No route for Azmoon Saz yet
    default:
      return "/student";
  }
};

const ToolCard: FC<ToolCardProps> = ({  title, description, tool, hasRecentChats = false,image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const route = getToolRoute(tool, hasRecentChats);
    navigate(route);
  };

  return (
  <div onClick={handleClick} className="w-full" >
   
   <div className="card-box cursor-pointer  h-full">
     <div className="flex flex-col items-center text-center rounded-[24px] bg-white relative p-[16px] w-full">
      <img src={image} className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[56px] w-[56px]" alt={title} />
      <h3 className="font-extrabold text-[18px] mt-[28px] mb-[4px]">{title}</h3>
      <p className="text-[10px]">{description}</p>
    </div>
   </div>
  </div>
  );
};

export default ToolCard