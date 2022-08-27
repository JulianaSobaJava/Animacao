import {useState} from 'react';
import styles from "./styles.module.css";
import {FaBars, FaTimes} from 'react-icons/fa';

export function Header() {
    const [openMenu, setOpenMenu] = useState(false);
  return (
      <header className={styles.headerContainer}>
          <label>Logo</label>
          <FaBars
              onClick={() => {
                  setOpenMenu(true);
              }}
          />
          <nav className={openMenu ? styles.open : styles.close}>
              <FaTimes
                  onClick={() => {
                      setOpenMenu(false);
                  }}
              />
              <a className={styles.active} href='#home'>
                  Home
              </a>
              <a href='#planets'>
                  Planetas
              </a>
              <a href='#stars'>Estrelas</a>
              <a href='#discover'>Descobertas</a>
          </nav>
      </header>
  );
}
