import LangMgr from "./lang";
import bgEffect from './bgEffect';
import antiSpamDecode from "./antiSpamDecode";
import ContactForm from "./contactForm";

export const langMgr = new LangMgr();
bgEffect();
antiSpamDecode();
new ContactForm();