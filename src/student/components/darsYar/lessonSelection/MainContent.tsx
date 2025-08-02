// MainContent.tsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedLesson } from "../../../../slice/darsyarSlice";
import CardContent from "./CardContent";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import LoadingIndicator from "../../../../components/common/LoadingIndicator";

// Interface for the API response
interface LessonResponse {
  id: string;
  title: string;
}


const MainContent: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedLessons, setSelectedLessons] = useState<string[]>([]);
  const subject = useSelector((state: any) => state.darsyar.selectedStudy?.id);
  
   const {
    data,
    isLoading,
    isError, 
    error,   
  } = useQuery<LessonResponse[]>({ 
    queryKey: ['classes', subject],
    queryFn: async () => { 
      const response = await axios.get<LessonResponse[]>(`https://kiddo2.pythonanywhere.com/api/v1/academics/subjects/${subject}/chapters/`);
      return response.data; 
    },
    enabled: !!subject
    });
  

 if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[500px]">
        <LoadingIndicator className='w-10 h-10' />
      </div>
    );
  }

  const handleLessonSelect = (id: string) => {
    setSelectedLessons(prev => {
      const isSelected = prev.includes(id);
      const newSelection = isSelected 
        ? prev.filter(lessonId => lessonId !== id)
        : [...prev, id];
      
      // Update Redux state with selected lessons including both id and name
      const selectedLessonsData = newSelection
        .map(selectedId => data?.find(l => l.id === selectedId))
        .filter((lesson): lesson is LessonResponse => lesson !== undefined)
        .map(lesson => ({
          id: lesson.id,
          name: lesson.title
        }));
      
      const lessonData = selectedLessonsData.map(lesson => ({
        id: lesson.id,
        title: lesson.name // Map name to title to match Lesson interface
      }));
      dispatch(setSelectedLesson(lessonData));
      return newSelection;
    });
  };

  return (
    (!isLoading) && (
      <div className="border-borderColor-1 bg-white h-screen flex flex-col gap-[12px]">
        <div className="bg-white gap-[16px] mt-[16px] mx-[16px]">
          {data?.map((lesson) => (
            <CardContent
              key={lesson.id}
              title={lesson.title} // CardContent still expects title prop
              isSelected={selectedLessons.includes(lesson.id)}
              onClick={() => handleLessonSelect(lesson.id)}
            />
          ))}
        </div>
      </div>
    ) 
  );
};

export default MainContent;
