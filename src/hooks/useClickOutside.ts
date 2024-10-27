import { useEffect, useRef } from "react";

export default function useClickOutside(handler: () => void) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    }
    document.addEventListener("click", handleClick, true);

    return () => document.removeEventListener("click", handleClick, true);
  }, [handler]);

  return ref;
}
