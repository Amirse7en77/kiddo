import { FluentEmoji } from '@lobehub/fluent-emoji';
import { ReactElement } from 'react';

export const tarkibkonWelcomeConstant:TarkibkonType[] = [
  {
    logo: <FluentEmoji emoji='🧪' size={24}  type='anim'/>,
    title: 'ترکیب شگفت‌انگیز',
    description:
      'درس‌ها رو با بازی‌ها، فیلم‌ها و هر چیزی که عاشقشی، یاد بگیر. اینجا علم و سرگرمی با هم ترکیب میشن!',
  },
  {
    logo:<FluentEmoji emoji='🕹️' size={24}  type='anim'/>,
    title: 'خداحافظی با درس‌های خسته‌کننده',
    description:
     'سخت‌ترین موضوعات درسی رو با مثال‌هایی از دنیای ماینکرفت، فوتبال یا هری پاتر برات توضیح میدیم.',
  },
  {
    logo: <FluentEmoji emoji='🔭' size={24}  type='anim'/>,
    title: 'از زاویه جدید ببین',
    description:
      'ارتباط‌های پنهان بین درس و دنیای اطرافت رو کشف کن و ببین چطور همه چیز به هم ربط داره.',
  },
];
export interface TarkibkonType{
   logo:ReactElement ,
    title: string,
    description:string
}
