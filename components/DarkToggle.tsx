'use client'
import useColorMode from "@/hooks/useColorMode"
import { Sun, Moon } from "lucide-react"

export default function DarkToggle() {
  const [colorMode, toggleColorMode] = useColorMode()

  return (
    <div>
      <button onClick={toggleColorMode}>
        {
          colorMode === 'light' ?
            (<Sun />) : (<Moon />)
        }
      </button>
    </div>
  )
}
