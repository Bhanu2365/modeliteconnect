import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  return <header className="site-header"><div className="header-inner">
    <Link to="/" className="wordmark" onClick={() => setOpen(false)}>MODELITE<span>CONNECT</span></Link>
    <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <nav className={open ? 'main-nav is-open' : 'main-nav'}>
      <NavLink to="/brands" onClick={() => setOpen(false)}>For brands</NavLink><a href="/#models" onClick={() => setOpen(false)}>For models</a><a href="/#about" onClick={() => setOpen(false)}>About</a>
      <Link to="/login" className="nav-login" onClick={() => setOpen(false)}>Log in</Link><Link to="/request-access" className="button button-dark nav-cta" onClick={() => setOpen(false)}>Request access <span>↗</span></Link>
    </nav>
  </div></header>
}
