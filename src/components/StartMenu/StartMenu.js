import styles from './styles.module.css';
import React, { useState } from 'react';

export const StartMenu = ({ onStartClick }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className={styles.main}>
      <input type="file" id="actual-btn" hidden onChange={handleFileChange} />
      <label htmlFor="actual-btn" className={styles.startButton}>Charger l'image</label>
      {selectedFile ? (
        <button className={styles.startButton} onClick={() => onStartClick(selectedFile)}>Démarrer</button>
      ) : (
        <button className={styles.startButton} disabled>Démarrer</button>
      )}
    </div>
  );
};
