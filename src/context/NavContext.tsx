import { createContext, useEffect, useState } from "react";

export type NavContextType = {
  mobileNavOpen: boolean;
  setMobileNavOpen: (
    value: boolean | ((prevState: boolean) => boolean),
  ) => void;
};

export const NavContext = createContext<NavContextType | null>(null);

export function NavContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    if (mobileNavOpen) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      document.body.style.height = "100%";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.height = "";
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.height = "";
      document.body.style.overflow = "";
    };
  }, [mobileNavOpen]);

  return (
    <NavContext.Provider
      value={{
        mobileNavOpen,
        setMobileNavOpen,
      }}
    >
      {children}
    </NavContext.Provider>
  );
}
