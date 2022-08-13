import React, { createContext, ReactNode, useContext, useState } from 'react';

export type Themes = 'dark' | 'light'

type ThemeContextData = {
  currentTheme: Themes,
  handleChangeTheme: () => void
}

interface AuthProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

export function ThemeProvider({ children }: AuthProviderProps) {
  const [selectedTheme, setSelectedTheme] = useState<Themes>('dark')

  function handleChangeTheme() {
    if (selectedTheme === 'light') {
      setSelectedTheme('dark')
      return
    }

    if (selectedTheme === 'dark') {
      setSelectedTheme('light')
      return
    }
  }

  return <ThemeContext.Provider value={{
    currentTheme: selectedTheme,
    handleChangeTheme
  }}>
    {children}
  </ThemeContext.Provider>
}

export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext)

  if (!context) {
    throw Error('useTheme must be used within a ThemeProvider')
  }

  return context;
}