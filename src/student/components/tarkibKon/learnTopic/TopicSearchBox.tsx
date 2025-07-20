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
          className="p-[16px] rounded-[16px] w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-chatButton-1 "
          style={{ direction: 'rtl' }}
        />
      </div>
    </div>
  );
};

export default TopicSearchBox;