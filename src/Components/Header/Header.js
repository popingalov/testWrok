import s from './Header.module.css';
import { Convert } from 'Components';
import HeaderConvert from './HeaderConvert';
export default function Header() {
  return (
    <header className={s.header}>
      <div className="container">
        <HeaderConvert />
        <Convert />
      </div>
    </header>
  );
}
