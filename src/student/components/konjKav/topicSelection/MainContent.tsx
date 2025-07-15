import { useState } from 'react';
import { Topic } from '../../../../types/state';

interface MainContentProps {
  onTopicSelect: (topics: string[]) => void;
  selectedStudy: string | null;
}

const getTopicsForStudy = (study: string | null): Topic[] => {
  switch (study) {
    case 'ریاضی':
      return [
        { id: 'algebra', title: 'جبر', description: 'معادلات و عبارات جبری', emoji: '➗' },
        { id: 'geometry', title: 'هندسه', description: 'اشکال و مفاهیم هندسی', emoji: '📐' },
        { id: 'arithmetic', title: 'حساب', description: 'اعداد و عملیات حسابی', emoji: '🔢' },
        { id: 'statistics', title: 'آمار', description: 'آمار و احتمالات', emoji: '📊' }
      ];
    case 'علوم':
      return [
        { id: 'physics', title: 'فیزیک', description: 'قوانین و پدیده‌های فیزیکی', emoji: '⚡' },
        { id: 'chemistry', title: 'شیمی', description: 'مواد و واکنش‌های شیمیایی', emoji: '🧪' },
        { id: 'biology', title: 'زیست‌شناسی', description: 'موجودات زنده و محیط زیست', emoji: '🌱' },
        { id: 'earth', title: 'علوم زمین', description: 'زمین و پدیده‌های طبیعی', emoji: '🌍' }
      ];
    case 'مطالعات اجتماعی':
      return [
        { id: 'history', title: 'تاریخ', description: 'رویدادها و تمدن‌های تاریخی', emoji: '📜' },
        { id: 'geography', title: 'جغرافیا', description: 'مکان‌ها و محیط‌های جغرافیایی', emoji: '🗺️' },
        { id: 'civics', title: 'مدنی', description: 'جامعه و حقوق شهروندی', emoji: '👥' },
        { id: 'culture', title: 'فرهنگ', description: 'آداب و رسوم اجتماعی', emoji: '🏛️' }
      ];
    case 'ادبیات فارسی':
      return [
        { id: 'poetry', title: 'شعر', description: 'اشعار و شاعران', emoji: '📝' },
        { id: 'grammar', title: 'دستور زبان', description: 'قواعد دستوری و نگارشی', emoji: '📖' },
        { id: 'literature', title: 'ادبیات داستانی', description: 'داستان‌ها و نویسندگان', emoji: '📚' },
        { id: 'vocabulary', title: 'واژگان', description: 'معنی و کاربرد کلمات', emoji: '🔤' }
      ];
    default:
      return [];
  }
};

const MainContent: React.FC<MainContentProps> = ({ onTopicSelect, selectedStudy }) => {
  const [selectedTopicIds, setSelectedTopicIds] = useState<string[]>([]);
  const topics = getTopicsForStudy(selectedStudy);

  const handleTopicClick = (id: string) => {
    const newSelection = selectedTopicIds.includes(id)
      ? selectedTopicIds.filter(topicId => topicId !== id)
      : [...selectedTopicIds, id];
    
    setSelectedTopicIds(newSelection);
    
    // Update parent with selected topic titles
    const selectedTopicTitles = newSelection.map(
      selectedId => topics.find(topic => topic.id === selectedId)?.title || ''
    ).filter(title => title !== '');
    
    onTopicSelect(selectedTopicTitles);
  };

  return (
    <div className="mx-[16px] mt-4">
      <div className="grid grid-cols-1 gap-4">
        {topics.map((topic) => (
          <div
            key={topic.id}
            onClick={() => handleTopicClick(topic.id)}
            className={`bg-white rounded-2xl p-4 cursor-pointer transition-all duration-300 ${
              selectedTopicIds.includes(topic.id)
                ? 'border-2 border-primary shadow-lg transform scale-[1.02]'
                : 'border border-gray-100 hover:shadow-md'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="text-3xl">{topic.emoji}</div>
              <div className="flex flex-col">
                <h3 className="font-bold text-lg">{topic.title}</h3>
                <p className="text-sm text-gray-600">{topic.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;