import DarkToggle from "./DarkToggle"

const Header = () => {
  return (
    <header className="container mx-auto py-3">
      <div className="flex justify-between items-center">
        <div>logo</div>
        <div>
          <DarkToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
