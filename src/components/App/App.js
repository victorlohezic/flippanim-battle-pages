import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { Battle, EndMenu, StartMenu } from 'components';
import { playerStats} from 'shared';
export const App = () => {
  const [winner, setWinner] = useState();
  const [mode, setMode] = useState('start');

  useEffect(() => {
    if (mode === 'battle') {
      setWinner(undefined);
    }
  }, [mode]);

  return (
    <div className={styles.main}>
      {mode === 'start' && (
        <StartMenu onStartClick={(file) => {
          setMode('battle');
          if (file) {
            console.log('Chemin du fichier:', file);
            playerStats.img =  window.URL.createObjectURL(file);
            setMode('battle');
          }
        }} />
      )}

      {mode === 'battle' && (
        <Battle
          onGameEnd={winner => {
            setWinner(winner);
            setMode('gameOver');
          }}
        />
      )}

      {mode === 'gameOver' && !!winner && (
        <EndMenu winner={winner} onStartClick={() => setMode('battle')} />
      )}
    </div>
  );
};
