import React, { useState } from 'react'; // importe React et le hook , useState gère l'état du composant.
import appStyles from'./style.module.css'; // importe le fichier CSS pour styliser notre application
import { faFutbol, faMusic, faVoteYea } from '@fortawesome/free-solid-svg-icons';
import Counter from './component/Counter.jsx';

// Composant principal App
function App() {
  // useState pour gérer l'état du compteur total
  const [totalCount, setTotalCount] = useState(0);

  // Fonction pour mettre à jour le compteur total
  const gestionchangement = (change) => {
    setTotalCount(prevTotalCount => prevTotalCount + change);
  };

  return (
    <div className={appStyles.App}>
      <h1 className={appStyles.title}>Compteur participants total :  {totalCount}</h1>
      <div className={appStyles.activité}>
        <Counter name="Matchs" icon={faFutbol} onCountChange={gestionchangement} />
        <Counter name="Festivals" icon={faMusic} onCountChange={gestionchangement} />
        <Counter name="Votes" icon={faVoteYea} onCountChange={gestionchangement} />
      </div>
    </div>
  );
}

export default App;