import { FC } from "react";


interface ToolCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ToolCard: FC<ToolCardProps> = ({ icon, title, description }) => {
  return (
  <>
   
   <div className="bg-gray-300   rounded-2xl px-1 pt-1 pb-2 cursor-pointer">
     <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white  hover:transform hover:translate-y-1">
      <div className="text-3xl">{icon}</div>
      <h3 className="font-bold">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
   </div>
  </>
  );
};

export default ToolCard;
