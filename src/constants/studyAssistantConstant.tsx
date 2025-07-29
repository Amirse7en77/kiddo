import { FluentEmoji } from "@lobehub/fluent-emoji";
import { ReactElement } from "react";

export const studyAssistantConstatnt: studyAssistantType[] = [
  {
    logo: (
      <FluentEmoji
        emoji="🚀"

        size={24}
        type={"anim"}
        
      />
    ),
    title: "هیچ درسی دیگه سخت نیست",
    description:
      "با درس‌یـــار هر مبحث سختی از کتاب رو اینجا به زبون ساده و سریع یاد بگیر.",
  },
  {
    logo: <FluentEmoji emoji="😎" size={24} type="anim" />,
    title: "معلم خصوصی ۲۴ ساعته",
    description:
      "درس‌یـــار همیشه همراه تو! هر زمان و هرکجا، برای سوالاتت جواب فوری بگیر.",
  },
  {
    logo: <FluentEmoji emoji="👽" size={24} type="anim" />,
    title: "جمع‌بندی آسون برای امتحانات",
    description:
      "با خلاصه‌های دقیق و نکته‌های امتحانی، سریع‌تر از همیشه برای امتحانات آماده شو.",
  },
];
export interface studyAssistantType {
  logo: ReactElement;
  title: string;
  description: string;
}
