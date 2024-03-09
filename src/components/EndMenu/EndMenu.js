import styles from './styles.module.css';

export const EndMenu = ({ winner, onStartClick }) => {
  return (
    <div className={styles.main}>
      <h1>{winner.name} a gagné !</h1>
      <button className={styles.startButton} onClick={onStartClick}>
        Jouer à nouveau !
      </button>
    </div>
  );
};
