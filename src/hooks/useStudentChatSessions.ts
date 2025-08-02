import React from 'react';
import { useQuery, useQueries } from '@tanstack/react-query';
import { fetchChatEvents } from '../api-teacher';
import { getSessionDetails } from '../api-chat';
import { ChatSession } from '../types/api';

export const useStudentChatSessions = (studentName: string | null) => {
  // 1. Fetch all events. This is cached across the app by its queryKey.
  console.log(`HOOK: useStudentChatSessions for student: ${studentName}`);
  const { data: events, isLoading: isLoadingEvents, isError: isErrorEvents } = useQuery({
    queryKey: ['chatEvents'], // Use the same key as ReportsPage to leverage cache
    queryFn: fetchChatEvents,
    enabled: !!studentName, // Only run if a studentName is provided
  });

  // 2. Filter events for the specific student and get unique session IDs
  const sessionIds = React.useMemo(() => {
    if (!events || !studentName) return [];
    
    // Defensive coding: trim names to avoid whitespace issues.
    const trimmedStudentName = studentName.trim();
    const studentEvents = events.filter(e => e.student_name && e.student_name.trim() === trimmedStudentName);
    const uniqueIds = [...new Set(studentEvents.map(e => e.session_id))];
    
    console.log(`HOOK: All events count: ${events.length}. Events for "${trimmedStudentName}": ${studentEvents.length}. Unique sessions: ${uniqueIds.length}`);
    return uniqueIds;
  }, [events, studentName]);

  // 3. Fetch details for each session in parallel
  const sessionQueries = useQueries({
    queries: sessionIds.map(id => ({
      queryKey: ['sessionDetails', id],
      queryFn: () => getSessionDetails(id),
      staleTime: 5 * 60 * 1000, // Cache session details for 5 minutes
      enabled: !!id,
    })),
  });

  // 4. Aggregate loading, error, and data states
  const isLoading = isLoadingEvents || sessionQueries.some(q => q.isLoading);
  const isError = isErrorEvents || sessionQueries.some(q => q.isError);

  const data: ChatSession[] = React.useMemo(() => 
    sessionQueries
      .filter(q => q.isSuccess && q.data)
      .map(q => q.data as ChatSession),
    [sessionQueries]
  );
  
  console.log(`HOOK: Returning isLoading: ${isLoading}, isError: ${isError}, data count: ${data.length}`);
  
  return { data, isLoading, isError };
};