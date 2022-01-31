import { NavLink } from 'react-router-dom';
import s from './nav.module.css';
export default function Navigation() {
  return (
    <nav className={s.flex}>
      <NavLink to="/Convert">Convert</NavLink>

      <NavLink to="/CssFoto">CssFoto</NavLink>
      <NavLink to="/Todo">Todo</NavLink>
    </nav>
  );
}
