// src/student/pages/ResumeChatPage.tsx

import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getSessionDetails } from '../../api-chat';
import Chat from '../../components/common/Chat';
import Header from '../../components/common/Header';
import { ChatSession } from '../../types/api';
import { useState } from 'react';

const ResumeChatPage = () => {
    const { sessionId } = useParams<{ sessionId: string }>();
    const navigate = useNavigate();
    const [isChatting, setIsChatting] = useState(false); 

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

    if (isLoading) {
        return (
            <div className="bg-backGround-1 h-screen flex flex-col">
                <Header title="در حال بارگذاری..." />
                <div className="flex-grow flex items-center justify-center">
                    <p>در حال بارگذاری گفتگو...</p>
                </div>
            </div>
        );
    }

    if (isError || !session) {
        console.error("Failed to load chat session");
        return (
            <div className="bg-backGround-1 h-screen flex flex-col">
                <Header title="خطا" />
                <div className="flex-grow flex items-center justify-center">
                    <p>خطا در بارگذاری گفتگو.</p>
                </div>
            </div>
        );
    }
    
    return (
        <div className="bg-backGround-1 h-screen flex flex-col">
            <Header title={session.title} />
            <div className="flex-grow flex flex-col">
                <Chat 
                    resumeSessionId={sessionId} 
                    setIsChatting={setIsChatting}
                />
            </div>
        </div>
    );
}

export default ResumeChatPage;