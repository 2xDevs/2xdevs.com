"use client";

import { useMemo, type Dispatch, type SetStateAction } from "react";
import { useTheme } from "next-themes";

type Theme = "dark" | "light";
type SetTheme = Dispatch<SetStateAction<Theme>>;

const useSystemTheme = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  return useMemo(() => {
    return {
      theme: theme === "system" ? systemTheme : theme,
      setTheme,
    } as { theme: Theme; setTheme: SetTheme };
  }, [theme, setTheme, systemTheme]);
};

export default useSystemTheme;
