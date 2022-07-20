import styles from '../styles/MainContent.module.css';

export const MainContent = () => {
  return (
    <>
      <main className={styles.mainContainer}>
        <div className={styles.textContent}>
          <h1>
            <span>
              Doctor
            </span>
            Strange
          </h1>
          <span className={styles.movieDescription}>
            Multiverse of Madness
          </span>
          <p>
            Um passeio emocionante pelo Multiverso com Doutor Estranho, seu amigo de confiança Wong e Wanda MAximoff, também conhecida como Feiticeira Escarlate.
          </p>
          <a href="https://www.youtube.com/watch?v=X23XCFgdh2M" target="_blank" rel="noreferrer">
            Assista o trailer ⮕
          </a>
        </div>
        <div className={styles.socialContent}>
          <ul>
            <li>
              <a href="#" target="_blank" rel="noreferrer">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noreferrer">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noreferrer">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noreferrer">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}
