import styles from '../styles/MainContent.module.css';
import {} from 'phosphor-react';

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
          //
        </div>
      </main>
    </>
  )
}
