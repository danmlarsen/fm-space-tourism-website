import { createContext, useState } from "react";

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
