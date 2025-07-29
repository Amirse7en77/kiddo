import { ReactElement } from "react";
import { FluentEmoji } from '@lobehub/fluent-emoji';


export const konjkavWelcomeConstant:KonjkavType[] = [
  {
    logo: <FluentEmoji emoji='🕵️' size={24}  type='3d'/>,
    title: 'کارآگاهِ دانش شو',
    description:
      "یادگیری رو با پرسیدن سوال‌های هیجان‌انگیز شروع کن و مثل یک کارآگاه به عمق هر موضوعی سفر کن.",
  },
  {
    logo:<FluentEmoji emoji='🌌' size={24}  type='anim'/>,
    title: ' از یک کلمه تا یک کهکشان',
    description:
      'فقط یک موضوع رو انتخاب کن تا کیدو با سوال‌های جدید، راه رو برای کشف‌های بزرگتر برات باز کنه.',
  },
  {
    logo: <FluentEmoji emoji='🗺️' size={24}  type='anim'/>,
    title: 'ماجراجویی در سرزمین علم',
    description:
    'هیچوقت برای یادگرفتن متوقف نشو؛ همیشه یک سوال جالب و یک مسیر کشف نشده منتظرته!',
  },
];
export interface KonjkavType{
   logo:ReactElement ,
    title: string,
    description:string
}
