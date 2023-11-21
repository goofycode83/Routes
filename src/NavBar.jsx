import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <div id="navbar">
      <Link to={'/'}>Home</Link>
      <Link to={'/blue'}>Blue</Link>
      <Link to={'/red'}>Red</Link>
      <Link to={'/pink'}>Pink</Link>
      <Link to={'/black'}>Black</Link>
      <Link to={'/purple'}>Purple</Link>
        </div>
  )
}

export default NavBar;