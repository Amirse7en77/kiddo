import React from 'react';
import StudentActivity from './StudentActivity';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Class {
    id: string;
    name: string;
}

interface Student {
  id: string;
  full_name: string;
  last_activity_at: string;
  activity_status: 'Active' | 'Inactive';
  current_mood: {
    emoji: string;
    text: string;
  } | null; // Allow current_mood to be null
}

const StudentsActivities = () => {
    const { data: classes, isLoading: isLoadingClasses } = useQuery<Class[]>({
        queryKey: ['teacherClasses'],
        queryFn: async () => {
            console.log("API CALL: fetching classes for teacher");
            const res = await axios.get('https://kiddo2.pythonanywhere.com/api/v1/academics/classes/');
            console.log("API RESPONSE: fetching classes success", res.data);
            return res.data;
        },
        staleTime: 300000, // Cache for 5 minutes
    });

    const classId = classes?.[0]?.id;

    const { data: students, isLoading: isLoadingStudents, isError, error } = useQuery<Student[]>({
        queryKey: ['students', classId],
        queryFn: async () => {
            console.log(`API CALL: fetching students for class ${classId}`);
            const res = await axios.get(`https://kiddo2.pythonanywhere.com/api/v1/academics/classes/${classId}/students/`);
            console.log(`API RESPONSE: fetching students for class ${classId} success`, res.data);
            return res.data;
        },
        enabled: !!classId,
    });
    
    const isLoading = isLoadingClasses || isLoadingStudents;

    if (isLoading) {
        return <div className="p-4 text-center">در حال بارگذاری دانش‌آموزان...</div>;
    }

    if (isError) {
        console.error("API ERROR: fetching students", error);
        return <div className="p-4 text-center text-red-500">خطا در دریافت اطلاعات دانش‌آموزان.</div>;
    }

    return (
        <div className="border-[2px] border-borderColor-1 rounded-[24px] bg-white">
            {students && students.map((student, index) => (
                <React.Fragment key={student.id}>
                    <StudentActivity student={student} />
                    {index < students.length - 1 && <hr className="mx-4 border-t-2 border-backGround-1" />}
                </React.Fragment>
            ))}
        </div>
    );
};

export default StudentsActivities;