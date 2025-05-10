import { useEffect } from "react";
import { To, useNavigate } from "react-router-dom";
import { EnumTheme, Language, languageAtom, themeAtom } from "../state/global/system";
import { useSetAtom } from "jotai";

interface CustomWindow extends Window {
  _qdnTheme: string;
  _qdnLang: Language;
}
const customWindow = window as unknown as CustomWindow;


export const useIframe = () => {
    const  setTheme = useSetAtom(themeAtom);
    const  setLanguage = useSetAtom(languageAtom);

  
  const navigate = useNavigate();
  useEffect(() => {
    const themeColorDefault = customWindow?._qdnTheme
        if(themeColorDefault === 'dark'){
          setTheme(EnumTheme.DARK)
        } else if(themeColorDefault === 'light'){
          setTheme(EnumTheme.LIGHT)
        }
    const languageDefault: Language = customWindow?._qdnLang
    setLanguage(languageDefault || 'en')
    function handleNavigation(event: { data: { action: string; path: To; theme: 'dark' | 'light'; language: Language } }) {
      if (event.data?.action === "NAVIGATE_TO_PATH" && event.data.path) {
        navigate(event.data.path); // Navigate directly to the specified path

        // Send a response back to the parent window after navigation is handled
        window.parent.postMessage(
          { action: "NAVIGATION_SUCCESS", path: event.data.path },
          "*"
        );
      } else  if (event.data?.action === "THEME_CHANGED" && event.data.theme) {
        const themeColor = event.data.theme
        if(themeColor === 'dark'){
          setTheme(EnumTheme.DARK)
        } else if(themeColor === 'light'){
          setTheme(EnumTheme.LIGHT)
        }
      } else  if (event.data?.action === "LANGUAGE_CHANGED" && event.data.language) {
        setLanguage(event.data.language)
      }
    }

    window.addEventListener("message", handleNavigation);

    return () => {
      window.removeEventListener("message", handleNavigation);
    };
  }, [navigate, setTheme]);
  return { navigate };
};
