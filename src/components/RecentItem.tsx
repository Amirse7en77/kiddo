import { FC } from "react";

interface RecentItemProps {
  icon: React.ReactNode;
  title: string;
  date: string;
}

const RecentItem: FC<RecentItemProps> = ({ icon, title, date }) => {
  return (
    <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow">
      <div className="flex items-center gap-2">
        <div className="text-2xl">{icon}</div>
        <div className="flex flex-col">
          <span className="text-sm font-medium truncate">{title}</span>
          <span className="text-xs text-gray-500">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default RecentItem;
