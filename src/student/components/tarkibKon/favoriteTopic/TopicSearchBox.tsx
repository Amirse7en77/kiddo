import React from 'react';

interface TopicSearchBoxProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const TopicSearchBox: React.FC<TopicSearchBoxProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="mx-[16px] my-4 ">
      <div className="relative">
        <textarea
          rows={1}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder=" اینجا بنویس..."
          className="w-full bg-white text-[12px] border-borderColor-1 border-[2px] rounded-[24px] p-[16px] "
          style={{ direction: 'rtl' }}
        />
      </div>
    </div>
  );
};

export default TopicSearchBox;