import React, { useState } from 'react';
import tttContext from './tictactoeContext';

function Provider ({ children }) {
  const [activePlayer, setActivePlayer] = useState(1);
  const [gameBoard, setGameBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const contextVale = {
    activePlayer,
    gameBoard,
    setActivePlayer,
    setGameBoard,
  }
  
  return (
    <tttContext.Provider value={ contextVale }>
      { children }
    </tttContext.Provider>
  );
}

export default Provider;