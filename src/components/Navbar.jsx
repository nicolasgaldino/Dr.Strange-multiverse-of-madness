import styles from '../styles/Navbar.module.css';
import MarvelLogo from '../img/logo-marvel.png';

export const Navbar = () => {
  return (
    <>
      <header className={styles.headerContainer}>
        <a href="https://www.marvel.com/" target="_blank" rel="noreferrer">
          <img src={MarvelLogo} alt="Marvel Logo" />
        </a>
        <nav>
          <ul className={styles.ulContent}>
            <li className={styles.liContent}>
              <a href="#" target="_blank">Home</a>
            </li>
            <li className={styles.liContent}>
              <a href="#" target="_blank">Personagens</a>
            </li>
            <li className={styles.liContent}>
              <a href="#" target="_blank">Galeria</a>
            </li>
            <li className={styles.liContent}>
              <a href="#" target="_blank">Vídeos</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
