import { ReactNode } from "react";
import { ThemeProvider } from "./theme";

interface Props {
  children: ReactNode;
}

export function AppProvider({ children }: Props) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}