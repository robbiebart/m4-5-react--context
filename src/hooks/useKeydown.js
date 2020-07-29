import { useEffect } from "react";

const useKeydown = (code, callback) => {
  useEffect(() => {
    const handleKeydown = (ev) => {
      if (ev.code === code) {
        callback(ev);
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  });
};

export default useKeydown;
