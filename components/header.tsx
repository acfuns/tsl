import DarkToggle from "./DarkToggle"
import Login from "./Login"

const Header = () => {
  return (
    <header className="container mx-auto py-3">
      <div className="flex justify-between items-center">
        <div>logo</div>
        <div>
          <Login />
        </div>
      </div>
    </header>
  )
}

export default Header
