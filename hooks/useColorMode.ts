import { useEffect, useState } from "react"

type ColorMode = 'light' | 'dark'

const useColorMode = (): [ColorMode, () => void] => {
  const [colorMode, setColorMode] = useState<ColorMode>('light');

  const toggleColorMode = () => {
    setColorMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }

  useEffect(() => {
    const storedColorMode = localStorage.getItem('colorMode');
    if (setColorMode && typeof storedColorMode === 'string') {
      setColorMode(storedColorMode as ColorMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('colorMode', colorMode);
  }, [colorMode]);

  useEffect(() => {
    if (localStorage.colorMode === 'dark' || (!('colorMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [colorMode]);

  return [colorMode, toggleColorMode]
}

export default useColorMode
