import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useDrag } from '@use-gesture/react';
import { animated, useSpring, config } from '@react-spring/web';

import { fetchChatEvents, resolveChatEvent } from "../../../api-teacher";
import { ChatEvent } from "../../../types/api";

import Modal from "./Modal";
import { FluentEmoji } from "@lobehub/fluent-emoji";
import LoadingIndicator from "../../../components/common/LoadingIndicator";
import dangerButton from "./../../../assets/images/dangerButton.svg";

// کامپوننت هر آیتم هشدار برای مدیریت انیمیشن و swipe
const AlertItem: React.FC<{
  event: ChatEvent;
  onResolve: (id: string) => void;
  onClick: (event: ChatEvent) => void;
}> = ({ event, onResolve, onClick }) => {
  const [{ x, opacity, height }, api] = useSpring(() => ({
    x: 0,
    opacity: 1,
    height: 'auto',
    config: config.stiff,
  }));

  const bind = useDrag(({ down, movement: [mx], direction: [xDir], cancel }) => {
    // اگر کاربر بیش از نصف عرض صفحه swipe کند، رویداد حل می‌شود
    if (Math.abs(mx) > window.innerWidth / 2) {
      cancel(); // توقف ژست
      api.start({
        to: async (next) => {
          await next({ x: xDir * window.innerWidth, opacity: 0 });
          await next({ height: "0px", immediate: true });
        },
        onRest: () => onResolve(event.id), // فراخوانی resolve بعد از اتمام انیمیشن
      });
    } else {
      // در غیر این صورت، به جای اول خود برمی‌گردد
      api.start({ x: down ? mx : 0, immediate: down });
    }
  }, {
    axis: 'x',
    filterTaps: true, // اجازه می‌دهد onClick کار کند
    preventScroll: true,
  });

  return (
    <animated.div
      {...bind()}
      style={{ x, opacity, height, touchAction: 'pan-y' }}
      onClick={() => onClick(event)}
      className="alert-box"
    >
      <div className="flex justify-between items-center bg-[#FFF0F0] rounded-[16px] px-[16px] py-[12px] gap-[16px] pl-[24px] text-[#FE4C4A] text-[12px] cursor-pointer">
        <div className="flex items-center gap-[8px]">
          <img src={dangerButton} className="mb-[2px]" alt="Danger"/>
          <h1 className="line-clamp-1">
            {event.student_name} رفتار‌های خطرناکی دارد
          </h1>
        </div>
        <button className="font-extrabold text-[12px]">بررسی</button>
      </div>
    </animated.div>
  );
};


const StudentAlert = () => {
  const { data: events, isLoading } = useQuery({
    queryKey: ["chatEvents"],
    queryFn: fetchChatEvents,
  });
  
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [selectedEvent, setSelectedEvent] = useState<ChatEvent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const resolveEventMutation = useMutation({
    mutationFn: (eventId: string) => resolveChatEvent(eventId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['chatEvents'] });
      setIsModalOpen(false);
      setSelectedEvent(null);
    },
    onError: (error) => {
      console.error("Failed to resolve event", error);
      // TODO: Show toast on error
    }
  });

  const handleOpenModal = (event: ChatEvent) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleViewChat = () => {
    if (selectedEvent?.session_id) {
      navigate(`/teacher/chat/${selectedEvent.session_id}`);
    }
    setIsModalOpen(false);
  };

  const handleResolveClick = () => {
    if (selectedEvent) {
      resolveEventMutation.mutate(selectedEvent.id);
    }
  };

  const dangerEvents =
    events?.filter((e) => e.level === "DANGER" && !e.is_resolved) || [];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center text-center py-[16px]">
        <LoadingIndicator className="w-8 h-8" />
      </div>
    );
  }
  
  if (dangerEvents.length === 0) {
    return null; // اگر هشداری نباشد، چیزی نمایش داده نمی‌شود
  }

  return (
    <>
      <div className="py-[16px] flex flex-col gap-[12px]">
        {dangerEvents.map((event) => (
          <AlertItem 
            key={event.id}
            event={event}
            onResolve={(id) => resolveEventMutation.mutate(id)}
            onClick={handleOpenModal}
          />
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedEvent && (
          <div className="flex flex-col justify-center gap-4">
            <div className="flex flex-col items-center gap-2">
              <div className="p-2 bg-backGround-1 rounded-full">
                <FluentEmoji emoji={selectedEvent.emoji} size={70} type="anim" />
              </div>
              <h1 className="font-bold text-lg">{selectedEvent.student_name}</h1>
              <div className="flex justify-center gap-2">
                <p className="bg-backGround-1 px-3 py-1 rounded-full text-xs">{selectedEvent.subject_name}</p>
                <p className="bg-backGround-1 px-3 py-1 rounded-full text-xs">{selectedEvent.level}</p>
              </div>
            </div>

            <div className="text-right">
              <h2 className="font-bold mb-1">توضیحات</h2>
              <p className="text-sm text-gray-700">{selectedEvent.overview}</p>
            </div>
            
            <div className="mt-6 space-y-3">
              <div className="chat-button rounded-[16px] w-full" onClick={handleResolveClick}>
                <button disabled={resolveEventMutation.isPending} className="button-box text-white w-full cursor-pointer p-[16px] disabled:opacity-70">
                  {resolveEventMutation.isPending ? 'در حال ثبت...' : 'بررسی شد'}
                </button>
              </div>
              <div className="disableButton-box rounded-[16px] w-full" onClick={handleViewChat}>
                <button className="disableChat-button text-gray-500 w-full cursor-pointer p-[16px]">
                  مشاهده چت
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default StudentAlert;