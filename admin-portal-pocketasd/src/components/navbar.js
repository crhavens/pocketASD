import { Link, useMatch, useResolvedPath } from "react-router-dom"

import '../css/navbar.css';

export default function Navbar() {
  const path = window.location.pathname
  return <nav className="nav">
    <Link to="/" className="site-title">
      PocketASD
    </Link>
    <ul>
      <CustomLink to="/appointments">Appointments</CustomLink>
      <CustomLink to="/users">Users</CustomLink>
    </ul>
  </nav>
}

function CustomLink({ to, children, ...props } ) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} className="tabs">{children}</Link>
    </li>
  )
}