import { useEffect } from "react";
import { To, useNavigate } from "react-router-dom";


export const useIframe = () => {
  
  const navigate = useNavigate();
  useEffect(() => {

    function handleNavigation(event: { data: { action: string; path: To }; }) {
      if (event.data?.action === "NAVIGATE_TO_PATH" && event.data.path) {
        navigate(event.data.path); // Navigate directly to the specified path

        // Send a response back to the parent window after navigation is handled
        window.parent.postMessage(
          { action: "NAVIGATION_SUCCESS", path: event.data.path },
          "*"
        );
      }
    }

    window.addEventListener("message", handleNavigation);

    return () => {
      window.removeEventListener("message", handleNavigation);
    };
  }, [navigate]);
  return { navigate };
};
