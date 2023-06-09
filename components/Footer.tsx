import { Github } from "lucide-react";
import DarkToggle from "./DarkToggle";

export default function Footer() {
  return (
    <div className="flex justify-center gap-3">
      <a href="https://github.com/acfuns" target="_black">
        <Github />
      </a>
      <DarkToggle />
    </div>
  )
}
