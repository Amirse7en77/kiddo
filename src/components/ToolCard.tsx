import { FC } from "react";


interface ToolCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ToolCard: FC<ToolCardProps> = ({ icon, title, description }) => {
  return (
  <>
   
    <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white shadow gap-2 mb-10">
      <div className="text-3xl">{icon}</div>
      <h3 className="font-bold">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  </>
  );
};

export default ToolCard;
