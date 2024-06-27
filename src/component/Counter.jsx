import React, { useState } from 'react'; // importe React et le hook , useState gère l'état du composant.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // importe fontawesome dans React
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'; // importe les icones fontawesome
import styles from './style.module.css'; // importe le fichier CSS pour styliser notre application


// Composant fonctionnel Counter
function Counter({ name, icon, onCountChange }) {
   // Log pour vérifier les props reçues
  console.log('Counter props:',{ name, icon, onCountChange })
  // useState pour gérer l'état local du compteur
  const [count, setCount] = useState(0);

  // Fonction pour augmenter de 1 le compteur et notifier le changement
  const increment = () => {
    setCount(count + 1);
    onCountChange(1);
  };

  // Fonction pour diminuer de 1 le compteur, sans aller en dessous de zéro, et notifier le changement
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      onCountChange(-1);
    }
  };

  // Fonction pour remettre le compteur à zéro et notifier le changement
  const reset = () => {
    onCountChange(-count);
    setCount(0);
  };

  return (
    <div className={styles.counter}>
      <h2><FontAwesomeIcon icon={icon} /> {name}</h2>
      <div className={styles.bouton}>
        <div className={styles.affichage} >
          <button className={styles.button_modif} onClick={increment}>
        <FontAwesomeIcon icon={faPlus} />
          </button>
          <h2 className={styles.result}> {count}</h2>
          <button className={styles.button_modif} onClick={decrement}>
        <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>
        <button className={styles.zéro} onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;