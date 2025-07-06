import rocketlogo from './../assets/images/logos/rocketLogo.png'
import emojiLogo from './../assets/images/logos/emojiLogo.png'
import alienLogo from './../assets/images/logos/alienLogo.png'

export const studyAssistantConstatnt:studyAssistantType[] = [
  {
    logo: rocketlogo,
    title: "هیچ درسی دیگه سخت نیست",
    description:
      "با درس‌یـــار هر مبحث سختی از کتاب رو اینجا به زبون ساده و سریع یاد بگیر.",
  },
  {
    logo:emojiLogo,
    title: "معلم خصوصی ۲۴ ساعته",
    description:
      "درس‌یـــار همیشه همراه تو! هر زمان و هرکجا، برای سوالاتت جواب فوری بگیر.",
  },
  {
    logo: alienLogo,
    title: "جمع‌بندی آسون برای امتحانات",
    description:
      "با خلاصه‌های دقیق و نکته‌های امتحانی، سریع‌تر از همیشه برای امتحانات آماده شو.",
  },
];
export interface studyAssistantType{
   logo:string ,
    title: string,
    description:string
}
