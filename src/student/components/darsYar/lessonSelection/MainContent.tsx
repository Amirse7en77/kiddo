// MainContent.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedLesson } from "../../../../slice/darsyarSlice";
import CardContent from "./CardContent";

interface Lesson {
  id: string;
  title: string;
}

const MainContent: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedLessons, setSelectedLessons] = useState<string[]>([]);
  console.log(selectedLessons);

  const lessons: Lesson[] = [
    { id: 'lesson1', title: 'درس اول' },
    { id: 'lesson2', title: 'درس دوم' },
    { id: 'lesson3', title: 'درس سوم' },
    { id: 'lesson4', title: 'درس چهارم' },
    { id: 'lesson5', title: 'درس پنجم' },
    { id: 'lesson6', title: 'درس ششم' },
  ];

  const handleLessonSelect = (id: string) => {
    setSelectedLessons(prev => {
      const isSelected = prev.includes(id);
      const newSelection = isSelected 
        ? prev.filter(lessonId => lessonId !== id)
        : [...prev, id];
      
      // Update Redux state with all selected lesson titles
      const selectedTitles = newSelection.map(selectedId => 
        lessons.find(lesson => lesson.id === selectedId)?.title || ''
      ).filter(title => title !== '');
      
      dispatch(setSelectedLesson(selectedTitles));
      return newSelection;
    });
  };

  return (
    <div className="border-borderColor-1 bg-white h-screen flex flex-col gap-[12px]">
      <div className="bg-white gap-[16px] mt-[16px] mx-[16px]">
        {lessons.map((lesson) => (
          <CardContent
            key={lesson.id}
            title={lesson.title}
            isSelected={selectedLessons.includes(lesson.id)}
            onClick={() => handleLessonSelect(lesson.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default MainContent;
