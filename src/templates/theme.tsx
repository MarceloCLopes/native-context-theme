import { ReactNode } from 'react'
import { useTheme } from '../context/theme'
import { ThemeProvider } from 'styled-components'

import theme from '../styles'

type Props = {
  children: ReactNode
}

export function Theme({ children }: Props) {
  const { currentTheme } = useTheme();

  return <ThemeProvider theme={theme[currentTheme]} >{children}</ThemeProvider>
}