"use client"

import { useState } from "react"
import { Button } from "./ui/button"

export function Incr() {
  const [count, setCount] = useState(0)
  const incr = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <Button onClick={incr}>+1</Button>
      <div>{count}</div>
    </div>
  )
}
