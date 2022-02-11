import s from './Header.module.css';
import { Convert } from 'Components';
export default function Header() {
  return (
    <header className={s.header}>
      <div className="container">
        <Convert />
      </div>
    </header>
  );
}
