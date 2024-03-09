import styles from './styles.module.css';

export const BattleMenu = ({ onAttack, onMagic, onHeal }) => (
  <div className={styles.main}>
    <div onClick={onAttack} className={styles.option}>
      Attaquer
    </div>
    <div onClick={onMagic} className={styles.option}>
      Utiliser la magie
    </div>
    <div onClick={onHeal} className={styles.option}>
      Se soigner
    </div>
  </div>
);
