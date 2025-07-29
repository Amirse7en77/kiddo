import darsyarIcon from "../assets/images/darsyar.webp";
import konjkavIcon from "../assets/images/konjkav.png";
import tarkibkonIcon from "../assets/images/hediye.png";
import { RecentChat } from "../types/chat";

// این تابع ارتباط با API را شبیه‌سازی می‌کند
export const fetchRecentChats = async (): Promise<RecentChat[]> => {
  console.log("Fetching recent chats from API...");
  // تاخیر عمدی برای شبیه‌سازی شبکه
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // داده‌های ساختگی
  const mockChats: RecentChat[] = [
    {
      id: "1",
      title: "توضیحات مربوط به فتوسنتز و اطلاعات مهم",
      tool: "درس‌یار",
      subject: "علوم",
      date: "۱۹ خرداد",
      iconUrl: darsyarIcon,
    },
    {
      id: "2",
      title: "حل معادله درجه دو و کاربردهای آن",
      tool: "کنج‌کاو",
      subject: "ریاضی",
      date: "۱۸ خرداد",
      iconUrl: konjkavIcon,
    },
    {
      id: "3",
      title: "خلاصه نویسی درس تاریخ معاصر ایران",
      tool: "ترکیب‌کن",
      subject: "تاریخ",
      date: "۱۷ خرداد",
      iconUrl: tarkibkonIcon,
    },
  ];

  return mockChats;
};