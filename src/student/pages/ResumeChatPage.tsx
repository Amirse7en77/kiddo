// src/student/pages/ResumeChatPage.tsx

import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getSessionDetails } from '../../api-chat';
import Chat from '../../components/common/Chat';
import Header from '../../components/common/Header';
import { ChatSession } from '../../types/api';
import { useState } from 'react';
import LoadingIndicator from '../../components/common/LoadingIndicator';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const ResumeChatPage = () => {
    const { sessionId } = useParams<{ sessionId: string }>();
    const navigate = useNavigate();
    const [isChatting, setIsChatting] = useState(false); 
    const userRole = useSelector((state: RootState) => state.user.role);

    const { data: session, isLoading, isError } = useQuery<ChatSession>({
        queryKey: ['sessionDetails', sessionId],
        queryFn: () => {
            if (!sessionId) {
                return Promise.reject(new Error("No session ID provided"));
            }
            console.log(`API CALL: getSessionDetails for session ID: ${sessionId} from ResumeChatPage`);
            return getSessionDetails(sessionId);
        },
        enabled: !!sessionId,
    });

    const suggestions = [
        { text: 'برام بیشتر توضیح بده' },
        { text: 'نکات کلیدی رو بگو' },
        { text: 'برام خلاصه کن' },
        { text: 'یه مثال دیگه بزن' }
    ];

    const getStudentBackPath = (tool: string): string => {
        switch (tool) {
            case 'DARS_YAR': return '/student/darsyar/recent-chat';
            case 'KONJKAV_SHO': return '/student/konjkav/recent-chat';
            case 'TARKIB_KON': return '/student/tarkibkon/recent-chat';
            default: return '/student';
        }
    };

    const backPath = userRole === 'STUDENT' && session ? getStudentBackPath(session.tool) : undefined;
    const onBackClick = userRole === 'STAFF' ? () => navigate(-1) : undefined;
    
    const getHeaderTitle = () => {
        if (isLoading) return "در حال بارگذاری...";
        if (isError || !session) return "خطا";
        return session.title || "گفتگو";
    };

    if (isLoading) {
        return (
            <div className="bg-backGround-1 h-screen flex flex-col">
                <Header title={getHeaderTitle()} onBackClick={onBackClick} backPath={backPath} />
                <div className="flex-grow flex items-center justify-center">
                    <div className="flex justify-center items-center text-center">
                        <LoadingIndicator className="w-10 h-10 " />
                    </div>
                </div>
            </div>
        );
    }

    if (isError || !session) {
        console.error("Failed to load chat session");
        return (
            <div className="bg-backGround-1 h-screen flex flex-col">
                <Header title={getHeaderTitle()} onBackClick={onBackClick} backPath={backPath}/>
                <div className="flex-grow flex items-center justify-center">
                    <p>خطا در بارگذاری گفتگو.</p>
                </div>
            </div>
        );
    }
    
    return (
        <div className="bg-backGround-1 h-screen flex flex-col">
            <Header title={getHeaderTitle()} onBackClick={onBackClick} backPath={backPath} />
            <div className="flex-grow flex flex-col">
                <Chat 
                    resumeSessionId={sessionId} 
                    setIsChatting={setIsChatting}
                    suggestions={session?.tool === 'DARS_YAR' ? suggestions : undefined}
                />
            </div>
        </div>
    );
}

export default ResumeChatPage;