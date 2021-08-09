import { NavLink } from 'react-router-dom'
import s from './Navigation.module.css'

const Navigation = () => (
  <nav>
    <NavLink exact to="/" className={s.navLink} activeClassName={s.avctiveNavLink}>
      Home
    </NavLink>
    <NavLink to="/movies" className={s.navLink} activeClassName={s.avctiveNavLink}>
      Movies
    </NavLink>
    <hr />
  </nav>
)

export default Navigation