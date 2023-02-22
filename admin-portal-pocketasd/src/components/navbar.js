import '../css/navbar.css';
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  const path = window.location.pathname
  return <nav className="nav">
    <Link to="/" className="site-title">
      Site Name
    </Link>
    <ul>
      <CustomLink to="/appointments">Appointments</CustomLink>
      <CustomLink to="/admin">Admin</CustomLink>
    </ul>
  </nav>
}

function CustomLink({ to, children, ...props } ) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to}>{children}</Link>
    </li>
  )
}