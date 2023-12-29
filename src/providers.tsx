import { ReactNode, createContext } from "react";

const ThemeContext = createContext(null);

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return <ThemeContext.Provider value={null}>{children}</ThemeContext.Provider>;
}
