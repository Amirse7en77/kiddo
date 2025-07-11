import { FC } from "react";
import icon from './../../../assets/images/DarsYar.png'
 
interface ToolCardProps {
  
  title: string;
  description: string;
}

const ToolCard: FC<ToolCardProps> = ({  title, description }) => {
  return (
  <div >
   
   <div className="card-box cursor-pointer hover:transform hover:translate-y-1">
     <div className="flex flex-col items-center text-center  rounded-[24px] bg-white   relative p-[16px]  ">
      <img src={icon} className=" absolute -translate-y-11 h-[56px] w-[56px]"/>
      <h3 className="font-extrabold text-[18px] mt-[16px]">{title}</h3>
      <p className="text-[10px] ">{description}</p>
    </div>
   </div>
  </div>
  );
};

export default ToolCard;
