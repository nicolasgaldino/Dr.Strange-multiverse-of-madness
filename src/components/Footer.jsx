import styles from '../styles/Footer.module.css';

export const Footer = () => {
  return (
    <>
      <footer className={styles.footerContainer}>
        <h2>Nícolas Galdino | 2022</h2>
        <div className={styles.socialNetworks}>
          <a href="https://www.linkedin.com/in/n%C3%ADcolas-galdino-esmael-8370ab199/" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a>
          <a href="https://github.com/nicolasgaldino" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>
          <a href="https://twitter.com/galdino_esmael" target="_blank" rel="noreferrer"><i class="fa-brands fa-twitter"></i></a>
          <a href="https://www.instagram.com/galdino_esmael/" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram"></i></a>
        </div>
      </footer>
    </>
  )
}
